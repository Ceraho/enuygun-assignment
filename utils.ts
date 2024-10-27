import { Locator, Page } from "@playwright/test";

export async function changeSlider(page: Page, thumb: Locator, moveDirection: number) {
    const thumbBoundingBox = await thumb.boundingBox();

    if (thumbBoundingBox === null) {
        return;
    }

    await page.mouse.move(thumbBoundingBox.x + thumbBoundingBox.width / 2, thumbBoundingBox.y + thumbBoundingBox.height / 2);
    await page.mouse.down();
    await page.mouse.move(thumbBoundingBox.x + thumbBoundingBox.width / 2 + moveDirection, thumbBoundingBox.y + thumbBoundingBox.height / 2, { steps: 1 });
    await page.mouse.up();
}