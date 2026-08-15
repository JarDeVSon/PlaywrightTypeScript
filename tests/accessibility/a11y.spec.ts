import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { createHtmlReport } from "axe-html-reporter";
import fs from "fs";

test("example accessibility scan with attachment", async ({ page }) => {

  await page.goto(process.env.BASE_URL);

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  fs.writeFileSync(
    "test-results/accessibility-scan-results.json",
    JSON.stringify(accessibilityScanResults, null, 2),
  );
  createHtmlReport({
    results: accessibilityScanResults,
    options: {
      projectKey: `process.env.baseURL`,
      outputDir: "test-results/",
      reportFileName: "accessibility-scan-results.html",
    },
  });

  expect(accessibilityScanResults.violations).toEqual([]);
});
