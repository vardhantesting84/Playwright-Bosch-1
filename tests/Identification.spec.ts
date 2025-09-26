import { test } from '@playwright/test'

test("Enter Name", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //CSS Selector
    //await page.locator("input#name").fill("Sachin");
    //await page.locator("#name").fill("Sachin");
    //await page.locator("input[placeholder$='ame']").fill("Sachin");

    //XPATH
    //await page.locator("//input[@placeholder='Enter Name']").fill("Sachin");
    //await page.locator("(//input[@class='form-control'])[1]").fill("Sachin");
    await page.locator("(//div[@class='form-group'])[2]/preceding-sibling::div/child::input[1]").fill("Sachin");
    await page.waitForTimeout(3000)

})
