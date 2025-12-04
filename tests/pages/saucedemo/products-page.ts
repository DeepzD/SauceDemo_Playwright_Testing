import {Page,expect,Locator} from '@playwright/test';

export class productPage
{
    readonly page: Page;
    readonly productTitle: Locator;
    readonly productSortDropdown: Locator;
    readonly shoppingCartBadge: Locator;
    readonly addToCartButtons: Locator;
    readonly removeButtons: Locator;
    readonly inventoryItems: Locator;

    constructor(page:Page){
        this.page = page;

        //Locators
    this.productTitle= page.locator('[data-test="title"]');
    this.productSortDropdown= page.locator('[data-test="product_sort_container"]');
    this.shoppingCartBadge= page.locator('[data-test="shopping-cart-link"]'); 
    this.addToCartButtons= page.locator('button:has-text("Add to cart")');
    this.removeButtons= page.locator('button:has-text("Remove")');
    this.inventoryItems= page.locator('.inventory_item');
    }

    async getProductTitle(){
        await expect(this.productTitle).toHaveText('Products');
    }

    async shoppingCartItemsCount(count:number){
        await expect(this.shoppingCartBadge).toContainText(count.toString());
    }

    async shoppingCartItemCountNotVisible(){
        await expect(this.inventoryItems).not.toBeVisible();
    }

    async addItemToCart(itemName:string){
        await this.page.locator(`[data-test="add-to-cart-${itemName}"]`).click();
        await expect(this.removeButtons.first()).toBeVisible();
    }

    async addMultipleItemsToCart(numberOfItems:number){
        for(let i=0;i<numberOfItems;i++){
            await this.addToCartButtons.nth(i).click();
        }
    }
    async removeItemFromCart(itemName:string){
    }

    async goToShoppingCart(){
        await this.shoppingCartBadge.click();
    }
}