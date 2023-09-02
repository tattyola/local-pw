import { expect, test } from "@playwright/test";

test.describe('Authentication & Authorization', () => {
    test('Sign in with existing credentials', async ({ page}) => {
        await page.goto('https://coding.pasv.us/user/login');
        await page.locator('#normal_login_email').fill('Astrouskaya@yahoo.com');
        await page.locator('#normal_login_password').fill('Tattyola123!');
        await page.locator('button[type="submit"]').click();
        await expect(page.locator('.ant-avatar-square')).toBeVisible();
    })
    test('Sign in with wrong credentials', async ({ page}) => {
        await page.goto('https://coding.pasv.us/user/login');
        await page.locator('#normal_login_email').fill('Fake@yahoo.com');
        await page.locator('#normal_login_password').fill('Tattyola123!');
        await page.locator('button[type="submit"]').click();
        const toast = page.locator('.ant-notification-notice-message')
        await expect(toast).toBeVisible();
        await expect(toast).toHaveText('User login. Fail');
        await expect(page.locator('.ant-avatar-square')).not.toBeVisible();
    })
});
