// playwright.config.js

import { defineConfig } from '@playwright/test'


export default defineConfig({
    testDir: './test',
    timeout: 30000,
    retries: 0,
    use: {
      headless: false,
      viewport: { width: 1920, height: 1080 },
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
    },

    projects: [
        {
            name: 'smoke',
            testMatch: 'smoke/smoke-test.spec.mjs'
        },
        {
          name: 'invalid-login',
          testMatch: 'regression/invalid-login.spec.mjs'
        }
    ]
  });
