import { expect, Page, test } from '@playwright/test'

let page:Page; //global

test.beforeAll('Navigating to URl',async ({browser})=>{

    page = await browser.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})

test.beforeEach('Login', async () => {
    await page.locator("//input[@name='username']").fill("Admin")
    await page.locator("//input[@name='password']").fill("admin123")
    await page.locator("//button[@type='submit']").click()
})

test('Verify Admin', async () => {
    //Click on Admin
    await page.locator("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[1]").click();

    //Verifying Navigated toAdmin section or noe
    await expect(page.locator("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']")).toBeVisible();
})

test('Verify PIM', async () => {
    //Click on Admin
    await page.locator("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[2]").click();

    //Verifying Navigated to PIM section or noe
    await expect(page.locator("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']")).toBeVisible();
})

test.afterEach('Logout', async () => {
    //Logout
    await page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click();
    await page.locator("//a[text()='Logout']").click();
})