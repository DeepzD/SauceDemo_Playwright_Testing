import {Page, Locator, expect} from '@playwright/test';

export class CheckoutStepTwoPage {

    readonly page: Page;
    readonly CheckoutPageTwoTitle : Locator;
    readonly finishButton: Locator;
    readonly cancelButton: Locator;
    readonly cartItems: Locator;
    readonly paymentInfoLabel: Locator;
    readonly paymentInfoValue: Locator;
    readonly shippingInfoLabel: Locator;
    readonly shippingInfoValue: Locator;
    readonly totalInfoLabel: Locator;
    readonly subTotalValue: Locator;
    readonly taxValue: Locator;
    readonly totalValue: Locator;

    constructor(page:Page){
        this.page = page;   

    //Locators
    this.CheckoutPageTwoTitle = page.locator('[data-test="title"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.cancelButton = page.locator('[data-test="cancel"]');
    this.cartItems = page.locator('[data-test="inventory-item"]');
    this.paymentInfoLabel = page.locator('[data-test="payment-info-label"]');
    this.paymentInfoValue = page.locator('[data-test="payment-info-value"]');
    this.shippingInfoLabel = page.locator('[data-test="shipping-info-label"]');
    this.shippingInfoValue = page.locator('[data-test="shipping-info-value"]');
    this.totalInfoLabel = page.locator('[data-test="total-info-label"]');
    this.subTotalValue = page.locator('[data-test="subtotal-label"]');
    this.taxValue = page.locator('[data-test="tax-label"]');
    this.totalValue = page.locator('[data-test="total-label"]');
    }

    async getCheckoutStepTwoTitle(){    
        await expect(this.CheckoutPageTwoTitle).toHaveText('Checkout: Overview');
        await expect(this.CheckoutPageTwoTitle).toBeVisible();
    }
    async getCartItemsCount(count:number){
        await expect(this.cartItems).toHaveCount(count);
    }
    async getPaymentInformation(){
        await expect(this.paymentInfoLabel).toHaveText('Payment Information:');
        await expect(this.paymentInfoValue).toBeVisible();
    }                       
    async getShippingInformation(){
        await expect(this.shippingInfoLabel).toHaveText('Shipping Information:');
        await expect(this.shippingInfoValue).toBeVisible();
    }   
    async getTotalInformation(){
        await expect(this.totalInfoLabel).toHaveText('Total Information:');
        await expect(this.subTotalValue).toBeVisible();
        await expect(this.taxValue).toBeVisible();
        await expect(this.totalValue).toBeVisible();
    }
    async clickFinish(){
        await this.finishButton.click();
    }

    async clickCancel(){
        await this.cancelButton.click();
    }
}