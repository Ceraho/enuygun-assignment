import { Page } from "@playwright/test";
import { RegisterPageLocator } from "./register-page.locator";

export class RegisterPagePageObject {
  page: Page;
  registerPageLocator: RegisterPageLocator;

  constructor(page: Page) {
    this.page = page;
    this.registerPageLocator = new RegisterPageLocator(this.page);
  }

  async fillEmailField(email: string) {
    await this.registerPageLocator.emailInputField.click();
    await this.registerPageLocator.emailInputField.fill(email);
  }

  async fillPasswordField(password: string) {
    await this.registerPageLocator.passwordInputField.click();
    await this.registerPageLocator.passwordInputField.fill(password);
  }

  async clickSubmitButton() {
    await this.registerPageLocator.submitButton.click();
  }
}
