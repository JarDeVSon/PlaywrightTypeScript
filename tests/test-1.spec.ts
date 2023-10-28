import { test, expect } from '@playwright/test';

test('test using npx playwright codegen feature', async ({ page }) => {
  await page.goto('/my-account');
  await page.getByLabel('Email address *', { exact: true }).click();
  await page.getByLabel('Email address *', { exact: true }).fill(Math.random().toString().substring(2)+'dalhePlaywright12345@bol.com.br');
  await page.getByLabel('Email address *', { exact: true }).press('Tab');
  await page.locator('#reg_password').click();
  await page.locator('#reg_password').fill('Password@LL$4312121212');
  await page.locator('input[name="register"]').click();
  await page.getByRole('link', { name: 'Sign out' }).click();
});