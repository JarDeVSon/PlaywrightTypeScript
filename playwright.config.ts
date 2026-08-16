import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
const baseURL = process.env.BASE_URL;

if (!baseURL) {
  throw new Error("BASE_URL environment variable is required.");
}
// JUnit reporter config for Xray
const xrayOptions = {
  // Whether to add <properties> with all annotations; default is false
  embedAnnotationsAsProperties: true,

  // By default, annotation is reported as <property name='' value=''>.
  // These annotations are reported as <property name=''>value</property>.
  textContentAnnotations: ['test_description'],

  // This will create a "testrun_evidence" property that contains all attachments. Each attachment is added as an inner <item> element.
  // Disables [[ATTACHMENT|path]] in the <system-out>.
  embedAttachmentsAsProperty: 'testrun_evidence',

  // Where to put the report.
  outputFile: './xray-report.xml'
};

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
    ['junit', xrayOptions],
  ],
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.05, // Tolera até 5% de variação de pixels
      threshold: 0.2, // Sensibilidade de cor do pixel
      animations: "allow", // Desativa animações durante a captura de tela
    },
  },
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    launchOptions: {
      slowMo: 100,
    },
    trace: "on-first-retry",
    screenshot: "only-on-failure",
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
      },
    },

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
