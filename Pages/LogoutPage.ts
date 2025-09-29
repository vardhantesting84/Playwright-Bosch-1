import { Locator, Page } from "@playwright/test";

export class LogoutPage {
    readonly page: Page;
    readonly arrowIcn: Locator;
    readonly logoutLnk: Locator;

    constructor(page: Page) {
        this.page = page
        this.arrowIcn = page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']")
        this.logoutLnk = page.locator("//a[text()='Logout']")
    }

    async Logout() {
        await this.arrowIcn.click();
        await this.logoutLnk.click();
    }
}