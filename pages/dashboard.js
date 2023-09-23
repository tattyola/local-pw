import Navbar from "../elements/navbar";
import Page from "./page";

export default class DashboardPage extends Page {
    constructor(page) {
        super(page);
        this.avatar = page.locator('.ant-avatar-square')
        this.header = page.locator('h1')
        this.navbar = new Navbar(page)

    }
}
