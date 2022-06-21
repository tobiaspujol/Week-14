class CheckoutPage{
    // Getters
    get inputFirstName() { return $('#first-name'); };
    get inputLastName() { return $('#last-name'); };
    get inputPostalCode() { return $('#postal-code'); };
    // get errorCont() { return $('.error-message-container'); };
    // get crossBtn() { return $('.error-button'); };
    // get errorX1() { return $('div.form_group:nth-child(1) > svg:nth-child(2) > path:nth-child(1)'); };
    // get errorX2() { return $('div.form_group:nth-child(2) > svg:nth-child(2)'); };
    // get errorX3() { return $('div.form_group:nth-child(3) > svg:nth-child(2) > path:nth-child(1)'); };
    get cancelBtn() { return $('#cancel'); };
    get continueBtn() { return $('#continue'); };
    get finishBtn() { return $('#finish'); };
    get pageTitle() { return $('.title'); };
    // get imgFinish() { return $('.pony_express'); };
    // get backHomeBtn() { return $('#back-to-products'); };

    // Setters
    async setFirstName(firstname) {
        await this.inputFirstName.setValue(firstname);
    };
    async setLastName(lastname) {
        await this.inputLastName.setValue(lastname);
    };
    async setPostalCode(postalcode) {
        await this.inputPostalCode.setValue(postalcode);
    };

    // Methods
    async checkout(firstname, lastname, postalcode) {
        await this.setFirstName(firstname);
        await this.setLastName(lastname);
        await this.setPostalCode(postalcode);
        await this.continueBtn.click();
    };
    async checkoutFinishClickBtn() {
        await this.finishBtn.click();
    }
};

module.exports = new CheckoutPage();
