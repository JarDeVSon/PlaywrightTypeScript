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
  
  async username(username){
    await loginLocator.username.fill(username)
  }
  async password(password){
    await loginLocator.password.fill(password)
  }
  async btn_login(){
    await loginLocator.login_button.click()
  }

}
