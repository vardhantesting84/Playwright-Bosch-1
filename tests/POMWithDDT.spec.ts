import { expect, test } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage';
import { DashboardPage } from '../Pages/DashboardPage';
import { AdminPage } from '../Pages/AdminPage';
import { PIMPage } from '../Pages/PIMPage';
import { LogoutPage } from '../Pages/LogoutPage';

//Require                 stringify         parse
//JSON -> JavaScript Object -> JSON  -> creating a object for the JSON
const loginData = JSON.parse(JSON.stringify(require("../TestData/LoginTestData.json")))
const adminData = JSON.parse(JSON.stringify(require("../TestData/AdminTestData.json")))

// for (const data of adminData) {
//     test(`Verify Admin POM With DDT ${data.user}`, async ({ page }) => {
//         //Login
//         const lp = new LoginPage(page)
//         await lp.navigateTo();
//         await lp.Login(loginData.username, loginData.password);

//         //Click on Admin
//         const dp = new DashboardPage(page);
//         await dp.ClickAdminSpan();

//         //Admin Page
//         const ap = new AdminPage(page)
//         await ap.SearchAdminUser(data.user, data.expectedValue)

//         //Logout Page
//         const lop = new LogoutPage(page);
//         await lop.Logout()
//     })
// }

test('Verify Admin POM With DDT', async ({ page }) => {
    //Login
    const lp = new LoginPage(page)
    await lp.navigateTo();
    await lp.Login(loginData.username, loginData.password);

    //Click on Admin
    const dp = new DashboardPage(page);
    await dp.ClickAdminSpan();

    for (const data of adminData) {
        //Admin Page
        const ap = new AdminPage(page)
        await ap.SearchAdminUser(data.user, data.expectedValue)
    }
    //Logout Page
    const lop = new LogoutPage(page);
    await lop.Logout()
})

// test.only('Verify PIM POM With DDT',async ({page}) =>{

//     const lp = new LoginPage(page)
//     await lp.navigateTo();
//     await lp.Login("Admin","admin123");

//     //Dashboard
//     const dp = new DashboardPage(page);
//     await dp.ClickPIMSpan();

//     //PIM Page
//     const pp = new PIMPage(page);
//     await pp.SearchEmployeeUser("12345678","No Records Found")

//     //Logout Page
//     const lop = new LogoutPage(page);
//     await lop.Logout()
// })