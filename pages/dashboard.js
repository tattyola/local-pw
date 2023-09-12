export default class DashboardPage {
    constructor(page) {
        this.page = page;
        this.avatar = page.locator('.ant-avatar-square')
        this.header = page.locator('h1')

    }
}
