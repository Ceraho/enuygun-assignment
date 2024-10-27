import { Page } from "@playwright/test";
import { LandingPageLocator } from "./landing-page.locator";

export class LandingPagePageObject {
  page: Page;
  landingPageLocator: LandingPageLocator;

  constructor(page: Page) {
    this.page = page;
    this.landingPageLocator = new LandingPageLocator(this.page);
  }

  async navigateToLandingPage(): Promise<void> {
    await this.page.goto("https://www.enuygun.com/");
  }

  async clickRoundTrip(): Promise<void> {
    await this.landingPageLocator.roundTripRadioButton.click();
  }

  async clickDepartureDate(): Promise<void> {
    await this.landingPageLocator.departureDateInputField.click();
  }

  async clickReturnDate(): Promise<void> {
    await this.landingPageLocator.returnDateInputField.click();
  }

  async setDate(date: string): Promise<void> {
    await this.landingPageLocator.calendarDateOption(date).click();
  }

  async clickSelectOriginCity(): Promise<void> {
    await this.landingPageLocator.selectOriginCityField.click();
  }

  async selectCity(city: string): Promise<void> {
    await this.landingPageLocator.selectCityOption(city).click();
  }

  async clickSelectDestinationCity(): Promise<void> {
    await this.landingPageLocator.selectDepartureCityField.click();
  }

  async clickSubmitSearchButton() {
    await this.landingPageLocator.submitSearchButton.click();
  }

  async clickLoginButton(): Promise<void> {
    await this.landingPageLocator.loginButton.click();
  }
}
