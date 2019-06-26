const Locators = require('../Common/locators');

class LoginPage {

    constructor() {
        this.path = '/login';
        this.locator = new Locators();
    }

    go() {
        browser.get(this.path);
    }

    doLogin(email, password) {
        this.locator.loginField.sendKeys(email);
        this.locator.passwordField.sendKeys(password);
        this.locator.loginButton.click();
    }
}
module.exports = LoginPage;