import { Locator, Page } from "@playwright/test";

export class LandingPageLocator {
    roundTripRadioButton: Locator;
    departureDateInputField: Locator;
    returnDateInputField: Locator;
    calendarDateOption: (date: string) => Locator;
    selectOriginCityField: Locator;
    selectCityOption: (city: string) => Locator;
    selectDepartureCityField: Locator;
    submitSearchButton: Locator;
    loginButton: Locator;

    constructor(page: Page) {
        this.roundTripRadioButton = page.getByTestId("search-round-trip-label").locator("span");
        this.selectOriginCityField = page.getByTestId("endesign-flight-origin-autosuggestion-input");
        this.selectCityOption = (city: string): Locator => {
            return page.getByRole("button", { name: city });
        };
        this.selectDepartureCityField = page.getByTestId("endesign-flight-destination-autosuggestion-input");
        this.departureDateInputField = page.getByTestId('enuygun-homepage-flight-departureDate-datepicker-input');
        this.returnDateInputField = page.getByTestId('enuygun-homepage-flight-returnDate-datepicker-input');
        this.calendarDateOption = (date: string): Locator => {
            return page.locator(`button[title="${date}"]`);
        };
        this.submitSearchButton = page.getByTestId("enuygun-homepage-flight-submitButton");
        this.loginButton = page.getByTestId('membership-signin-dialog-open-button');
    }
}
