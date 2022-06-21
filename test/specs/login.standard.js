const { addAndRemoveProducts } = require('../pageobjects/inventory.page');
const InventoryPage = require('../pageobjects/inventory.page');
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
    it('Login success', async () => {
        await LoginPage.login('standard_user','secret_sauce');
    });
    describe('Inventory page testing', () => {
        it('Img and titles displayed', async () => {
            // await InventoryPage.addAndRemoveProducts();
            await expect(InventoryPage.img1).toBeDisplayed();
            await expect(InventoryPage.img2).toBeDisplayed();
            await expect(InventoryPage.img3).toBeDisplayed();
            await expect(InventoryPage.img4).toBeDisplayed();
            await expect(InventoryPage.img5).toBeDisplayed();
            await expect(InventoryPage.img6).toBeDisplayed();
            await expect(InventoryPage.title1).toBeDisplayed();
            await expect(InventoryPage.title2).toBeDisplayed();
            await expect(InventoryPage.title3).toBeDisplayed();
            await expect(InventoryPage.title4).toBeDisplayed();
            await expect(InventoryPage.title5).toBeDisplayed();
            await expect(InventoryPage.title6).toBeDisplayed();
        });
        it('Cart number success', async () => {
            await InventoryPage.cartNumberFunctionality();
            await expect(InventoryPage.shoppingCartBtn).toBeDisplayed();
            await expect(InventoryPage.shoppingCartSpanBtn).toHaveText("3");
        });
    });
});
