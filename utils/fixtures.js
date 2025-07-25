// fixture.js
import { test as base, chromium } from '@playwright/test'
import PageManager from '../pages/common/page-manager.js'

// Worker-scoped fixture - can be used in beforeAll
const test = base.extend({
    sharedPage: [async ({ browser }, use) => {
        const context = await browser.newContext()
        const page = await context.newPage()
        PageManager.init(page)
        await use(page)
        await page.close()
    }, { scope: 'worker' }]
})

export default test
