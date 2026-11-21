import { Page } from "@playwright/test";
import { LoginLocator } from "../locators/login-locator";

let loginLocator: any;

export class LoginPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
    loginLocator = new LoginLocator(page);
  }
  async goto_login() {
    await loginLocator.base_url;
  }
  
  async username(username: string){
    await loginLocator.username.fill(username)
  }
  async password(password: string){
    await loginLocator.password.fill(password)
  }
  async btn_login(){
    await loginLocator.login_button.click()
  }

}
