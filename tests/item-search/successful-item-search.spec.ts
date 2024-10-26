import { test, expect } from '@playwright/test';
import { LandingPagePageObject } from '../../page-objects/landing/landing-page.po';


test.describe.serial('Successful search flow', () => {
  let landingPage: LandingPagePageObject;

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPagePageObject(page);

    await landingPage.navigateToLandingPage();
    await landingPage.clickRejectAllCookiesButton();
    await landingPage.navigateToTurkeySite();
  });
  
  test('Search items successfully', async ({ page }) => {
    const items = await landingPage.returnItemsListFromApi();
    for(const item in items) {
      await landingPage.navigateToLandingPage();
      await landingPage.fillSearchField(items);
      await landingPage.clickSearchIcon();
    }
  });
})
