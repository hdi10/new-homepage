import {test, expect} from '@playwright/test'

test.describe('Im Tab Portfolio führt der click auf DestiWishWheel zum PlayStore', () => {

    test.beforeEach(async ({page}) => {
        await page.goto('/Portfolio');
    });

    test('Der Titel der Portfolio Seite ist zu sehen', async ({page}) => {
        await expect(page).toHaveTitle('Projects')

    });

    test('Klicke auf den DestiWishWheel Link', async ({page, context}) =>{
        const [playStoreTab] = await Promise.all([
            context.waitForEvent('page'),

           page.locator('a[href*="destiwishwheel"]').first().click(),
        ]);

        await playStoreTab.waitForLoadState();
        await expect(playStoreTab).toHaveURL(
            /play\.google\.com\/store\/apps\/details\?id=de\.dastekin\.destiwishwheel/
        );
    });

});
