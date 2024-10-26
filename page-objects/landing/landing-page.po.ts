import { Page, expect } from "@playwright/test";
import { LandingPageLocator } from "./landing-page.locator";
import axios from "axios";

export class LandingPagePageObject {
    page: Page;
    landingPageLocator: LandingPageLocator;

    constructor(page: Page) {
        this.page = page;
        this.landingPageLocator = new LandingPageLocator(this.page);
    }

    async navigateToLandingPage(): Promise<void> {
        await this.page.goto("https://www.trendyol.com/");
    }

    async clickRejectAllCookiesButton(): Promise<void> {
        // await this.landingPageLocator.cookiesModal.isVisible();
        await this.landingPageLocator.rejectCookiesButton.waitFor(
            {
                state: 'visible',
                timeout: 5_000
            }
        );
        await this.landingPageLocator.rejectCookiesButton.click();
    }

    async navigateToTurkeySite(): Promise<void> {
        await this.landingPageLocator.countryListDropdownMenu.hover();
        await this.landingPageLocator.countryList.click();
        await this.landingPageLocator.countryTurkeyItem.click();
        await this.landingPageLocator.selectCountryButton.click();
    }

    async hoverMyAccountButton(): Promise<void> {
        await this.landingPageLocator.logInDropdownMenu.hover();
    }

    async clickLoginButtonFromHeader(): Promise<void> {
        await this.landingPageLocator.logInButton.click();
    }

    async fillSearchField(input: string): Promise<void> {
        await this.landingPageLocator.SearchBoxInputField.click();
        await this.landingPageLocator.SearchBoxInputField.fill(input);
    }

    async enterSearchItem(): Promise<void> {
        await this.page.keyboard.press('Enter');
    }

    async clickSearchIcon(): Promise<void> {
        await this.landingPageLocator.searchButton.click();
    }

    async myAccountButtonContainsText(text: string): Promise<void> {
        await this.landingPageLocator.myAccountButton.waitFor(
            {
                state: 'visible',
                timeout: 10_000
            }
        );
        await expect(this.landingPageLocator.myAccountButton).toContainText(text);
    }

    async returnItemsListFromApi() {
        const response = await axios.get("https://www.omdbapi.com/?i=tt3896198&apikey=4686bcc2");
        return response.data;
    }
}