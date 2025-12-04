import {Page, Locator, expect} from '@playwright/test';

export class CheckoutCompletePage {
    readonly page: Page;
    readonly checkoutCompleteTitle : Locator;
    readonly completeHeaderLabel: Locator;
    readonly completeTextLabel: Locator;
    readonly backHomeButton: Locator;

    constructor(page:Page){
        this.page = page;

    //Locators
    this.checkoutCompleteTitle = page.locator('.title');
    this.completeHeaderLabel = page.locator('[data-test="complete-header"]');
    this.completeTextLabel = page.locator('[data-test="complete-text"]');
    this.backHomeButton = page.locator('[data-test="back-to-products"]');
    }

    async getCheckoutCompleteTitle(){
        await expect(this.checkoutCompleteTitle).toHaveText('Checkout: Complete!');
    }   

    async getCompleteHeaderLabel(){
        await expect(this.completeHeaderLabel).toHaveText('THANK YOU FOR YOUR ORDER');
    }

    async getCompleteTextLabel(){
        await expect(this.completeTextLabel).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    }
    async goBackHome(){
        await this.backHomeButton.click();
    }
}