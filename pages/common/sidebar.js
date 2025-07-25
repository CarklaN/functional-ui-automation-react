import BasePage from "../../pages/common/base.js"

class SidebarComponent extends BasePage {
    constructor() {
        super()
    }

    // Getters
    get productsNavBar() {
        return this.page.locator('div.sc-iCmkLe.htHLzT', { hasText: 'Products'})
    }

    // Actions
    /**
     * Opens the products page by clicking on the products navigation item in the sidebar.
     *
     * @returns {Promise<void>} Promise that resolves when the products navigation is clicked
     */
    async openProductsPage() {
        await this.productsNavBar.click()
    }
}

export default SidebarComponent
