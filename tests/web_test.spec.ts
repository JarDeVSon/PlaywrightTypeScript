import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/dashboard-page';
import { data } from '../fixtures/data.json';
import { LoginPage } from '../pages/login-page';

let loginPage: LoginPage;
let dashboardPage: DashboardPage;

test.describe('Suite de testes Web - LoginPage', async () => {

  test.beforeEach('Before Each Hooks', async ({ page }) => {
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page);
    await loginPage.goto_login();
  })

  test('test login with successfully', async ({ page }) => {
    console.log('test login with successfully')
    await loginPage.login(data.username, data.password);
    await dashboardPage.headingSecureArea();
    expect(page.getByRole('heading', { name: 'Welcome to the Secure Area. When you are done click logout below.' })).toHaveText(/Welcome to the Secure Area. When you are done click logout below./);
    await page.getByRole('link', { name: 'Logout' }).click();
  })

  test.afterEach('After Each Hooks', async ({ page }) => {
    await page.close();
  })
});