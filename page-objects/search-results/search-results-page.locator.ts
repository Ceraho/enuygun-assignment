import { Locator, Page } from "@playwright/test";

export class SearchResultsPageLocator {
    departureTimeFilterAccordion: Locator;
    arrivalFilterThumb: Locator;
    filterLoadingDiv: Locator;
    departureFilterThumb: Locator;
    filterLabel: Locator;
    sortByPriceButton: Locator;
    airlineFilterAccordion: Locator;
    turkishAirlinesFilterOption: Locator;
    firstListItemAirline: Locator;
    lastListItemAirline: Locator;
    firstListItemPrice: Locator;
    lastListItemPrice: Locator;

    constructor(page: Page) {
        this.departureTimeFilterAccordion = page.locator(".ctx-filter-departure-return-time > .ctx-filter-departure-return-time");
        this.arrivalFilterThumb = page.getByRole("slider").first();
        this.filterLoadingDiv = page.locator("#SearchRoot > div:nth-child(2) > div.col > div.filter-loading");
        this.departureFilterThumb = page.getByRole("slider").nth(1);
        this.filterLabel = page.locator("#SearchRoot > div:nth-child(2) > div.col-300 > div.filter-accordion > div:nth-child(4) > div.collapse.show > div > div:nth-child(1) > div.filter-slider-detail > div.filter-slider-content");
        this.sortByPriceButton = page.getByTestId("sortButtons0");
        this.airlineFilterAccordion = page.locator(".ctx-filter-airline > .ctx-filter-airline");
        this.turkishAirlinesFilterOption = page.locator("#SearchRoot > div:nth-child(2) > div.col-300 > div.filter-accordion > div:nth-child(6) > div.collapse.show > div > label.filter-label.search__filter_airlines-TK.--label");
        this.firstListItemAirline = page.locator(".flight-list-body div:first-of-type [data-provider]").getByTestId("Türk Hava Yolları");
        this.lastListItemAirline = page.locator(".flight-list-body div:last-of-type [data-provider]").getByTestId("Türk Hava Yolları");
        this.firstListItemPrice = page.locator(".flight-list-body > div:first-of-type .money-int");
        this.lastListItemPrice = page.locator(".flight-list-body > div:last-of-type .money-int");
    }
}
