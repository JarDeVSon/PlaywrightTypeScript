# Playwright Framework with TypeScript/Nodejs

Sample project to demonstrate Tests written with [Playwright](https://playwright.dev/docs/intro) with [TypeScript](https://www.typescriptlang.org/).

## Pre-requirements

To clone and run this project, you will need:

- [Git](https://git-scm.com/downloads)(I've used version `2.34.1` while writing this doc)
- [Node.js](https://nodejs.org/en/) (I've used version `v24` while writing this doc)
- [Visual Studio Code](https://code.visualstudio.com/)(I've used version `Stable Build` while writing this doc)
- [Playwright Extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)(Install the official extension in the Visual Studio Code)

## Installation
  
Install system dependencies, browsers, and OS dependencies with a single command:

- `npx playwright install --with-deps`

## Test Files Overview

Check it out the following test files:

- .\tests\accessibility_test.spec.ts - Accessibility testing
- .\tests\api_test.spec.ts - API testing
- .\tests\web_test.spec.ts - Web testing using page objects model pattern (POM), check it out below:
- .\tests\visual_test.spec.ts - Visual testing

## Project Structure: Page Object Model and Single Responsability Principle Pattern

| Package  | Responsibility                                                          |
|----------|-------------------------------------------------------------------------|
| data     | responsible for managing test data                                      |
| locators | responsible for identifying web elements                                |
| pages    | responsible for page actions (navigation, (fills, types), clicks, etc.) |
| tests    | responsible for executing the test suite                                |

## Running the tests

Inside that directory, you can run several commands:

Updates the snapshots for visual tests.

```sh
npx playwright test tests/visual/visual.spec.ts --update-snapshots
```

Runs the tests for the web project.

```sh
npx playwright test --project=web
```

Runs the tests for the API project.

```sh
npx playwright test --project=api
```

Runs the tests for the visual project.

```sh
npx playwright test --project=visual
```

Runs the tests for the accessibility project.

```sh
npx playwright test --project=accessibility
```

Starts the interactive UI mode.

```sh
npx playwright test --ui
```

Runs the tests in debug mode.

```sh
npx playwright test --debug
```

Generates test code using the Codegen tool.

```sh
npx playwright codegen
```

Runs all the tests.

```sh
npx playwright test
```

## Show Status Report

To see the status report, you can run the command:

```
npx playwright show-report
```

___
