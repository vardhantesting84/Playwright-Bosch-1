import { expect, test } from '@playwright/test'

test("Enter Name", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    expect(await page.screenshot()).toMatchSnapshot("LoginPage.png");

    await expect(page).toHaveScreenshot("LoginPage.png")
    
})