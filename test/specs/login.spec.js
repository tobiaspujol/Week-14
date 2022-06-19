const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Login page testing', () => {
    beforeAll('Open browser', () => {
        browser.url('https://www.saucedemo.com/');
    });
    it('Login success', async () => {
        await LoginPage.login('standard_user','secret_sauce');
    });
});