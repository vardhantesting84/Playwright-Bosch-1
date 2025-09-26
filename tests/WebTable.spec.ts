import { test ,expect} from '@playwright/test'

test("Playwright Specific Selectors", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

   const rows = await page.locator("//table[@name='BookTable']/tbody/tr");
   console.log(await rows.count())
   const cols = await page.locator("//table[@name='BookTable']/tbody/tr/th");
   console.log(await cols.count())

    for(let i=1;i<await rows.count();i++)
    {
        const row  = await rows.nth(i);
        //console.log(row)
        const cols = await row.locator("td");

        for(let j = 0;j< await cols.count();j++)
        {
                const value = await cols.nth(j).textContent();
                //console.log(value)

                if(value == "Master In Selenium")
                {
                    //const value = await cols.nth(j).textContent();
                    const value = row.nth(i).nth(3).textContent();
                    console.log(value)
                }
        }

    }

    await page.waitForTimeout(5000);
})