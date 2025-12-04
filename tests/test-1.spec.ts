import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {


await page.locator('[data-test="back-to-products"]').click();
await page.locator('[data-test="item-4-title-link"]').click();
await page.locator('[data-test="inventory-item-name"]').click();

await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('2');
});
