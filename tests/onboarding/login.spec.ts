import { test } from "@playwright/test";
import { LandingPagePageObject } from "../../page-objects/landing/landing-page.po";
import { LoginPagePageObject } from "../../page-objects/login/login-page.po";

test.describe.serial("login", () => {
  let landingPage: LandingPagePageObject;
  let loginPage: LoginPagePageObject;

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPagePageObject(page);
    loginPage = new LoginPagePageObject(page);

    await landingPage.navigateToLandingPage();
  });

    test("successful-login-flow", async () => {
        await landingPage.navigateToLandingPage();
        await landingPage.clickLoginButton();
        await loginPage.fillEmailField("kipittilimme-4578@yopmail.com");
        await loginPage.fillPasswordField("Qwe12345-");
        await loginPage.clickSubmitButton();
        await loginPage.clickAccountDropddownButton();
        await loginPage.expectLoggedInUserAccountDropddownMenu();
    });
});
