# Playwright Framework with TypeScript/Nodejs

Sample project to demonstrate Web & API tests written with [Playwright](https://playwright.dev/docs/intro) with [TypeScript](https://www.typescriptlang.org/) running on GitHub Actions.

## Pre-requirements

To clone and run this project, you will need:

- [Git](https://git-scm.com/downloads)(I've used version `2.34.1` while writing this doc)
- [Node.js](https://nodejs.org/en/) (I've used version `v18.15.0` while writing this doc)
- [Visual Studio Code](https://code.visualstudio.com/)(I've used version `Stable Build` while writing this doc)
- [Playwright Extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)(Install the official extension in the Visual Studio Code)

## Installation

Install the Following Libraries using the command Line:

- `npm init playwright@latest`

- Choose between TypeScript or JavaScript (default is TypeScript)
- Name of your Tests folder (default is tests or e2e if you already have a tests folder in your project)
- Add a GitHub Actions workflow to easily run tests on CI
- Install Playwright browsers (default is true)
  
Install system dependencies, browsers, and OS dependencies with a single command:

- `npx playwright install --with-deps`

## Running the tests

Inside that directory, you can run several commands:
```sh
npx playwright test
    Runs the end-to-end tests.

npx playwright test --ui
    Starts the interactive UI mode.

npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

npx playwright test example
    Runs the tests in a specific file.

npx playwright test --debug
    Runs the tests in debug mode.

npx playwright codegen
    Auto generate tests with Codegen.
We suggest that you begin by typing:
npx playwright test

```

And check out the following files:
  - .\tests\example.spec.ts - Example end-to-end test
  - .\tests-examples\demo-todo-app.spec.ts - Demo Todo App end-to-end tests
  - .\playwright.config.ts - Playwright Test configuration
    
In my case, check out the following files:
  - .\tests\api_test.spec.ts - API test
  - .\tests\web_test.spec.ts - Web test using page objects model pattern (POM), check it out below:

| Package  | Responsibility                                                          |
|----------|-------------------------------------------------------------------------|
| fixtures | responsible for managing test data                                      |
| locators | responsible for identifying web elements                                |
| pages    | responsible for page actions (navigation, (fills, types), clicks, etc.) |
| tests    | responsible for executing the test suite                                |
___

Made with ❤️ by [Jardeson Santos](https://github.com/JarDeVSon). [Meu Linkedin](https://www.linkedin.com/in/jardeson-santosqa).
