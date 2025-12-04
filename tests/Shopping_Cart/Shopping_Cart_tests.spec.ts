import {test,expect} from '@playwright/test';

const Base_URL = 'https://www.saucedemo.com/';
const UserName = 'standard_user';
const Password = 'secret_sauce';

test.describe('Shopping Cart - Valid Scenarios', () => {

    test.beforeEach (async({page}) => {

    await page.goto(Base_URL);
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill(UserName);
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill(Password);
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="title"]')).toBeVisible();
    await expect(page.locator('[data-test="title"]')).toContainText('Products');

});

test('Add single item to cart', async({page}) => {
   await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
   await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('1');
   await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toContainText('Remove');


});

test('Add multiple items to cart', async({page}) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('3');
});

test('Remove item from inventory page', async({page}) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('1');
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).not.toBeVisible();
});

test('View cart with items', async({page}) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page).toHaveURL(/.*cart.html/);
    await expect(page.locator('[data-test="title"]')).toContainText('Your Cart');
    await expect(page.locator('.cart_item')).toHaveCount(2);
    
});

test('Remove item from cart page', async({page}) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.locator('.cart_item')).toHaveCount(1);
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    await expect(page.locator('.cart_item')).toHaveCount(0);
    await expect(page.locator('[data-test="shopping-cart-badge"]')).not.toBeVisible();
});

test('Continue shopping from cart', async({page}) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="continue-shopping"]').click();
    await expect(page).toHaveURL(/.*inventory.html/);
    await expect(page.locator('.inventory_list')).toBeVisible();
});

test('Cart persists across pages', async({page}) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('1');
    await page.getByText('Sauce Labs Bike Light').click();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('1');
    await page.locator('[data-test="back-to-products"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.locator('.cart_item')).toHaveCount(1);
    await page.locator('[data-test="continue-shopping"]').click();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('1');

});

test('Add all items to cart', async({page}) => {
    let addCartButton = page.locator('button:has-text("Add to cart")');
    
    while(await addCartButton.count() > 0){
        await addCartButton.first().click();
        await page.waitForTimeout(100);
    }
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('6');
});
});


test.describe('Shopping Cart - Negative Scenarios', () => {

test.beforeEach (async({page}) => {
    await page.goto(Base_URL);
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill(UserName);
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill(Password);
    await page.locator('[data-test="login-button"]').click();

});

 test('Cart without login should redirect', async({page}, testInfo) => {
    // Ensure logged out by clearing cookies and storage
    // await page.context().clearCookies();
    // await page.goto('https://www.saucedemo.com');
    // await page.evaluate(() => {
    //   window.localStorage.clear();
    //   window.sessionStorage.clear();
    // });
    // await page.goto('https://www.saucedemo.com/cart.html');
    // await expect(page).toHaveURL(Base_URL);
    // await expect(page.locator('[data-test="login-button"]')).toBeVisible();
 });

 test('Empty cart checkout', async({page}) => {

    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).not.toBeVisible();
    await page.locator('[data-test="checkout"]').click();
    await expect(page).toHaveURL(/.*checkout-step-one.html/);
   
 });

 test('Invalid cart URL', async({page}) => {

 });

  test('Problem user - broken images', async({page}) => {

 });

 test('Cart badge with zero items', async({page}) => {

 });
});
