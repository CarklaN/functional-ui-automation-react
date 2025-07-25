import { expect } from '@playwright/test'
import BasePage from './common/base.js'

class LoginPage extends BasePage {
    constructor() {
        super()
    }

    // Getters
    get emailField() {
        return this.page.locator('input[name="email"]')
    }

    get passwordField() {
        return this.page.locator('input[type="password"]')
    }

    get loginButton() {
        return this.page.locator('button.adminjs_Button')
    }

    get errorModal() {
        return this.page.locator('text=Wrong email and/or password')
    }

    // Actions
    /**
     * Logs in a user by filling email and password fields and clicking the login button.
     *
     * @param {string} email - The user's email address
     * @param {string} password - The user's password
     * @returns {Promise<void>} Promise that resolves when login attempt is complete
     */
    async loginUser(email, password) {
        await this.emailField.fill(email)
        await this.passwordField.fill(password)
        await this.loginButton.click()
    }

    // Validations
    /**
     * Verifies that the error message is displayed on the login page.
     *
     * @returns {Promise<void>} Promise that resolves when error message visibility is verified
     */
    async verifyErrorMessageDisplayed() {
        await expect(await this.errorModal).toBeVisible()
    }
}

export default LoginPage
