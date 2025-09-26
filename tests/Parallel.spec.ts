import { test } from '@playwright/test'

test("Enter Name", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("//input[@id='name']").fill("Sachin");
})

test("Enter Email", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("//input[@id='email']").fill("Sachin@gmail.com");
})

test("Enter Phone Number", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("//input[@id='phone']").fill("1234567890");
})

test('Enter Address', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("//textarea[@id='textarea']").fill("Bangalore");
    await page.waitForTimeout(3000)
})

test('Click on Radio btn', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("//input[@id='male']").click();
    await page.waitForTimeout(3000)
})

test('Click on Checkbx', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("//input[@id='wednesday']").click();
    await page.waitForTimeout(3000)
})