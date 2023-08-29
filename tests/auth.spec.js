import { expect, test } from "@playwright/test";

test.describe('Authentication & Authorization', () => {
    test('Sign in with existing credentials', async ({ page}) => {
        // await page.goto('https://coding.pasv.us/user/login');
        // await page.locator('#normal_login_email').fill('Astrouskaya@yahoo.com');
        // await page.locator('#normal_login_password').fill('Tattyola123!');
        // await page.locator('button[type="submit"]').click();
        // await expect(page.locator('.ant-avatar-square')).toBeVisible();
        await page.goto('https://coding.pasv.us/group');
        await page.waitForTimeout(3000)

    })
});
