import { Locator, expect, Page } from '@playwright/test';

export class InventoryItemPage{
    readonly page: Page;
    readonly inventoryItem: Locator;
    readonly removeButton: Locator;
    readonly backToProductsButton: Locator;

    constructor(page:Page){
        this.page = page;

    //Locators
    this.inventoryItem = page.locator('.inventory_item');
    this.removeButton = page.locator('button:has-text("Remove")');
    this.backToProductsButton = page.locator('[data-test="back-to-products"]');
    }

    async InventoryItemDetailsVisible(){
        await expect(this.inventoryItem).toBeVisible();
    }

    async removeItemFromInventory(){
        await this.removeButton.click();
    }

    async goBackToProducts(){
        await this.backToProductsButton.click();
    }
}
