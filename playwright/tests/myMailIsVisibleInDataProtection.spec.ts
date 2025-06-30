import {test,expect} from "@playwright/test";


test.describe('Im Datenschutz Reiter ist meine Mail aufgeführt', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('/DataProtection');
    });

    test('Meine Mail ist drin', async ({page}) => {
        await expect(page.getByTestId('myMail')).toBeVisible()
    })

    test('Meine Mail lautet: harun@zelkulon.com', async ({page}) => {
        await expect(page.getByTestId('myMail')).toHaveText('harun@zelkulon.com');
    })

    test('Meine Homepage ist gelistet: https://www.dastekin.de', async ({page}) => {
        await expect(page.getByTestId('meineHomepage')).toHaveText('https://www.dastekin.de');
    })


})


