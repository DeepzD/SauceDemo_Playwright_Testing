import { test, expect } from '@playwright/test';

test.beforeEach(async({page}) => {
    await page.goto('https://www.saucedemo.com/');
});

test('Verify all login page elements are visible', async({page})=>{
    await expect(page.locator('[data-test="username"]')).toBeVisible();
    await expect(page.locator('[data-test="password"]')).toBeVisible();
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
    await expect(page.locator('[data-test="login-credentials"]')).toBeVisible();
})

test('Verify password field is masked', async({page})=>{
    const PasswordField = page.locator('[data-test="password"]');
    await expect(PasswordField).toHaveAttribute('type','password');
})

test('Verify error message can be dismissed', async({page})=>{

    await page.locator('[data-test="login-button"]').click();

    const ErrorMessage = page.locator('[data-test="error"]');
    const ErrorButton = page.locator('[data-test="error-button"]');

    await expect(ErrorMessage).toBeVisible();
    await ErrorButton.click();
    await expect(ErrorMessage).toHaveCount(0);
})

