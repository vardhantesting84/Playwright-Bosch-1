import { Locator, Page } from "@playwright/test";

export class LoginPage
{
    //Element
    readonly page:Page;
    readonly usernameEdtBx:Locator;
    readonly passwordEdtBx:Locator;
    readonly LoginBtn:Locator;

    //Constructor
    constructor(page:Page)
    {
        this.page = page
        this.usernameEdtBx = page.locator("//input[@name='username']")
        this.passwordEdtBx = page.locator("//input[@name='password']")
        this.LoginBtn = page.locator("//button[@type='submit']")
    }

    //Functions
    async navigateTo()
    {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }

    async Login(username:string,password:string)
    {
        await this.usernameEdtBx.fill(username)
        await this.passwordEdtBx.fill(password)
        await this.LoginBtn.click();
    }
}