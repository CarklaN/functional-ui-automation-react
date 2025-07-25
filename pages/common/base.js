import PageManager from './page-manager.js'
import { config } from '../../config.js'

class BasePage {
    constructor() {
        this.page = PageManager.getPage()
    }

    /**
     * Opens the customer UI by navigating to a specified service URL with an optional path.
     *
     * @param {string} [service=''] - The base service URL. Defaults to config.baseURL if empty
     * @param {string} [path=''] - The path to append to the service URL
     * @returns {Promise<void>} Promise that resolves when navigation is complete
     */
    async openCustomerUI(service = '', path = '') {
        if (service === '' || service === undefined) {
            service = config.baseURL
        }
        if (path === '' || path === undefined) {
            path = ''
        }
        await this.page.goto(service + path)
    }
}

export default BasePage
