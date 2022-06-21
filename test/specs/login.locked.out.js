const LoginPage = require('../pageobjects/login.page');

describe('Login page testing', () => {
    beforeAll('Open browser', () => {
        browser.url('https://www.saucedemo.com/');
    });
    it('Username, password, login button, logo, img and lists displayed', async () => {
        await expect(LoginPage.inputUsername).toBeDisplayed();
        await expect(LoginPage.inputPassword).toBeDisplayed();
        await expect(LoginPage.btnLogin).toBeDisplayed();
        await expect(LoginPage.logo).toBeDisplayed();
        await expect(LoginPage.imgRobot).toBeDisplayed();
        await expect(LoginPage.usernamesList).toBeDisplayed();
        await expect(LoginPage.usernamesList).toHaveTextContaining('Accepted usernames are:');
        await expect(LoginPage.passwordUnique).toBeDisplayed();
        await expect(LoginPage.passwordUnique).toHaveTextContaining('Password for all users:');
    });
    it('Login unsuccess', async () => {
        await LoginPage.login('locked_out_user','secret_sauce');
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    });
});