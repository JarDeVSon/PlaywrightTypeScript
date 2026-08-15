import { test, expect } from "@playwright/test";

test.describe("Suites Visual Regression", async () => {
  test.beforeEach("Before Each Hooks", async ({ page }) => {
    console.log(test.info().title);
    await page.goto(process.env.BASE_URL);
  });

  test("Visual regression - Fruits homepage", async ({ page }) => {
    // Wait until the fruits are displayed
    await expect(page.locator("ul")).toBeVisible();

    // Compare the page with the baseline
    await expect(page).toHaveScreenshot("fruits-homepage.png", {
      fullPage: true,
    });
  });

  test.afterEach("After Each Hooks", async ({ page }) => {
    await page.close();
  });
});
