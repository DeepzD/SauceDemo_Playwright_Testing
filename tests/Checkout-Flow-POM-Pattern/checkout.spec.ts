import { test, expect } from '../fixtures/saucedemo-fixtures';

test.describe('saucedemo - checkout tests', () => {


test('verify single produrct checkout flow', async({loginPage, productPage, cartPage, checkoutStepOnePage,
     checkOutStepTwoPage, checkOutCompletePage}) => {
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await productPage.addItemToCart('sauce-labs-backpack');
    await productPage.shoppingCartItemsCount(1);
    await productPage.goToShoppingCart();
    await cartPage.getCartItemsCount(1);
    await cartPage.proceedToCheckout();
    await checkoutStepOnePage.enterCheckoutInformation('Deepika', 'Hewa', '1051');
    await checkoutStepOnePage.clickContinue();
   // await checkOutStepTwoPage.getCheckoutStepTwoTitle();
    await checkOutStepTwoPage.clickFinish();
    await checkOutCompletePage.getCompleteTextLabel();
     });

test('verify multiple produrcts checkout flow', async({loginPage, productPage, cartPage, checkoutStepOnePage,
     checkOutStepTwoPage, checkOutCompletePage}) => {
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await productPage.addMultipleItemsToCart(2);
    await productPage.shoppingCartItemsCount(2);
    await productPage.goToShoppingCart();
    await cartPage.getCartItemsCount(2);
    await cartPage.proceedToCheckout();
    await checkoutStepOnePage.enterCheckoutInformation('Deepika', 'Hewa', '1051');
    await checkoutStepOnePage.clickContinue();
   // await checkOutStepTwoPage.getCheckoutStepTwoTitle();
    await checkOutStepTwoPage.clickFinish();
    await checkOutCompletePage.getCompleteTextLabel();
 });

 test('Verify item remove from cart', async({loginPage, productPage, cartPage, checkoutStepOnePage,
     checkOutStepTwoPage, checkOutCompletePage}) => {
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await productPage.addMultipleItemsToCart(2);
    await productPage.shoppingCartItemsCount(2);
    await productPage.goToShoppingCart();
    await cartPage.getCartItemsCount(2);
    await cartPage.removeItemFromCart('sauce-labs-backpack');
    await cartPage.getCartItemsCount(1);
    });
    
test('Verify continue shopping button', async({loginPage, productPage, cartPage, checkoutStepOnePage,
     checkOutStepTwoPage, checkOutCompletePage}) => {
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await productPage.addMultipleItemsToCart(2);
    await productPage.shoppingCartItemsCount(2);
    await productPage.goToShoppingCart();
    await cartPage.getCartItemsCount(2);
    await cartPage.continueShopping();
    await expect(productPage.productTitle).toHaveText('Products');
    });    
});
