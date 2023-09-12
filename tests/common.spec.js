import { expect, test } from '../common/test'

test.describe('Common', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.open()
    await loginPage.logIn(process.env.EMAIL, process.env.PASSWORD)
  })

  test('Navigation', async ({page}) => {
    await expect(page.locator('.ant-avatar-square')).toBeVisible()
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('h1')).toHaveText('Tatsiana Astrouskaya')

    await page.getByTestId('topmenu-Курсы').click()
    await expect(page.getByText('Курсы программирования и тестирования')).toBeVisible()
    await expect(page.locator('h1')).toHaveText('Курсы программирования и тестирования')
    await expect(page).toHaveURL('/course')

    await page.getByTestId('topmenu-Задачи').click()
    await expect(page.getByText('Кодинг задачи')).toBeVisible()
    await expect(page.locator('.h1')).toHaveText('Кодинг задачи')
    await expect(page).toHaveURL('/challenge?limit=30&page=1')

    await page.getByTestId('topmenu-Интервью').click()
    await expect(page.getByText('Interview practice cards')).toBeVisible()
    await expect(page.locator('h1')).toHaveText('Interview practice cards')
    await expect(page).toHaveURL('/flash')

    await page.getByTestId('topmenu-Дневник').click()
    await expect(page.getByText('Daily reports')).toBeVisible()
    await expect(page.locator('h1')).toHaveText('Daily reports')
    await expect(page).toHaveURL('/diary?page=1')

    await expect(page.locator('[data-qa="topmenu-Группы"] a')).toBeVisible()
  })
})
