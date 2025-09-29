import {expect, test} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage';
import { DashboardPage } from '../Pages/DashboardPage';
import { AdminPage } from '../Pages/AdminPage';
import { PIMPage } from '../Pages/PIMPage';
import { LogoutPage } from '../Pages/LogoutPage';

test('Verify Admin',async ({page}) =>{

    //Login Page
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("//input[@name='username']").fill("Admin")
    await page.locator("//input[@name='password']").fill("admin123")
    await page.locator("//button[@type='submit']").click()

    //Click on Dashboard
    await page.locator("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[1]").click();

    //Admin Page
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("Admin");
    await page.locator("//button[@type='submit']").click();
    await expect(page.locator("(//span[@class='oxd-text oxd-text--span'])[1]")).toBeVisible();
    await expect(page.locator("(//span[@class='oxd-text oxd-text--span'])[1]")).toHaveText("(1) Record Found");
    
    //Logout Page
    await page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click();
    await page.locator("//a[text()='Logout']").click();
})

test('Verify PIM',async ({page}) =>{

    //Login Page
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("//input[@name='username']").fill("Admin")
    await page.locator("//input[@name='password']").fill("admin123")
    await page.locator("//button[@type='submit']").click()

    //Dashboard
    await page.locator("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[2]").click();

    //PIM Page
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("Admin");
    await page.locator("//button[@type='submit']").click();
    await expect(page.locator("(//span[@class='oxd-text oxd-text--span'])[1]")).toBeVisible();
    await expect(page.locator("(//span[@class='oxd-text oxd-text--span'])[1]")).toHaveText("No Records Found");

    //Logout Page
    await page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click();
    await page.locator("//a[text()='Logout']").click();
})

test('Verify Admin POM',async ({page}) =>{

    //Login
    const lp = new LoginPage(page)
    await lp.navigateTo();
    await lp.Login("Admin","admin123");

    //Click on Admin
    const dp = new DashboardPage(page);
    await dp.ClickAdminSpan();

    //Admin Page
    const ap = new AdminPage(page)    
    await ap.SearchAdminUser("Admin","(1) Record Found")

    //Logout Page
    const lop = new LogoutPage(page);
    await lop.Logout()
})

test.only('Verify PIM POM',async ({page}) =>{

    const lp = new LoginPage(page)
    await lp.navigateTo();
    await lp.Login("Admin","admin123");

    //Dashboard
    const dp = new DashboardPage(page);
    await dp.ClickPIMSpan();

    //PIM Page
    const pp = new PIMPage(page);
    await pp.SearchEmployeeUser("12345678","No Records Found")

    //Logout Page
    const lop = new LogoutPage(page);
    await lop.Logout()
})