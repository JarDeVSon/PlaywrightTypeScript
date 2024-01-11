import { Page } from "@playwright/test";
import { LoginLocator } from "../locators/login-locator";

let loginLocator;

export class LoginPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
    loginLocator = new LoginLocator(page);
  }
  async goto_login() {
    await loginLocator.base_url;
  }
  async login(username, password) {
    await loginLocator.username.fill(username);
    await loginLocator.password.fill(password);
    await loginLocator.login_button.click();
  }
}
