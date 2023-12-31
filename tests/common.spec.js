import { expect, test } from '../common/test'
import {logInWithApi} from '../common/log-in-with-api'

test.describe('Common', () => {
  test.beforeEach(async ({page, request, context}) => {
    await logInWithApi(page, request, context, process.env.EMAIL, process.env.PASSWORD)
  })

  test('Navigation', async ({page, profilePage}) => {
    await profilePage.page.goto('/profile/6042ea34bf6f15003a81883a')
    await profilePage.avatar.waitFor()
    await expect(profilePage.header).toBeVisible()
    await expect(profilePage.header).toHaveText('Tatty Astrouskaya')

    await profilePage.navbar.courses.click()
    await expect(page.getByText('Курсы программирования и тестирования')).toBeVisible()
    await expect(profilePage.header).toHaveText('Курсы программирования и тестирования')
    await expect(page).toHaveURL('/course')

    await profilePage.navbar.tasks.click()
    await expect(page.getByText('Кодинг задачи')).toBeVisible()
    await expect(page.locator('.h1')).toHaveText('Кодинг задачи')
    await expect(page).toHaveURL('/challenge?limit=30&page=1')

    await profilePage.navbar.interview.click()
    await expect(page.getByText('Interview practice cards')).toBeVisible()
    await expect(profilePage.header).toHaveText('Interview practice cards')
    await expect(page).toHaveURL('/flash')

    await profilePage.navbar.diary.click()
    await expect(page.getByText('Daily reports')).toBeVisible()
    await expect(profilePage.header).toHaveText('Daily reports')
    await expect(page).toHaveURL('/diary?page=1')

    await profilePage.navbar.groups.click()
    await expect(profilePage.header).toHaveText('Groups')
    await expect(page.locator('[data-qa="topmenu-Группы"] a')).toBeVisible()
    await expect(page).toHaveURL('/group')
  })

  test('Email confirmation alert is not visible', async ({ page, profilePage }) => {
    await page.route('**/user/auth', async route => {
      const response = await route.fetch()
      const json = await response.json()
      json.payload.emailConfirmation.confirmed = true
      json.payload.name = 'It Works'
      json.payload.firstName = 'It'
      json.payload.lastName = 'Works'
      await route.fulfill({response, json})
    })

    await profilePage.open()
    await page.waitForLoadState('networkidle')
    await expect(profilePage.alertMessage).not.toBeVisible()
  })

  test('Email confirmation alert is visible', async ({ page, profilePage }) => {
    await page.route('**/user/auth', async route => {
      const response = await route.fetch()
      const json = await response.json()
      json.payload.emailConfirmation.confirmed = false
      json.payload.name = 'It Works'
      json.payload.firstName = 'It'
      json.payload.lastName = 'Works'
      await route.fulfill({response, json})
    })

    await profilePage.open()
    await page.waitForLoadState('networkidle')
    await expect(profilePage.alertMessage).toBeVisible()
  })
})
