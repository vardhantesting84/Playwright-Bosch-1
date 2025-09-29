import { expect, Locator, Page } from "@playwright/test";

export class AdminPage
{
    readonly page:Page;
    readonly UsernameEdtBx:Locator;
    readonly searchbtn:Locator;
    readonly ResultSpan:Locator;

    constructor(page:Page)
    {
        this.page = page
        this.UsernameEdtBx = page.locator("(//input[@class='oxd-input oxd-input--active'])[2]")
        this.searchbtn = page.locator("//button[@type='submit']")
        this.ResultSpan = page.locator("(//span[@class='oxd-text oxd-text--span'])[1]")
    }

    async SearchAdminUser(username:string,expectedResult:string)
    {
        await this.UsernameEdtBx.fill(username)
        await this.searchbtn.click()
        
        await expect(this.ResultSpan).toBeVisible()
        await expect(this.ResultSpan).toHaveText(expectedResult)
        
    }

}