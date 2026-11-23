import { test, expect } from "@playwright/test";
import { DashboardPage } from "../../pages/dashboard-page";
import { data_web } from "../../data/data_web.json";
import { LoginPage } from "../../pages/login-page";

let loginPage: LoginPage;
let dashboardPage: DashboardPage;

test.describe("Suite de testes Web - LoginPage - ", async () => {
  test.beforeEach("Before Each Hooks", async ({ page }) => {
    console.log(test.info().title);
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    await loginPage.goto_login();
  });

  test("test login with successfully", async ({ page }) => {
    await loginPage.username(data_web.username);
    await loginPage.password(data_web.password);
    await loginPage.btn_login();
    await dashboardPage.headingSecureArea();
    await expect(
      page.getByRole("heading", {
        name: "Welcome to the Secure Area. When you are done click logout below.",
      }),
    ).toHaveText(
      /Welcome to the Secure Area. When you are done click logout below./,
    );
  });

  test("test login with invalid username", async ({ page }) => {
    await loginPage.username("invalid_user");
    await loginPage.password(data_web.password);
    await loginPage.btn_login();
    await expect(page.getByText("Your username is invalid!")).toBeVisible();
  });
  test("test login with invalid password", async ({ page }) => {
    await loginPage.username(data_web.username);
    await loginPage.password("invalid_password");
    await loginPage.btn_login();
    await expect(page.getByText("Your password is invalid!")).toBeVisible();
  });

  test.afterEach("After Each Hooks", async ({ page }) => {
    await page.screenshot({
      path: `playwright-report/${test.info().title}.png`,
      fullPage: true,
    });
    await page.close();
  });
});
