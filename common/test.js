import { expect, test as base } from '@playwright/test'
import LoginPage from "../pages/login";
import DashboardPage from "../pages/dashboard";

const test = base.extend({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page))
    },

})

export { test, expect }
