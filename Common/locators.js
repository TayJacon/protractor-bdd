/* 
 * A list of locators that can be use on project
 */

class Locators {
    constructor() {
    this.first = element(by.model('first'))
    this.second = element(by.model('second'))
    this.calcButton = element(by.id('gobutton'))
    this.lastBinding = element(by.binding('latest'))
    this.allResults = element.all(by.repeater('result in memory').column('result.value'))
    this.loginField = element(by.css('input[name=email]'))
    this.passwordField = element(by.css('input[name=password]'))
    this.loginButton = element(by.css('button[id*=btnLogin]')) //for dynamics elements: * = contains | ^ = start with | $ = end with
    this.alertLogin = element(by.css('.alert-login'))
    this.inputName = element(by.css("input[name=title]"))
    this.addButton = element(by.css('button[id*=submit]'))
    this.alertWarn = element(by.css('.panel-c-warning'))
    this.newTaskButton = element(by.css('#insert-button'))
    this.alertInfo = element(by.css('.panel-c-info'))
    this.alertError = element(by.css('.panel-c-danger'))
    this.inputTags = element(by.css("div[class*=tagsinput] input"));
    }
};
module.exports = Locators;