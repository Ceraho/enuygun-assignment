import { test } from "@playwright/test";
import { LandingPagePageObject } from "../../page-objects/landing/landing-page.po";
import { SearchResultsPagePageObject } from "../../page-objects/search-results/search-results-page.po";

test.describe.serial("Successful search flow", () => {
  let landingPage: LandingPagePageObject;
  let searchResultsPage: SearchResultsPagePageObject;

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPagePageObject(page);
    searchResultsPage = new SearchResultsPagePageObject(page);

    await landingPage.navigateToLandingPage();
  });

  test("search-flights-depart-between-10-00-and-18-00", async () => {
    await landingPage.clickRoundTrip();

    await landingPage.clickDepartureDate();
    await landingPage.setDate("2024-10-30");

    await landingPage.clickReturnDate();
    await landingPage.setDate("2024-11-14");

    await landingPage.clickSelectOriginCity();

    await landingPage.selectCity("İstanbul");

    await landingPage.clickSelectDestinationCity();

    await landingPage.selectCity("Ankara");

    await landingPage.clickSubmitSearchButton();

    await searchResultsPage.expandDepartureTimeFilter();

    await searchResultsPage.setLowerLimit(100);

    await searchResultsPage.observeFilterLoading();

    await searchResultsPage.setUpperLimit(-60);

    await searchResultsPage.expectFilterLabelAsExpected();
  });

  test("search-thy-flights-depart-between-10-00-and-18-00-increasing-price", async () => {
    await landingPage.clickRoundTrip();

    await landingPage.clickDepartureDate();
    await landingPage.setDate("2024-10-30");

    await landingPage.clickReturnDate();
    await landingPage.setDate("2024-11-14");

    await landingPage.clickSelectOriginCity();

    await landingPage.selectCity("İstanbul");

    await landingPage.clickSelectDestinationCity();

    await landingPage.selectCity("Ankara");

    await landingPage.clickSubmitSearchButton();

    await searchResultsPage.expandDepartureTimeFilter();

    await searchResultsPage.setLowerLimit(100);

    await searchResultsPage.observeFilterLoading();

    await searchResultsPage.setUpperLimit(-60);

    await searchResultsPage.clickListByPrice();

    await searchResultsPage.expandAirlineFilterAccordion();

    await searchResultsPage.selectTurkishAirlinesFilter();

    await searchResultsPage.expectAllAirlinesFilterAsSelected();

    await searchResultsPage.expectItemsAreListedByPrice();
  });
});
