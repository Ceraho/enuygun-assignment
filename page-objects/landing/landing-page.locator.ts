import { Locator, Page } from "@playwright/test";

export class LandingPageLocator {
    cookiesModal: Locator;
    rejectCookiesButton: Locator;
    countryListDropdownMenu: Locator;
    countryList: Locator;
    countryTurkeyItem: Locator;
    selectCountryButton: Locator;
    logInDropdownMenu: Locator;
    logInButton: Locator;
    myAccountButton: Locator;
    SearchBoxInputField: Locator;
    searchButton: Locator;

    constructor(page: Page) {
        this.cookiesModal = page.locator("#onetrust-button-group-parent");
        this.rejectCookiesButton = page.locator("#onetrust-reject-all-handler");
        this.countryListDropdownMenu = page.locator("#header > header > section.header-top-nav > div > div");
        this.countryList = page.locator("#header > header > section.header-top-nav > div > div > div.country-list-dropdown-wrapper > section > li");
        this.countryTurkeyItem = page.locator("//*[@id='header']/header/section[1]/div/div/div[2]/section/ul/li[1]/p");
        this.selectCountryButton = page.locator("#header > header > section.header-top-nav > div > div > div.country-list-dropdown-wrapper > button");
        this.logInDropdownMenu = page.locator("div.account-nav-item.user-login-container");
        this.logInButton = page.locator("div.login-button");
        this.myAccountButton = page.locator("#account-navigation-container > div > div.account-nav-item.user-login-container");
        this.SearchBoxInputField = page.locator("[data-testid='suggestion']");
        this.searchButton = page.locator("[data-testid='search-icon']");
    }
}