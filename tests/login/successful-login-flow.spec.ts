import { test, expect } from '@playwright/test';
import { LandingPagePageObject } from '../../page-objects/landing/landing-page.po';
import { LoginPagePageObject } from '../../page-objects/login/login-page.po';


test.describe.serial('Successful Login Flow', () => {
  let landingPage: LandingPagePageObject;
  let loginPage: LoginPagePageObject;

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPagePageObject(page);
    loginPage = new LoginPagePageObject(page);

    await landingPage.navigateToLandingPage();
    await landingPage.clickRejectAllCookiesButton();
    await landingPage.navigateToTurkeySite();
  });
  
  test('Login with valid credentials', async ({ page }) => {
    await landingPage.hoverMyAccountButton();
    await landingPage.clickLoginButtonFromHeader();
    await loginPage.setEmailField("erim.testauto@gmail.com");
    await loginPage.setPasswordField("SmokeTest123");
    await page.waitForTimeout(2500);
    await loginPage.clickLogInButton();
    await landingPage.myAccountButtonContainsText("Hesabım");
  });
})
