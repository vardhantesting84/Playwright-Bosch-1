import {test,expect} from '@playwright/test'

test.only("Verify Admin",async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("//input[@name='username']").fill("Admin")
    await page.locator("//input[@name='password']").fill("admin123")
    await page.locator("//button[@type='submit']").click()

    //Click on Admin
    await page.locator("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[1]").click();

    //Verifying Navigated toAdmin section or noe
    await expect(page.locator("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']")).toBeVisible();

    await page.context().storageState({path:"storageState.json"})
})

test("Verify PIM",async ({browser})=>{
    const context = await browser.newContext({storageState:"storageState.json"})
    const page = await context.newPage();

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    // await page.locator("//input[@name='username']").fill("Admin")
    // await page.locator("//input[@name='password']").fill("admin123")
    // await page.locator("//button[@type='submit']").click()

    //Click on Admin
    await page.locator("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[2]").click();

    //Verifying Navigated toAdmin section or noe
    await expect(page.locator("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']")).toBeVisible();
    
})
