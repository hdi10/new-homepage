import { test, expect } from '@playwright/test';

test.describe('Home – Cookie-Banner', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('shows banner on first visit', async ({ page }) => {
        await expect(page.locator('button:text("Accept")')).toBeVisible();
        await expect(page.locator('button:text("Reject")')).toBeVisible();
    });

    test('stores consent and hides banner', async ({ page }) => {
        await page.locator('button:text("Accept")').click();
        await expect(page.locator('button:text("Accept")')).toHaveCount(0);
        const consent = await page.evaluate(() =>
            localStorage.getItem('cookieConsent')
        );
        expect(consent).toBe('accepted');
        await page.reload();
        await expect(page.locator('button:text("Accept")')).toHaveCount(0);
    });
});
