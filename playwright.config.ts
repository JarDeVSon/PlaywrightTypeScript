import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */

require("dotenv").config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  /* Directory of the test files*/
  testDir: "./tests",
  /* Timeout global*/
  timeout: 30000,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 0 : 0,
  /* Opt out of parallel tests on CI. */  
  workers: process.env.CI ? undefined : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ["html", { open: "never" }],
    ["junit", { outputFile: "test-results/junit-report.xml" }],
  ],
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.05, // Tolerates up to 5% pixel variation
      threshold: 0.2, // Pixel color sensitivity
      animations: "allow", // Allows animations during screenshot capture
    },
  },
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /** Whether to run tests in headless mode (true for headless, false for headed) */
    headless: false,
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.BASE_URL,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    launchOptions: {
      slowMo: 500,
    },
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "on",
    actionTimeout: 30000,
  },

  /* Configure projects for major browsers */
  projects: [
    // ======================================================
    // WEB
    // ======================================================

    {
      name: "web",
      testDir: "./tests/web",
      use: {
        ...devices["Desktop Chrome"],
        ...devices["Desktop Firefox"],
        ...devices["Desktop Safari"],
      },
    },
    
    /* Test against mobile viewports. when needed, uncomment the following sections */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },

    // ======================================================
    // API
    // ======================================================

    {
      name: "api",
      testDir: "./tests/api",
    },

    // ======================================================
    // VISUAL
    // ======================================================

    {
      name: "visual",
      testDir: "./tests/visual",
      use: {
        ...devices["Desktop Chrome"],
      },
    },

    // ======================================================
    // ACCESSIBILITY
    // ======================================================

    {
      name: "accessibility",
      testDir: "./tests/accessibility",
      use: {
        ...devices["Desktop Chrome"],
        /* Test against other browsers when needed, uncomment the following sections */
        // ...devices["Desktop Firefox"],
        // ...devices["Desktop Safari"],
      },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
