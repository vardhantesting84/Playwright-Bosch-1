import { test } from '@playwright/test'

// test("Chrome Browser with Single Instance/Context with Single Page", async ({ browser }) => {

//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto("https://www.flipkart.com/")

//     await page.waitForTimeout(3000);
// })

// test("Chrome Browser with Single Instance/Context with Two Page", async ({ browser }) => {

//     const context = await browser.newContext();
//     const page1 = await context.newPage();
//     const page2 = await context.newPage();
    
//     await page1.goto("https://www.flipkart.com/")
//     await page2.goto("https://www.amazon.in/")

//     await page1.waitForTimeout(3000);
//     await page2.waitForTimeout(3000);
// })

// test("Chrome Browser with Two Instance/Context with single Page/Tab/Window for each context/instance", async ({ browser }) => {

//     const context1 = await browser.newContext();
//     const context2 = await browser.newContext();

//     const page1 = await context1.newPage();
//     const page2 = await context2.newPage();
    
//     await page1.goto("https://www.flipkart.com/")
//     await page2.goto("https://www.amazon.in/")

//     await page1.waitForTimeout(3000);
//     await page2.waitForTimeout(3000);
// })

test("Chrome Browser with Two Instance/Context with single Page/Tab/Window for each context/instance", async ({ browser }) => {

    const context1 = await browser.newContext();
    const context2 = await browser.newContext();

    const page1 = await context1.newPage();
    const page2 = await context2.newPage();
    const page3 = await context2.newPage();
    
    await page1.goto("https://www.flipkart.com/")
    await page2.goto("https://www.amazon.in/")
    await page3.goto("https://www.myntra.com/")

    await page1.waitForTimeout(3000);
    await page2.waitForTimeout(3000);
    await page3.waitForTimeout(3000);
})