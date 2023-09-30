import { expect, test } from '../common/test'

test.describe('Authentication & Authorization', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.open()
  })

  test('Sign in with existing credentials', async ({ profilePage, loginPage }) => {
    // await loginPage.logIn(process.env.EMAIL, process.env.PASSWORD)

    await loginPage.emailInput.fill(process.env.EMAIL)
    await loginPage.passwordInput.fill(process.env.PASSWORD)
    await expect(loginPage.submitBtn).toBeEnabled()
    await loginPage.submitBtn.click()
    await expect(profilePage.avatar).toBeVisible()
  })

  test('Sign in with wrong credentials', async ({ profilePage, loginPage }) => {
    // await loginPage.logIn('Fake@yahoo.com', 'FakePassword')

    await loginPage.emailInput.fill('Fake@yahoo.com')
    await loginPage.passwordInput.fill('FakePassword')
    await loginPage.submitBtn.click()
    await expect(loginPage.toast).toBeVisible()
    await expect(loginPage.toast).toHaveText('User login. Fail')
    await expect(profilePage.avatar).not.toBeVisible()
  })
})
