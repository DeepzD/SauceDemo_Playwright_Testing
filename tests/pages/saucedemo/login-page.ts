import {Locator,expect, Page} from '@playwright/test';


export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    readonly errorMessageButton: Locator;
    
    constructor(page:Page){
        this.page = page;

        //Locators
    this.usernameInput= page.locator('[data-test="username"]'); 
    this.passwordInput= page.locator('[data-test="password"]');
    this.loginButton= page.locator('[data-test="login-button"]');
    this.errorMessage= page.locator('[data-test="error"]');
    this.errorMessageButton= page.locator('[data-test="error-button"]');
    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com/');
    }

async login(username:string, password:string){
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
}

async getErrorMessage(message:string){
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toContainText(message);
}

async ErrorMessageCloseButton(){
    await expect(this.errorMessage).toBeVisible();
    await this.errorMessageButton.click();
    await expect(this.errorMessage).toHaveCount(0);
}

async PasswordFieldIsMasked(){
    await expect(this.passwordInput).toHaveAttribute('type','password');
}
}