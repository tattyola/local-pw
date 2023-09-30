import {test, expect} from '../common/test'
import { logInWithApi } from "../common/log-in-with-api";

test.describe('Delivery', () => {
    test('Save city info', async ({ page, request, context, deliveryPage}) => {
        await logInWithApi(page, request, context, process.env.EMAIL, process.env.PASSWORD)
        await context.request.patch(`${process.env.API_BASE_URL}/user/shipping`, {
            data: {
                fullName: '',
                countryName: 'United States',
                state: null,
                address: null,
                city: '',
                zipCode: null,
                contactPhone: '',
                countryCode: '1',
            },
        })
        await deliveryPage.open()

        await deliveryPage.cityInput.fill('Los Angeles')
        const responsePromise =  page.waitForResponse(
            response =>
                response.url() === `${process.env.API_BASE_URL}/user/shipping` &&
                response.request().method() === 'PATCH'
        )
        await deliveryPage.saveButton.click()

        expect((await responsePromise).status()).toEqual(200)
        await page.reload()
        await expect(deliveryPage.cityInput).toHaveValue('Los Angeles')
    })
});
