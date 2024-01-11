import { Locator, Page } from "@playwright/test";

export class DashboardLocator {
  readonly page: Page;
  readonly heading: Locator;

  constructor(page: Page) {
    this.heading = page.getByRole("heading", {
      name: "Welcome to the Secure Area. When you are done click logout below.",
    });
  }
}
