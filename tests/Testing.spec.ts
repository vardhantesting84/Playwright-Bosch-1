import {test,expect} from '@playwright/test'

test("Verify Leave",async ({browser})=>{
    const context = await browser.newContext({storageState:"storageState.json"})
    const page = await context.newPage();

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    //Click on Admin
    await page.locator("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[3]").click();

    //Verifying Navigated toAdmin section or noe
    await expect(page.locator("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']")).toBeVisible();
    
})