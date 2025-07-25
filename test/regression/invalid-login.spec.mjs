import path from "path"
import test from "../../utils/fixtures.js"
import LoginPage from "../../pages/login.js"
import { mapDataFromCSV } from "../../utils/data-helper.js"

const testData = path.join(process.cwd(), 'data/irregular_test_credentials.csv'), //import csv file
    mappedData = mapDataFromCSV(testData) //

let loginPage

test.describe("[Regression-Negative] Login with invalid credentials", () => {

    test.beforeAll(async ({ sharedPage }) => {
        loginPage = new LoginPage()
        console.log("Open Login Page")
        await loginPage.openCustomerUI()
    })

    function login(email, password) {
        test(`Login with invalid credentials: email: ${email} | password: ${password}`, async () => {
            await loginPage.loginUser(email, password)
            await loginPage.verifyErrorMessageDisplayed()
        })
    }

    // Iterate through mapped objects from csv file
    for (const data of mappedData) {
        let userEmail = data.email,
            userPassword = data.password
        login(userEmail, userPassword)
    }
})
