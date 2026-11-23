import { test, expect } from '@playwright/test';

test('web portal should display welcome message', async ({ page }) => {
  await page.goto('https://stdistportalcussbx01.z19.web.core.windows.net/');
  await expect(page.locator('h1')).toContainText('Welcome to the Sunrise Medical Distributor Portal');
});