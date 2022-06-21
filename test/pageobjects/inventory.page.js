class InventoryPage{
    // Getters
    get add1() { return $('#add-to-cart-sauce-labs-backpack'); };
    get add2() { return $('#add-to-cart-sauce-labs-bike-light'); };
    get add3() { return $('#add-to-cart-sauce-labs-bolt-t-shirt'); };
    get add4() { return $('#add-to-cart-sauce-labs-fleece-jacket'); };
    get add5() { return $('#add-to-cart-sauce-labs-onesie'); };
    get add6() { return $('//*[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]'); };
    get remove1() { return $('#remove-sauce-labs-backpack'); };
    get remove2() { return $('#remove-sauce-labs-bike-light'); };
    get remove3() { return $('#remove-sauce-labs-bolt-t-shirt'); };
    get remove4() { return $('#remove-sauce-labs-fleece-jacket'); };
    get remove5() { return $('#remove-sauce-labs-onesie'); };
    get remove6() { return $('//*[@id="remove-test.allthethings()-t-shirt-(red)"]'); };
    get img1() { return $('#item_4_img_link'); };
    get img2() { return $('#item_0_img_link'); };
    get img3() { return $('#item_1_img_link'); };
    get img4() { return $('#item_5_img_link'); };
    get img5() { return $('#item_2_img_link'); };
    get img6() { return $('#item_3_img_link'); };
    get title1() { return $('#item_4_title_link'); };
    get title2() { return $('#item_0_title_link'); };
    get title3() { return $('#item_1_title_link'); };
    get title4() { return $('#item_5_title_link'); };
    get title5() { return $('#item_2_title_link'); };
    get title6() { return $('#item_3_title_link'); };
    get backToProductsBtn() { return $('#back-to-products'); };
    get shoppingCartBtn() { return $('#shopping_cart_container'); };
    get shoppingCartSpanBtn() { return $('.shopping_cart_badge'); };

    // Methods
    async addProducts() {
        await this.add1.click();
        await this.add2.click();
        await this.add3.click();
        await this.add4.click();
        await this.add5.click();
        await this.add6.click();
    };
    async removeProducts() {
        await this.remove1.click();
        await this.remove2.click();
        await this.remove3.click();
        await this.remove4.click();
        await this.remove5.click();
        await this.remove6.click();
    };
    async cartNumberFunctionality() {
        await this.img1.click();
        await this.add1.click();
        await this.backToProductsBtn.click();
        await this.add4.click();
        await this.title5.click();
        await this.add5.click();
        await this.remove5.click();
        await this.backToProductsBtn.click();
        await this.add5.click();
        await this.add2.click();
        await this.remove4.click();
    };
    async shoppingCartClickBtn() {
        await this.shoppingCartBtn.click();
    };
};

module.exports = new InventoryPage();
