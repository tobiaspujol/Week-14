class CartPage{
    // Getters
    get continueBtn() { return $('#continue-shopping'); };
    get checkoutBtn() { return $('#checkout'); };

    // Methods
    async checkoutClickBtn() {
        await this.checkoutBtn.click();
    };
};

module.exports = new CartPage();
