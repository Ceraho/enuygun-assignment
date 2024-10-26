import { test, expect } from '@playwright/test';
import { LandingPagePageObject } from '../../page-objects/landing/landing-page.po';
import { LoginPagePageObject } from '../../page-objects/login/login-page.po';


test.describe.serial('Failure Login Flow', () => {
  let landingPage: LandingPagePageObject;
  let loginPage: LoginPagePageObject;

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPagePageObject(page);
    loginPage = new LoginPagePageObject(page);

    await landingPage.navigateToLandingPage();
    await landingPage.clickRejectAllCookiesButton();
    await landingPage.navigateToTurkeySite();
  });

  test('Attempt login with invalid password ', async ({ page }) => {
    await landingPage.hoverMyAccountButton();
    await landingPage.clickLoginButtonFromHeader();
    await loginPage.setEmailField("erim.testauto@gmail.com");
    await loginPage.setPasswordField("WrongPassword456");
    await page.waitForTimeout(2500);
    await loginPage.clickLogInButton();
    await loginPage.isLoginFailedMessageVisible();
  });

  test('Attempt login with invalid email', async ({ page }) => {
    await landingPage.hoverMyAccountButton();
    await landingPage.clickLoginButtonFromHeader();
    await loginPage.setEmailField("wrong.email@gmail.com");
    await loginPage.setPasswordField("SmokeTest123");
    await page.waitForTimeout(2500);
    await loginPage.clickLogInButton();
    await loginPage.isLoginFailedMessageVisible();
  });

  test('Attempt login with invalid email and password credentials', async ({ page }) => {
    await landingPage.hoverMyAccountButton();
    await landingPage.clickLoginButtonFromHeader();
    await loginPage.setEmailField("wrong.email@gmail.com");
    await loginPage.setPasswordField("WrongPassword456");
    await page.waitForTimeout(2500);
    await loginPage.clickLogInButton();
    await loginPage.isLoginFailedMessageVisible();
  });

  test('Attempt login with blank email and password fields', async ({ page }) => {
    await landingPage.hoverMyAccountButton();
    await landingPage.clickLoginButtonFromHeader();
    await loginPage.setEmailField("wrong.email@gmail.com");
    await loginPage.setPasswordField("WrongPassword456");
    await page.waitForTimeout(2500);
    await loginPage.clickLogInButton();
    await loginPage.isLoginFailedMessageVisible();
  });
})
