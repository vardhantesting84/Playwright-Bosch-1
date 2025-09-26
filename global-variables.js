import {test as base} from '@playwright/test'

//extend function is used to create custoom fixture
export const test = base.extend({

    //orangeHRMData is the custom fixture
    //use is a funciton which hold the variable/data
    orangeHRMData:async({},use) =>{
        await use({
            url:'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
            username:'Admin',
            password:'admin123',
        });
    },

})