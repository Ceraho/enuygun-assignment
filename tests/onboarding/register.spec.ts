import { test } from "@playwright/test";
import { LandingPagePageObject } from "../../page-objects/landing/landing-page.po";
import { LoginPagePageObject } from "../../page-objects/login/login-page.po";
import { RegisterPagePageObject } from "../../page-objects/register/register-page.po";

test.describe.serial("registration", () => {
  let landingPage: LandingPagePageObject;
  let registerPage: RegisterPagePageObject;
  let loginPage: LoginPagePageObject;

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPagePageObject(page);
    registerPage = new RegisterPagePageObject(page);
    loginPage = new LoginPagePageObject(page);

    await landingPage.navigateToLandingPage();
  });

    test("successful-registration-flow", async () => {
      await landingPage.navigateToLandingPage();
      await landingPage.clickLoginButton();
      await loginPage.clickSignUpButton();
      await registerPage.fillEmailField("kipittilimme-4578@yopmail.com");
      await registerPage.fillPasswordField("Qwe12345-");
      await registerPage.clickSubmitButton();
      await loginPage.clickAccountDropddownButton();
      await loginPage.expectLoggedInUserAccountDropddownMenu();
    });
});
