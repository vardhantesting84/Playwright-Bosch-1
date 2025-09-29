import { expect, test } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage';
import { DashboardPage } from '../Pages/DashboardPage';
import { AdminPage } from '../Pages/AdminPage';
import { PIMPage } from '../Pages/PIMPage';
import { LogoutPage } from '../Pages/LogoutPage';
import {parse} from 'csv-parse/sync'
import fs from 'fs'
import path from 'path';

const loginData = JSON.parse(JSON.stringify(require("../TestData/LoginTestData.json")))
const adminTestData = parse(fs.readFileSync(path.join("TestData","AdminTestData.csv"),'utf8'),{
    columns:true,
    skip_empty_lines:true,
});

// for (let admin of adminTestData) {
//     test(`Verify Admin User ${admin.user}`, async ({ page }) => {
//         //Login
//         const lp = new LoginPage(page)
//         await lp.navigateTo();
//         await lp.Login(loginData.username, loginData.password);

//         //Click on Admin
//         const dp = new DashboardPage(page);
//         await dp.ClickAdminSpan();

//         //Admin Page
//         const ap = new AdminPage(page)
//         await ap.SearchAdminUser(admin.user, admin.expectedValue)

//         //Logout Page
//         const lop = new LogoutPage(page);
//         await lop.Logout()
//     })
// }

// test('Verify Admin POM With DDT', async ({ page }) => {
//     //Login
//     const lp = new LoginPage(page)
//     await lp.navigateTo();
//     await lp.Login(loginData.username, loginData.password);

//     //Click on Admin
//     const dp = new DashboardPage(page);
//     await dp.ClickAdminSpan();

//     for (const data of adminTestData) {
//         //Admin Page
//         const ap = new AdminPage(page)
//         await ap.SearchAdminUser(data.user, data.expectedValue)
//     }
//     //Logout Page
//     const lop = new LogoutPage(page);
//     await lop.Logout()
// })

