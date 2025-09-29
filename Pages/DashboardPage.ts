import { Locator, Page } from "@playwright/test";

export class DashboardPage {
    readonly page: Page;
    readonly adminSpan: Locator;
    readonly pimSpan: Locator;

    constructor(page: Page) {
        this.page = page
        this.adminSpan = page.locator("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[1]")
        this.pimSpan = page.locator("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[2]")
    }

    async ClickAdminSpan()
    {
        await this.adminSpan.click();
    }
    async ClickPIMSpan()
    {
        await this.pimSpan.click();
    }
}