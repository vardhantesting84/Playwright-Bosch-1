import {expect, test} from '@playwright/test'

test("Verify Title Automation Testing App", async ({page}) => {

     await page.goto("https://demo.automationtesting.in/Register.html")

     await expect(page).toHaveTitle("Register")

})