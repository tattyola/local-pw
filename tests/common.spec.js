import { expect, test } from "@playwright/test";

test.describe('Common', () => {
    test('Navigation', async ({page}) => {
        await page.goto('https://coding.pasv.us/user/login');
        await page.locator('#normal_login_email').fill('Astrouskaya@yahoo.com');
        await page.locator('#normal_login_password').fill('Tattyola123!');
        await page.locator('button[type="submit"]').click();
        await expect(page.locator('.ant-avatar-square')).toBeVisible();
        await expect(page.locator('h1')).toBeVisible();
        await expect(page.locator('h1')).toHaveText('Tatsiana Astrouskaya');

        await page.getByTestId("topmenu-Курсы").click();
        await expect(page.getByText('Курсы программирования и тестирования')).toBeVisible();
        await expect(page.locator('h1')).toHaveText('Курсы программирования и тестирования');
        await expect(page).toHaveURL('https://coding.pasv.us/course');

        await page.getByTestId("topmenu-Задачи").click();
        await expect(page.getByText('Кодинг задачи')).toBeVisible();
        await expect(page.locator('.h1')).toHaveText('Кодинг задачи');
        await expect(page).toHaveURL('https://coding.pasv.us/challenge?limit=30&page=1');

        await page.getByTestId("topmenu-Интервью").click();
        await expect(page.getByText('Interview practice cards')).toBeVisible();
        await expect(page.locator('h1')).toHaveText('Interview practice cards');
        await expect(page).toHaveURL('https://coding.pasv.us/flash');

        await page.getByTestId("topmenu-Дневник").click();
        await expect(page.getByText('Daily reports')).toBeVisible();
        await expect(page.locator('h1')).toHaveText('Daily reports');
        await expect(page).toHaveURL('https://coding.pasv.us/diary?page=1');

        await expect(page.locator('[data-qa="topmenu-Группы"] a')).toBeVisible();


    })
})
