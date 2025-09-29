import { expect, Locator, Page } from "@playwright/test";

export class PIMPage
{
    readonly page:Page;
    readonly EmployeeIdEdtBx:Locator;
    readonly searchbtn:Locator;
    readonly ResultSpan:Locator;

    constructor(page:Page)
    {
        this.page = page
        this.EmployeeIdEdtBx = page.locator("(//input[@class='oxd-input oxd-input--active'])[2]")
        this.searchbtn = page.locator("//button[@type='submit']")
        this.ResultSpan = page.locator("(//span[@class='oxd-text oxd-text--span'])[1]")
    }

    async SearchEmployeeUser(employeeId:string,expectedResult:string)
    {
        await this.EmployeeIdEdtBx.fill(employeeId)
        await this.searchbtn.click()
        
        await expect(this.ResultSpan).toBeVisible()
        await expect(this.ResultSpan).toHaveText(expectedResult)
        
    }

}