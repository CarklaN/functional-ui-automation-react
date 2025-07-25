/**
 * @description PageManager singleton class - to make sure that only one and same instance of Playwright page is used always
 */
class PageManager {
  static instance = null

  static init(page) {
    if (!this.instance) {
      this.instance = { page }
    }
  }

  static getPage() {
    return this.instance.page
  }
}

export default PageManager
