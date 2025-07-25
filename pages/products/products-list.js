import { expect } from '@playwright/test'
import BasePage from '../common/base.js'

class ProductsList extends BasePage {
    constructor() {
        super()
    }

    // Getters
    get buttonCreateNewProduct() {
        return this.page.locator('a[data-testid="action-new"]')
    }

    getProductByName(productName) {
        return this.page.locator(`td[data-property-name="name"] >> text="${productName}"`)
    }

    get createdProductName() {
        return this.page.locator('section.sc-dmqHEX.fGPrHl.adminjs_Box', { hasText: 'Name' })
    }

    get createdProductDescription() {
        return this.page.locator('section.sc-dmqHEX.fGPrHl.adminjs_Box', { hasText: 'Description' })
    }

    get createdProductCategory() {
        return this.page.locator('section.sc-dmqHEX.fGPrHl.adminjs_Box', { hasText: 'Category' })
    }

    get createdProductPrice() {
        return this.page.locator('section.sc-dmqHEX.fGPrHl.adminjs_Box', { hasText: 'Price' })
    }

    get editProductButton() {
        return this.page.locator('a[data-testid="action-edit"]:visible')
    }

    get deleteProductButton() {
        return this.page.locator('a[data-testid="action-delete"]:visible')
    }

    get confirmButton() {
        return this.page.locator('button[label="Confirm"]')
    }

    get cancelButton() {
        return this.page.locator('button[label="Cancel"]')
    }

    get productDetailsCloseButton() {
        return this.page.locator('a.sc-faCEWe.iyMLCn')
    }

    // Actions
    /**
     * Clicks on the create new product button to navigate to the product creation page.
     *
     * @returns {Promise<void>} Promise that resolves when the button is clicked
     */
    async clickOnCreateNewProduct() {
        await this.buttonCreateNewProduct.click()
    }

    /**
     * Opens a product by clicking on its name in the products list.
     *
     * @param {string} productName - The name of the product to open
     * @returns {Promise<void>} Promise that resolves when the product is opened
     */
    async openProductByName(productName) {
        await this.getProductByName(productName).click()
    }

    /**
     * Clicks on the edit button for the first visible product.
     *
     * @returns {Promise<void>} Promise that resolves when the edit button is clicked
     */
    async clickOnEditButton() {
        await this.editProductButton.first().click()
    }

    /**
     * Clicks on the delete button for the first visible product.
     *
     * @returns {Promise<void>} Promise that resolves when the delete button is clicked
     */
    async clickOnDeleteButton() {
        await this.deleteProductButton.first().click()
    }

    /**
     * Confirms the product deletion by clicking the confirm button.
     *
     * @returns {Promise<void>} Promise that resolves when the deletion is confirmed
     */
    async confirmDelete() {
        await this.confirmButton.click()
    }

    /**
     * Cancels the product deletion by clicking the cancel button.
     *
     * @returns {Promise<void>} Promise that resolves when the deletion is cancelled
     */
    async cancelDelete() {
        await this.cancelButton.click()
    }

    /**
     * Navigates to the product edit page by opening a product and clicking edit.
     *
     * @param {string} productName - The name of the product to edit
     * @returns {Promise<void>} Promise that resolves when navigation to edit page is complete
     */
    async navigateToProductEditPage(productName) {
        await this.openProductByName(productName)
        await this.clickOnEditButton()
    }

    /**
     * Navigates to a product and initiates the delete process.
     *
     * @param {string} productName - The name of the product to delete
     * @returns {Promise<void>} Promise that resolves when the delete dialog is opened
     */
    async navigateToProductAndDelete(productName) {
        await this.openProductByName(productName)
        await this.clickOnDeleteButton()
    }

    /**
     * Closes the product details modal by clicking the close button.
     *
     * @returns {Promise<void>} Promise that resolves when the modal is closed
     */
    async closeProductDetailsModal() {
        await this.productDetailsCloseButton.click()
    }

    // Validations
    /**
     * Navigates to a product and validates its field values against expected data.
     *
     * @param {Object} productData - The product data to validate
     * @param {string} name - The expected product name
     * @param {string} description - The expected product description
     * @param {string} category - The expected product category
     * @param {string} price - The expected product price
     * @returns {Promise<void>} Promise that resolves when validation is complete
     */
    async navigateAndValidateProductFields({ name, description, category, price }) {
        await this.openProductByName(name)
    
        if (name) {
            await expect(this.createdProductName).toContainText(name)
        }
        if (description) {
            await expect(this.createdProductDescription).toContainText(description)
        }
        if (category) {
            await expect(this.createdProductCategory).toContainText(category)
        }
        if (price) {
            await expect(this.createdProductPrice).toContainText(price)
        }
    }
}

export default ProductsList
