import { expect, test } from '@playwright/test'

test.beforeEach('Login', async ({ page }) => {
    //Login
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("//input[@name='username']").fill("Admin")
    await page.locator("//input[@name='password']").fill("admin123")
    await page.locator("//button[@type='submit']").click()
})

test('Verify Admin', async ({ page }) => {
    //Click on Admin
    await page.locator("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[1]").click();

    //Verifying Navigated toAdmin section or noe
    await expect(page.locator("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']")).toBeVisible();
})

test('Verify PIM', async ({ page }) => {
    //Click on Admin
    await page.locator("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[2]").click();

    //Verifying Navigated to PIM section or noe
    await expect(page.locator("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']")).toBeVisible();
})

test.afterEach('Logout', async ({ page }) => {
    //Logout
    await page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click();
    await page.locator("//a[text()='Logout']").click();
})