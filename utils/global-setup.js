import { chromium } from "@playwright/test";

async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage()

  await page.goto('https://coding.pasv.us/user/login');
  await page.context().storageState({ path: 'notLoggedInState.json' });

  // login
  await page.locator('#normal_login_email').fill('Astrouskaya@yahoo.com');
  await page.locator('#normal_login_password').fill('Tattyola123!');
  await page.locator('button[type="submit"]').click();
  await  page.locator('.ant-avatar-square').waitFor();

  // save signed-in state to 'loggedInState.json'
  await page.context().storageState({ path: 'loggedInState.json' });
  await browser.close();
}

export default globalSetup;
