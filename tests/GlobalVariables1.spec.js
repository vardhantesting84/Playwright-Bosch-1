import {expect, test} from '@playwright/test'

test('Verify Admin',async ({page},testInfo) =>{

    const {url,username,password} = testInfo.project.use.testData;
    //Login
    await page.goto(url)
    await page.locator("//input[@name='username']").fill(username)
    await page.locator("//input[@name='password']").fill(password)
    await page.locator("//button[@type='submit']").click()

    //Click on Admin
    await page.locator("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[1]").click();
    
    //Verifying Navigated toAdmin section or noe
    await expect(page.locator("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']")).toBeVisible();

    //Logout
    await page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click();
    await page.locator("//a[text()='Logout']").click();
})

test('Verify PIM',async ({page},testInfo) =>{

    const {url,username,password} = testInfo.project.use.testData;
    //Login
    await page.goto(url)
    await page.locator("//input[@name='username']").fill(username)
    await page.locator("//input[@name='password']").fill(password)
    await page.locator("//button[@type='submit']").click()

    //Click on Admin
    await page.locator("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[2]").click();

    //Verifying Navigated to PIM section or noe
    await expect(page.locator("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']")).toBeVisible();

    //Logout
    await page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click();
    await page.locator("//a[text()='Logout']").click();
})