import BasePage from "../common/base.js"

class CreateProduct extends BasePage {
    constructor() {
        super()
    }

    // Getters
    get productName() {
        return this.page.locator('input[name="name"]')
    }

    get productCategory() {
        return this.page.locator('section[data-testid="property-edit-categoryId"]')
    }

    chooseCategory(category) {
        return this.page.locator(`text=${category}`)
    }

    get productDescription() {
        return this.page.locator('textarea[name="description"]')
    }

    get productPrice() {
        return this.page.locator('input[name="price"]')
    }

    get productPhoto() {
        return this.page.locator('input[type="file"]')
    }

    get saveButton() {
        return this.page.locator('button[data-testid="button-save"]')
    }

    // Actions
    /**
     * Creates a new product by filling out the product form and saving it.
     *
     * @param {Object} productData - The product information
     * @param {string} productData.productName - The name of the product
     * @param {string} productData.productCategory - The category of the product
     * @param {string} productData.productDescription - The description of the product
     * @param {string} productData.productPrice - The price of the product
     * @param {string} productData.photoPath - The file path to the product photo
     * @returns {Promise<void>} Promise that resolves when the product is created and saved
     */
    async createNewProduct({productName, productCategory, productDescription, productPrice, photoPath}) {
        await this.productPhoto.waitFor({ state: 'visible' })
        await this.productName.fill(productName)
        await this.productCategory.click()
        await this.chooseCategory(productCategory).click()
        await this.productDescription.fill(productDescription)
        await this.productPrice.fill(productPrice)
        await this.productPhoto.setInputFiles(photoPath)
        await this.saveButton.click()
    }
}

export default CreateProduct
