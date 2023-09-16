import Page from "./page";

export default class LoginPage extends Page {
    constructor(page) {
        super(page);
        // this.emailInput = page.locator('#normal_login_email')
        // this.passwordInput = page.locator('#normal_login_password')
        // this.submitBtn = page.locator('button[type="submit"]')

        this.input = {
            email: page.locator('#normal_login_email'),
            password: page.locator('#normal_login_password')
        }
        this.button = {
            submit: page.locator('button[type="submit"]')
        }
    }

    async open() {
        return this.page.goto('/user/login')
    }
    // async logIn(email, password){
    //     await this.emailInput.fill(email)
    //     await this.passwordInput.fill(password)
    //     await this.submitBtn.click()
    // }

    async logIn(email, password){
        await this.input.email.fill(email)
        await this.input.password.fill(password)
        await this.button.submit.click()
    }
}
