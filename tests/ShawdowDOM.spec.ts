import { test } from '@playwright/test';

test('Shawdow DOM Example', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("//input[@id='name']").fill("Sachin");

    await page.waitForTimeout(3000)

    //Xpath is not supported for Shawdow DOM elements
    //Closed mode Shawdow DOM are not supoorted
    await page.locator("div#shadow_host").locator("input[type='text']").fill("Tendulkar")

    await page.waitForTimeout(3000)

    await page.locator("//input[@id='email']").fill("Sachin@gmail.com");

    await page.waitForTimeout(3000)

})