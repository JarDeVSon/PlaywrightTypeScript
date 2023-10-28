import { test, expect } from '@playwright/test';

test('test codegen', async ({ page }) => {
  await page.goto('/my-account');
  await page.getByLabel('Email address *', { exact: true }).click();
  await page.getByLabel('Email address *', { exact: true }).fill('dalhePlaywright123@bol.com.br');
  await page.getByLabel('Email address *', { exact: true }).press('Tab');
  await page.locator('#reg_password').click();
  await page.locator('#reg_password').fill('Password@LL$4312121212');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByRole('link', { name: 'Sign out' }).click();
});