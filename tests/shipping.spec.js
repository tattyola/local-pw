import {test, expect} from '../common/test'
import {logInWithApi} from "../common/log-in-with-api";

describe('Delivery', () => {
    test('Save city info', async ({ page, request, context, deliveryPage}) => {
        await request.patch(
            `${process.env.API_BASE_URL}/user/shipping`,
            {
                data: {
                    fullName: '',
                    countryName: 'United States',
                    state: 'null',
                    address: 'null',
                    city: '',
                    zipCode: '',
                    countryCode: '1',
                    contactPhone: '',
                },

            }
        )
        await logInWithApi(page, request, context, process.env.EMAIL, process.env.PASSWORD)
        await deliveryPage.open()

        await deliveryPage.input.city.type('Los Angeles')
        const responsePromise = await page.waitForResponse(
            response =>
                response.url() === `${process.env.API_BASE_URL}/user/shipping` &&
                response.request().method() === 'PATCH'
        )
        await deliveryPage.button.save.click()

        expect((await responsePromise).status()).toEqual(200)
        await page.reload()
        await expect(deliveryPage.input.city).toHaveValue('Los Angeles')
    })
});
