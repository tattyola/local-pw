import { expect, test } from '../common/test'
import {logInWithApi} from '../common/log-in-with-api'

test.describe('Common', () => {
  test.beforeEach(async ({page, request, context}) => {
    await logInWithApi(page, request, context, process.env.EMAIL, process.env.PASSWORD)
  })

  test('Navigation', async ({page, dashboardPage}) => {
    await dashboardPage.page.goto('/profile/6042ea34bf6f15003a81883a')
    await dashboardPage.avatar.waitFor()
    await expect(dashboardPage.header).toBeVisible()
    await expect(dashboardPage.header).toHaveText('Tatsiana Astrouskaya')

    await dashboardPage.navbar.courses.click()
    await expect(page.getByText('Курсы программирования и тестирования')).toBeVisible()
    await expect(dashboardPage.header).toHaveText('Курсы программирования и тестирования')
    await expect(page).toHaveURL('/course')

    await dashboardPage.navbar.tasks.click()
    await expect(page.getByText('Кодинг задачи')).toBeVisible()
    await expect(page.locator('.h1')).toHaveText('Кодинг задачи')
    await expect(page).toHaveURL('/challenge?limit=30&page=1')

    await dashboardPage.navbar.interview.click()
    await expect(page.getByText('Interview practice cards')).toBeVisible()
    await expect(dashboardPage.header).toHaveText('Interview practice cards')
    await expect(page).toHaveURL('/flash')

    await dashboardPage.navbar.diary.click()
    await expect(page.getByText('Daily reports')).toBeVisible()
    await expect(dashboardPage.header).toHaveText('Daily reports')
    await expect(page).toHaveURL('/diary?page=1')

    await dashboardPage.navbar.groups.click()
    await expect(dashboardPage.header).toHaveText('Groups')
    await expect(page.locator('[data-qa="topmenu-Группы"] a')).toBeVisible()
    await expect(page).toHaveURL('/group')

  })
})
