import path from 'path'
import test from "../../utils/fixtures.js"
import LoginPage from "../../pages/login.js"
import SidebarComponent from "../../pages/common/sidebar.js"
import ProductsList from "../../pages/products/products-list.js"
import CreateProduct from "../../pages/products/create-product.js"
import { config } from "../../config.js"
import {
  validProductDataV1 as data1,
  validProductDataV2 as data2,
} from "../../data/product.js"

let loginPage, sideBarComponent, productsList, createProduct

const testPhoto1 = path.join(process.cwd(), "data/test_photo_1.jpg"),
  testPhoto2 = path.join(process.cwd(), "data/test_photo_2.jpg")

test.describe("Smoke test", () => {
  const username = config.credentials.username,
    password = config.credentials.password

  test.beforeAll(async ({ sharedPage }) => {
    // Init
    loginPage = new LoginPage()
    sideBarComponent = new SidebarComponent()
    productsList = new ProductsList()
    createProduct = new CreateProduct()

    // Open UI - Login page will be open by default
    await loginPage.openCustomerUI()
  })

  test("[Smoke] User can Login, Create, Edit, Delete and Verify Products", async ({ sharedPage }) => {
    await test.step("Login with valid credentials", async () => {
      await loginPage.loginUser(username, password)
    })

    await test.step("Open Products page", async () => {
      await sideBarComponent.openProductsPage()
    })

    await test.step('Open "Create new product" page', async () => {
      await productsList.clickOnCreateNewProduct()
    })

    await test.step("Publish a product. Upload photo and populate fields: Name, Category, Description and Price", async () => {
      await createProduct.createNewProduct({
        productName: data1.name,
        productCategory: data1.category,
        productDescription: data1.description,
        productPrice: data1.price,
        photoPath: testPhoto1,
      })
    })

    await test.step("Verify fields of the created product", async () => {
      await productsList.navigateAndValidateProductFields({
        name: data1.name, // Perfume Oil
        description: data1.description, // Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil
        category: data1.category, // Perfumes
        price: data1.price, // 13
      })
      await productsList.closeProductDetailsModal()
    })
    await test.step("Open a previously created product and edit fields: ", async () => {
      await productsList.navigateToProductEditPage(data1.name) // Brown Perfume
      await createProduct.createNewProduct({
        productName: data2.name, // Perfume Oil
        productCategory: data2.category, // Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil
        productDescription: data2.description, // Perfumes
        productPrice: data2.price, // 13
        photoPath: testPhoto2,
      })
    })

    await test.step("Verify fields of the edited product", async () => {
      await productsList.navigateAndValidateProductFields({
        name: data2.name,
        description: data2.description,
        category: data2.category,
        price: data2.price,
      })
      await productsList.closeProductDetailsModal()
    })

    await test.step("Delete product", async () => {
      await productsList.navigateToProductAndDelete(data2.name) // Perfume Oil
    })
  })
})
