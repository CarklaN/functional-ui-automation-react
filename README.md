# Functional UI Automation React

Functional UI automation testing framework using Playwright for React applications.

## Setup

1. Clone the repository and navigate to the project directory

2. Install dependencies:
```
npm install
```

3. Install Playwright browsers:
```
npx playwright install
```

4. Configure environment variables in `.env` file:
```env
BASE_URL=https://demo.adminjs.co/
LOGIN_USER=example@adminjs.co
LOGIN_PASSWORD=password
```

5. Ensure test data files are present:
   - `data/test_photo_1.jpg`
   - `data/test_photo_2.jpg`
   - `data/irregular_test_credentials.csv`

## Running Tests

### Run specific test suite:
```bash
npx playwright test --project=smoke
npx playwright test --project==invalid-login
```

### Run all tests:
```bash
npx playwright test
```

### Run tests in headed mode:
```bash
HEADLESS=false npm run test --suite=smoke
```

### Code Quality

Run linting:
```bash
npm run lint
npm run lint:fix
```

## Project Structure

```
├── config.js                 # Configuration settings
├── data/                     # Test data files
│   ├── irregular_test_credentials.csv
│   ├── product.js
│   └── test_photo_*.jpg
├── pages/                    # Page Object Model classes
│   ├── common/
│   │   ├── base.js          # Base page class
│   │   ├── page-manager.js  # Singleton page manager
│   │   └── sidebar.js       # Sidebar component
│   ├── login.js             # Login page
│   └── products/
│       ├── create-product.js
│       └── products-list.js
├── test/                     # Test files
│   ├── regression/
│   │   └── invalid-login.spec.mjs
│   └── smoke/
│       └── smoke-test.spec.mjs
└── utils/                    # Utility functions
    ├── data-helper.js       # CSV data processing
    └── fixtures.js          # Playwright fixtures
```

## Test Suites

### Smoke Tests
- Complete user workflow: Login → Create Product → Edit Product → Delete Product
- Validates core application functionality

### Regression Tests
- Invalid login scenarios with various credential combinations
- Data-driven approach using CSV test data
