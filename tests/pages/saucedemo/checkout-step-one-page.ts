import { Locator, Page, expect } from "@playwright/test";

export class CheckoutStepOnePage {
    readonly page: Page;
    readonly CheckoutStepOneTitle : Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator
    readonly cancelButton: Locator; 
    readonly errorMessage: Locator;

    constructor(page:Page){
        this.page = page;

    //Locators
    this.CheckoutStepOneTitle = page.locator('.title');
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.cancelButton = page.locator('[data-test="cancel"]');
    this.errorMessage = page.locator('[data-test="error"]');

    }
    async getCheckoutStepOneTitle(){
        await expect(this.CheckoutStepOneTitle).toHaveText('Checkout: Your Information');
    }

    async enterCheckoutInformation(firstName:string, lastName:string, postalCode:string){
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }

    async getErrorMessage(){
        await expect(this.errorMessage).toBeVisible();  
    }
    async clickContinue(){
        await this.continueButton.click();
    }

    async clickCancel(){
        await this.cancelButton.click();
    }
}   