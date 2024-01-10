import { Page } from "@playwright/test";
import { DashboardLocator } from "../locators/dashboard-locator"

let dashboardLocator;
export class DashboardPage {
    page: Page;

    constructor(page: Page) {
        this.page = page
        dashboardLocator = new DashboardLocator(page);

    }
    async headingSecureArea() {
        await dashboardLocator.heading.isVisible()
    }
   
}