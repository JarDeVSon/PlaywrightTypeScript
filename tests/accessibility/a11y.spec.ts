import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { createHtmlReport } from "axe-html-reporter";
import fs from "fs";

test("example accessibility scan with attachment [XSP5-58] @smoke", async ({
  page,
}, testInfo) => {
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
  //Adding Xray properties
  testInfo.annotations.push({ type: "test_key", description: "XSP5-58" });
  testInfo.annotations.push({
    type: "test_summary",
    description: test.info().title,
  });
  // testInfo.annotations.push({ type: "requirements", description: "XT-41" });
  // testInfo.annotations.push({
  //   type: "test_description",
  //   description: test.info().title,
  // });
  // Capture a screenshot and attach it.
  const path = testInfo.outputPath("tmp_screenshot.png");
  await page.screenshot({ path });
  testInfo.attachments.push({
    name: "screenshot.png",
    path,
    contentType: "image/png",
  });
  expect(accessibilityScanResults.violations).toEqual([]);
});
