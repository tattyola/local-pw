import Page from "./page";

export default class ProfilePage extends Page {
    constructor(page) {
        super(page);
        this.avatar = page.locator('.ant-avatar-square')
        this.header = page.locator('h1')

    }

    async open() {
        await this.page.goto(`/profile/${process.env.PROFILE_ID}`)
    }
}
