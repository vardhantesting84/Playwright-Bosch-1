import { test } from '@playwright/test'

test("Enter Name", async ({ page }) => {

    //test.slow();
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("//input[@id='name']").fill("Sachin");
    //await page.waitForTimeout(20000);
    await page.locator("//input[@id='email']").fill("Sachin@gmail.com");
    //await page.waitForTimeout(20000);
    await page.locator("//textarea[@id='textarea']").fill("Bangalore");
})

test("Enter Email", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("//input[@id='email1']").fill("Sachin@gmail.com");
    await page.waitForTimeout(3000)
})

test("Enter Phone Number", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("//input[@id='phone']").fill("1234567890");
    await page.waitForTimeout(3000)
})

test('Enter Address', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("//textarea[@id='textarea']").fill("Bangalore");
    await page.waitForTimeout(3000)
})