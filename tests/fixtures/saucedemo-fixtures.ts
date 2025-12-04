import {test as base} from '@playwright/test';
import {LoginPage} from '../pages/saucedemo/login-page';
import {productPage as ProductPage} from '../pages/saucedemo/products-page';
import {CartPage} from '../pages/saucedemo/cart-page';
import {CheckoutStepOnePage} from '../pages/saucedemo/checkout-step-one-page';
import {CheckoutStepTwoPage} from '../pages/saucedemo/checkout-step-two-page';
import {CheckoutCompletePage} from '../pages/saucedemo/checkout-complete-page';

type MYPages = {
    loginPage: LoginPage;
    productPage: ProductPage;
    cartPage: CartPage;
    checkoutStepOnePage: CheckoutStepOnePage;
    checkOutStepTwoPage: CheckoutStepTwoPage;
    checkOutCompletePage: CheckoutCompletePage;
}

export const test = base.extend<MYPages>({
        
    loginPage: async ({page}, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    productPage: async ({page}, use) => {
        const productPage = new ProductPage(page);
        await use(productPage);
    },

    cartPage: async ({page}, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage);
    },
    checkoutStepOnePage: async ({page}, use) => {
        const checkoutStepOnePage = new CheckoutStepOnePage(page);
        await use(checkoutStepOnePage);
    },
    checkOutStepTwoPage: async ({page}, use) => {
        const checkOutStepTwoPage = new CheckoutStepTwoPage(page);
        await use(checkOutStepTwoPage);
    },
    checkOutCompletePage: async ({page}, use) => {
        const checkOutCompletePage = new CheckoutCompletePage(page);
        await use(checkOutCompletePage);
    }   
});   

export {expect} from '@playwright/test';