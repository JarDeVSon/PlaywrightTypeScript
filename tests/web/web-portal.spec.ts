<<<<<<< HEAD
import { test, expect } from '@playwright/test';

test('web portal should display welcome message', async ({ page }) => {
  await page.goto('https://stdistportalcussbx01.z19.web.core.windows.net/');
  await expect(page.locator('h1')).toContainText('Welcome to the Sunrise Medical Distributor Portal');
});
=======
import { test, expect } from "@playwright/test";

test.describe("Web Sunrise Medical Portal Tests", async () => {
  test.beforeEach("Before Each Hooks", async ({ page }) => {
    console.log(test.info().title);
    await page.goto(process.env.BASE_URL_SUNRISE_PORTAL);
  });

  test("Sunrise Medical portal should display welcome message", async ({ page }) => {
    await expect(page.locator("h1")).toContainText(
      "Welcome to the Sunrise Medical Distributor Portal",
    );
  });
  test.afterEach("After Each Hooks", async ({ page }) => {
    await page.screenshot({
      path: `playwright-report/${test.info().title}.png`,
      fullPage: true,
    });
    await page.close();
  });
});
>>>>>>> ba60adb (gogogo)
