import { Locator, Page } from "@playwright/test";

export class RegisterPageLocator {
    emailInputField: Locator;
    passwordInputField: Locator;
    submitButton: Locator;

    constructor(page: Page) {
        this.emailInputField = page.getByTestId('membership-signup-email-input')
        this.passwordInputField = page.getByTestId('membership-signup-password-input');
        this.submitButton = page.getByTestId('membership-signup-submit-button');
    }
}
