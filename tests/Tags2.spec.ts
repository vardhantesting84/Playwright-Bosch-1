import {test} from '@playwright/test'

test("Test 1 @smoke", async () => {
    console.log("This is Smoke Test case")
})

test("Test 2 @regression", async () => {
    console.log("This is Regression Test case")
})

test("Test 3 @regression", async () => {
    console.log("This is Sanity Test case")
})

test("Test 4 @smoke @regression ", async () => {
    console.log("This is Smoke and Regression Test case")
})