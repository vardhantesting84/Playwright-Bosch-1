import {test} from '@playwright/test'

test("Test 1",{tag:'@smoke'}, async () => {
    console.log("This is Smoke Test case")
})

test("Test 2",{tag:'@regression'}, async () => {
    console.log("This is Regression Test case")
})

test("Test 3",{tag:'@sanity'}, async () => {
    console.log("This is Sanity Test case")
})

test("Test 4",{tag:['@smoke','@regression']}, async () => {
    console.log("This is Smoke and Regression Test case")
})