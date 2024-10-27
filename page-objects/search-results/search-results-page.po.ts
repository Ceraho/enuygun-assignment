import { Page, expect } from "@playwright/test";
import { SearchResultsPageLocator } from "./search-results-page.locator";
import { changeSlider } from "../../utils";

export class SearchResultsPagePageObject {
  page: Page;
  landingPageLocator: SearchResultsPageLocator;

  constructor(page: Page) {
    this.page = page;
    this.landingPageLocator = new SearchResultsPageLocator(this.page);
  }

  async expandDepartureTimeFilter(): Promise<void> {
    await this.landingPageLocator.departureTimeFilterAccordion.click();
  }

  async setLowerLimit(pixel_offset: number): Promise<void> {
    await this.page.waitForTimeout(5000);
    await changeSlider(this.page, this.landingPageLocator.arrivalFilterThumb, pixel_offset);
  }

  async observeFilterLoading(): Promise<void> {
    await this.landingPageLocator.filterLoadingDiv.waitFor({ state: "detached" });
  }

  async setUpperLimit(pixel_offset: number): Promise<void> {
    await changeSlider(this.page, this.landingPageLocator.departureFilterThumb, pixel_offset);
  }

  async expectFilterLabelAsExpected(): Promise<void> {
    await expect(this.landingPageLocator.filterLabel).toContainText("10:00 ile 18:00 arası");
  }

  async clickListByPrice(): Promise<void> {
    await this.landingPageLocator.sortByPriceButton.click();
  }

  async expandAirlineFilterAccordion(): Promise<void> {
    await this.landingPageLocator.airlineFilterAccordion.click();
  }

  async selectTurkishAirlinesFilter(): Promise<void> {
    await this.landingPageLocator.turkishAirlinesFilterOption.click();
  }

  async expectAllAirlinesFilterAsSelected(): Promise<void> {
    await expect(this.landingPageLocator.firstListItemAirline).toContainText("Türk Hava Yolları");
    await expect(this.landingPageLocator.lastListItemAirline).toContainText("Türk Hava Yolları");
  }

  async expectItemsAreListedByPrice(): Promise<void> {
    let firstPrice = await this.landingPageLocator.firstListItemPrice.textContent();
    
    let lastPrice = await this.landingPageLocator.lastListItemPrice.textContent();

    if (firstPrice === null || lastPrice === null) {
      return;
    }

    firstPrice = firstPrice.replace(".", "");
    lastPrice = lastPrice.replace(".", "");

    expect(+firstPrice).toBeLessThanOrEqual(+lastPrice);
  }
}
