import { test ,expect} from '@playwright/test'

test("Playwright Specific Selectors", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //await page.locator("input#datepicker").fill("07/25/2026");

    const year = "2026"
    const month = "June"
    const day = "30"

    await page.click("input#datepicker")
    //await page.locator("input#datepicker").click();

    while(true)
    {
        const currentYear = await page.locator("//span[@class='ui-datepicker-year']").textContent();
        const currentMonth = await page.locator("//span[@class='ui-datepicker-month']").textContent();

        if(currentYear == year && currentMonth == month)
        {
            break;
        }
        await page.waitForTimeout(1000);
        await page.click("//span[text()='Next']");
    }
    
    const dates = await page.$$("//a[@class='ui-state-default']")
    console.log(dates.length)

    for(const date of dates)
    {
        if(await date.textContent() == day)
        {
            await date.click();
        }
    }

    await page.waitForTimeout(5000);
})