import {expect, test} from '@playwright/test'

test("Verify Title BPB Online", async ({page}) => {

     //await page.pause()
     await page.goto("https://practice.bpbonline.com/")
     console.log("Navigated to URL")
     await expect(page).toHaveTitle("BPB Online")
     console.log("Verified Title")
})

test("Verify Title For Automation Practise", async ({page}) => {

     await page.goto("https://testautomationpractice.blogspot.com/")

     await expect(page).toHaveTitle("Automation Testing Practice")

})