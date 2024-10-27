import { Locator, Page } from "@playwright/test";

export class LoginPageLocator {
    emailInputField: Locator;
    passwordInputField: Locator;
    submitButton: Locator;
    accountDropddownButton: Locator;
    loggedInUserAccountDropddownMenu: Locator;
    signUpButton: Locator;

    constructor(page: Page) {
        this.emailInputField = page.getByTestId('membership-signin-email-input');
        this.passwordInputField = page.getByTestId('membership-signin-password-input');
        this.submitButton = page.getByTestId('membership-signin-submit-button');
        this.accountDropddownButton = page.getByTestId('membership').getByTestId('undefined-menu-button');
        this.loggedInUserAccountDropddownMenu = page.locator("div[role='menu'] > a[role='menuitem']");
        this.signUpButton = page.getByTestId('membership-signin-to-signup-button');
    }
}
