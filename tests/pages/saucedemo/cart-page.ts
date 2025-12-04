import {Page,Locator,expect} from '@playwright/test';

export class CartPage{
    readonly page: Page;
    readonly cartTitle: Locator;
    readonly cartItems: Locator;
    readonly removeButtons: Locator;
    readonly checkoutButton: Locator;
    readonly continueShoppingButton: Locator;

    constructor(page:Page){
        this.page = page;       

    //Locators
    this.cartTitle= page.locator('[data-test="title"]');
    this.cartItems= page.locator('[data-test="inventory-item"]');
    this.removeButtons= page.locator('button:has-text("Remove")');
    this.checkoutButton= page.locator('[data-test="checkout"]');
    this.continueShoppingButton= page.locator('[data-test="continue-shopping"]');
    }

    async getCartTitle(){
        await expect(this.cartTitle).toHaveText('Your Cart');
    }   

    async getCartItemsCount(count:number){
        await expect(this.cartItems).toHaveCount(count);
    }   
    async removeItemFromCart(itemName:string){
        await this.page.locator(`[data-test="remove-${itemName}"]`).click();
    }

    async proceedToCheckout(){
        await this.checkoutButton.click();
    }
    async continueShopping(){
        await this.continueShoppingButton.click();
    }
}