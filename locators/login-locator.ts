import { Locator, Page } from "@playwright/test";

export class LoginLocator {
  readonly page: Page;
  readonly base_url: any;
  readonly username: Locator;
  readonly password: Locator;
  readonly login_button: Locator;

  constructor(page: Page) {
    this.page = page;
    this.base_url = page.goto("/login");
    this.username = page.getByLabel("Username");
    this.password = page.getByLabel("Password");
    this.login_button = page.getByRole("button", { name: " Login" });
  }
}
