import { test ,expect} from '@playwright/test'

test("Playwright Specific Selectors", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //await page.locator("//input[@id='name']").fill("Sachin");
    const NameEdtBx = await page.getByRole('textbox',{name:'name'})
    await NameEdtBx.fill("Sachin")
    await expect(NameEdtBx).toHaveValue("Sachin")

    //await page.getByLabel('Female').click();
    const maleRdBtn = await page.locator("//label[text()='Female']")
    await expect(maleRdBtn).not.toBeChecked();

    const wednesdayChkBx = await page.locator("input#wednesday");
    await expect(wednesdayChkBx).not.toBeChecked();

    maleRdBtn.click();
    wednesdayChkBx.click();

    //await expect(maleRdBtn).toBeChecked();
    await expect(wednesdayChkBx).toBeChecked();

    //await page.locator("//label[text()='Male']").click();
    //await page.locator("//label[@for='male']").click();

    await page.getByPlaceholder("Enter Phone").fill("12345678")


    const countryDrpDw = await page.locator("select#country")
    countryDrpDw.selectOption("Germany")
    //const value = countryDrpDw.inputValue();
    //console.log(value)

    const coloursDrpdwn = await page.locator("select#colors")
    coloursDrpdwn.selectOption("Yellow")

    await page.waitForTimeout(3000);

})