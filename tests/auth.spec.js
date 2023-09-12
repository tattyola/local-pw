import { expect, test } from '../common/test'

test.describe('Authentication & Authorization', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.open()
  })

  test('Sign in with existing credentials', async ({ page, loginPage }) => {
    // await loginPage.logIn(process.env.EMAIL, process.env.PASSWORD)

    await loginPage.emailInput.fill(process.env.EMAIL)
    await loginPage.passwordInput.fill(process.env.PASSWORD)
    await expect(loginPage.submitBtn).toBeEnabled()
    await loginPage.submitBtn.click()
    await expect(page.locator('.ant-avatar-square')).toBeVisible()
  })
  test('Sign in with wrong credentials', async ({ page, loginPage }) => {
    // await loginPage.logIn('Fake@yahoo.com', 'Tattyola123!')

    await loginPage.emailInput.fill('Fake@yahoo.com')
    await loginPage.passwordInput.fill('Tattyola123!')
    await loginPage.submitBtn.click()
    await expect(loginPage.toast).toBeVisible()
    await expect(loginPage.toast).toHaveText('User login. Fail')
    await expect(page.locator('.ant-avatar-square')).not.toBeVisible()
  })
})
