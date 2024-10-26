import { Locator, Page } from "@playwright/test";

export class LoginPageLocator {
    emailInput: Locator;
    passwordInput: Locator;
    submitButton: Locator;
    errorMessageModal: Locator;

    constructor(page: Page) {
        this.emailInput = page.locator("#login-email");
        this.passwordInput = page.locator("#login-password-input");
        this.submitButton = page.locator("[type='submit']"); 
        //locator('form').getByRole('button', { name: 'Giriş Yap' })
        // [type='submit']
        this.errorMessageModal = page.locator("#login-register > div.lr-container > #error-box-wrapper");
    }
}