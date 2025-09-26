import { expect, test } from '@playwright/test'

test("Assertions", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Page Assertions
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveURL(/blogspot\.com/) //Using regrex

    await expect(page).toHaveTitle("Automation Testing Practice")
    await expect(page).toHaveTitle(/Automation/)

    //Element Assertions
    //const NameEdtBx = await page.locator("//input[@id='name']")
    //await expect(NameEdtBx).toBeVisible();
    await expect(page.locator("//input[@id='name']")).toBeVisible();
    await expect(page.locator("//input[@id='name']")).toBeAttached();
    
    //Text Assertions
    const heading = page.locator("//h1[@class='title']")
    await expect(heading).toHaveText("Automation Testing Practice");
    await expect(heading).toContainText("Automation")
    await expect(heading).toContainText("Practice")
    await expect(heading).toHaveText(/Automation/)//Using Regex

    page.locator("//input[@id='name']").fill("Sachin ")
    await expect(page.locator("//input[@id='name']")).toHaveValue("Sachin")

    //Attribute Assertions
    await expect(page.locator("//input[@id='name']")).toHaveAttribute("placeholder")
    await expect(page.locator("//input[@id='name']")).toHaveAttribute("placeholder","Enter Name")

    page.locator("//input[@id='name']").fill("Sachin ")
    await expect(page.locator("//input[@id='name']")).not.toHaveValue("Sachin ")

    await page.waitForTimeout(3000)
})
