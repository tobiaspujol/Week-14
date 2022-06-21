const InventoryPage = require('../pageobjects/inventory.page');
const LoginPage = require('../pageobjects/login.page');
const CartPage = require('../pageobjects/cart.page');
const CheckoutPage = require('../pageobjects/checkout.page');

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
        it('Add and remove btns displayed', async () => {
            await expect(InventoryPage.add1).toBeDisplayed();
            await expect(InventoryPage.add2).toBeDisplayed();
            await expect(InventoryPage.add3).toBeDisplayed();
            await expect(InventoryPage.add4).toBeDisplayed();
            await expect(InventoryPage.add5).toBeDisplayed();
            await expect(InventoryPage.add6).toBeDisplayed();
            await InventoryPage.addProducts();
            await expect(InventoryPage.remove1).toBeDisplayed();
            await expect(InventoryPage.remove2).toBeDisplayed();
            await expect(InventoryPage.remove3).toBeDisplayed();
            await expect(InventoryPage.remove4).toBeDisplayed();
            await expect(InventoryPage.remove5).toBeDisplayed();
            await expect(InventoryPage.remove6).toBeDisplayed();
            await InventoryPage.removeProducts();
        });
        it('Cart number success', async () => {
            await InventoryPage.cartNumberFunctionality();
            await expect(InventoryPage.shoppingCartBtn).toBeDisplayed();
            await expect(InventoryPage.shoppingCartSpanBtn).toHaveText("3");
        });
        describe('Cart page testing', () => {
            it('Buttons displayed', async () => {
                await InventoryPage.shoppingCartClickBtn();
                await expect(CartPage.continueBtn).toBeDisplayed();
                await expect(CartPage.checkoutBtn).toBeDisplayed();
                await expect(InventoryPage.shoppingCartBtn).toBeDisplayed();
                await InventoryPage.remove2.click();
                await expect(InventoryPage.remove1).toBeDisplayed();
                await expect(InventoryPage.remove5).toBeDisplayed();
                await expect(InventoryPage.shoppingCartSpanBtn).toHaveText("2");
            });
        });
        describe('Checkout page testing', () => {
            it('Buttons displayed', async () => {
                await CartPage.checkoutClickBtn();
                await expect(CheckoutPage.continueBtn).toBeDisplayed();
                await expect(CheckoutPage.cancelBtn).toBeDisplayed();
                await CheckoutPage.checkout('Tobias', 'Pujol', '2000');
            });
        });
        describe ('Checkout overview page testing', ()=> {
            it('Finish the buy', async () => {
                await expect(CheckoutPage.pageTitle).toHaveText('CHECKOUT: OVERVIEW');
                await expect(CheckoutPage.finishBtn).toBeDisplayed();
                await expect(CheckoutPage.cancelBtn).toBeDisplayed();
                await CheckoutPage.checkoutFinishClickBtn();
            });
        })
    });
});
