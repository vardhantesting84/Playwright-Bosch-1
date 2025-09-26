import {test,expect} from '@playwright/test'

test.use({storageState:"StorageState1.json"})

test("Verify Admin",async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    const dashboardEle = await page.locator("//h6[text()='Dashboard']")
    await expect(dashboardEle).toBeVisible();

    //Click on Admin
    await page.locator("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[1]").click();
    //Verifying Navigated toAdmin section or noe
    await expect(page.locator("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']")).toBeVisible();
})

test("Verify PIM",async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    const dashboardEle = await page.locator("//h6[text()='Dashboard']")
    await expect(dashboardEle).toBeVisible();

    //Click on Admin
    await page.locator("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[2]").click();
    //Verifying Navigated toAdmin section or noe
    await expect(page.locator("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']")).toBeVisible();
})

test("Verify Leave",async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    const dashboardEle = await page.locator("//h6[text()='Dashboard']")
    await expect(dashboardEle).toBeVisible();
    
    //Click on Admin
    await page.locator("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[3]").click();
    //Verifying Navigated toAdmin section or noe
    await expect(page.locator("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']")).toBeVisible();
})