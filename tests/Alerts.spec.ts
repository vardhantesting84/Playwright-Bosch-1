import { test ,expect} from '@playwright/test'

test("Playwright Specific Selectors", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("//input[@id='name']").fill("Sachin")

    await page.on('dialog',async dialog =>{
            await dialog.accept("Sachin");
            //await dialog.dismiss();
    })

    //await page.locator("//button[@id='confirmBtn']").click();
    await page.locator("//button[@id='promptBtn']").click();

    // await page.on('dialog',async dialog =>{
    //         await dialog.accept();
    // })

    await page.waitForTimeout(5000);

})