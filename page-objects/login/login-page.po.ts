import { Page, expect } from "@playwright/test";
import { LoginPageLocator } from "./login-page.locator";

export class LoginPagePageObject {
    page: Page;
    loginPageLocator: LoginPageLocator;

    constructor(page: Page) {
        this.page = page;
        this.loginPageLocator = new LoginPageLocator(this.page);
    }

    async setEmailField(emailText: string): Promise<void> {
        await this.loginPageLocator.emailInput.fill(emailText);
    }

    async setPasswordField(passwordText: string): Promise<void> {
        await this.loginPageLocator.passwordInput.fill(passwordText);
    }

    async clickLogInButton(): Promise<void> {
        await this.loginPageLocator.submitButton.click();
    }

    async isLoginFailedMessageVisible(): Promise<void> {
        await this.loginPageLocator.errorMessageModal.waitFor(
            {
                state: 'visible',
                timeout: 10_000
            }
        );
        await expect(this.loginPageLocator.errorMessageModal).toBeVisible();
    }
}