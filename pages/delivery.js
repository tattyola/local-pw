import Page from "./page";

export default class DeliveryPage extends Page {
    constructor(page) {
        super(page);
        this.cityInput = page.locator('#city');
        this.saveButton = page.locator('button[type="submit"]');
    }

    async open() {
        await this.page.goto('/settings/delivery')
    }
}
