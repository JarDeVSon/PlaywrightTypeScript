import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { createHtmlReport } from "axe-html-reporter";
import fs from "fs";

test.describe("Test Accessibility - Sunrise Medical Portal", async () => {
  test.beforeEach("Before Each Hooks", async ({ page }) => {
    console.log(test.info().title);
    await page.goto(process.env.BASE_URL_SUNRISE_PORTAL);
  });
  test("example accessibility scan with attachment", async ({ page }) => {
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    fs.writeFileSync(
      "test-results/accessibility-scan-results.json",
      JSON.stringify(accessibilityScanResults, null, 2),
    );
    createHtmlReport({
      results: accessibilityScanResults,
      options: {
        projectKey: process.env.BASE_URL_SUNRISE_PORTAL,
        outputDir: "test-results/",
        reportFileName: "accessibility-scan-results.html",
      },
    });
    expect(accessibilityScanResults.violations).toEqual([]);
  });
  test.afterEach("After Each Hooks", async ({ page }) => {
    await page.close();
  });
});
