import { expect, test } from '@playwright/test';

test('AutoWait 1', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/dynamic_loading/1");
    await expect(page).toHaveTitle("The Internet")

    await page.locator("//button[text()='Start']").click();

    await page.locator("//h4[text()='Hello World!']").click();
    //await page.locator("//h4[text()='Hello World!']").isVisible();

})

test('AutoWait 2', async ({ page }) => {
    //test.slow()
    await page.goto("http://uitestingplayground.com/ajax");
    await expect(page).toHaveTitle("AJAX Data")

    await page.locator("//button[@id='ajaxButton']").click();

    //await page.locator("//p[@class='bg-success']").click({timeout:17000});

    //await page.locator("//p[@class='bg-success']").click();

    const message = await page.locator("//p[@class='bg-success']")

    await expect(message).toHaveText("Data loaded with AJAX get request.")
})