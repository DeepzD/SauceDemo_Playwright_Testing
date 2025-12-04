import {test, expect} from '../fixtures/saucedemo-fixtures';

test.describe('saucedemo - login tests', () => {

test('login with valid credentials', async({loginPage}) => {
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
});

test('verfiy products count after login', async({loginPage, productPage}) => {
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await productPage.shoppingCartItemsCount(6)
});

test('verify login with problem user', async({loginPage, productPage}) => {
    await loginPage.goto();
    await loginPage.login('problem_user','secret_sauce');
    await productPage.getProductTitle();
    await expect(productPage.productTitle).toHaveText('Products');
});

test('verify empty username error message', async({loginPage}) => {
    await loginPage.goto();
    await loginPage.login('', 'secret_sauce');
    await loginPage.getErrorMessage('Epic sadface: Username is required');    
});

test('verify empty password error message', async({loginPage}) => {
    await loginPage.goto();
    await loginPage.login('standard_user', '');
    await loginPage.getErrorMessage('Epic sadface: Password is required');        
});

test('verify invalid credentials error message', async({loginPage}) => {
    await loginPage.goto();
    await loginPage.login('invalid_user', 'invalid_password');
    await loginPage.getErrorMessage('Epic sadface: Username and password do not match any user in this service');         
});

test('verify locked user error message', async({loginPage}) => {
    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');
    await loginPage.getErrorMessage('Epic sadface: Sorry, this user has been locked out.');
});

test ('verify error message close button', async({loginPage}) => {
    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');
    await loginPage.ErrorMessageCloseButton();
});

test ('verify password field is masked', async({loginPage}) => {
    await loginPage.goto();
    await loginPage.PasswordFieldIsMasked();        
});     
});
