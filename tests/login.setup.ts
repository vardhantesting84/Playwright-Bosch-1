import {expect, test as setup} from '@playwright/test'

setup("Authenticate",async ({page}) =>{
    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("//input[@name='username']").fill("Admin")
    await page.locator("//input[@name='password']").fill("admin123")
    await page.locator("//button[@type='submit']").click()

    //Verification means successful login
    const dashboardEle = await page.locator("//h6[text()='Dashboard']")
    await expect(dashboardEle).toBeVisible();

    await page.context().storageState({path:"StorageState1.json"})

})