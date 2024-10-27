import { Page, expect } from "@playwright/test";
import { LoginPageLocator } from "./login-page.locator";

export class LoginPagePageObject {
  page: Page;
  loginPageLocator: LoginPageLocator;

  constructor(page: Page) {
    this.page = page;
    this.loginPageLocator = new LoginPageLocator(this.page);
  }

  async fillEmailField(email: string) {
    await this.loginPageLocator.emailInputField.click();
    await this.loginPageLocator.emailInputField.fill(email);
  }

  async fillPasswordField(password: string) {
    await this.loginPageLocator.passwordInputField.click();
    await this.loginPageLocator.passwordInputField.fill(password);
  }

  async clickSubmitButton() {
    await this.loginPageLocator.submitButton.click();
  }

  async clickAccountDropddownButton() {
    await this.loginPageLocator.accountDropddownButton.click();
  }

  async expectLoggedInUserAccountDropddownMenu() {
   await expect(this.loginPageLocator.loggedInUserAccountDropddownMenu).toBeVisible();  
  }

  async clickSignUpButton() {
    await this.loginPageLocator.signUpButton.click();
  }
}
