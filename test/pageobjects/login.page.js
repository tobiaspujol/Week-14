class LoginPage{
    // Getters
    get inputUsername () { return $('#user-name'); };
    get inputPassword () { return $('#password'); };
    get btnLogin () { return $('#login-button'); };
    get logo() { return $('.login_logo'); };
    get imgRobot() { return $('.bot_column'); };
    get usernamesList() { return $('#login_credentials'); };
    get passwordUnique() { return $('.login_password'); };

    // Setters
    async setUsername(username) {
        await this.inputUsername.setValue(username);
    };
    async setPassword(password) {
        await this.inputPassword.setValue(password);
    };

    // Methods
    async login(username,password) {
        await this.setUsername(username);
        await this.setPassword(password);
        await this.btnLogin.click();
    };
};

module.exports = new LoginPage();
