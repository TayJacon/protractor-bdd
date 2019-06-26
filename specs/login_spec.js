const Locators = require('../Common/locators');
const Login = require('../PageObject/login');

describe('Login', function() {
    const locator = new Locators;
    const loginPage = new Login();

    beforeEach(function() {
        browser.get(loginPage.path);
    })

    it('When use a invalid password', function(){
        loginPage.doLogin('me@papito.io', '123abc');

        expect(locator.alertLogin.getText()).toEqual('Senha inválida.');
    })

    it('When user is not registered', function(){
        loginPage.doLogin('404@papito.io', '123abc');

        expect(locator.alertLogin.getText()).toEqual('Usuário não cadastrado.');
    })

    it('When password size is lowest than required', function(){
        loginPage.doLogin('404@papito.io', '123');

        expect(locator.alertLogin.getText()).toEqual('Senha deve ter no mínimo 6 caracteres.');
    })

    it('When don\'t fill the email', function(){
        loginPage.doLogin('', '123abc');

        expect(locator.alertLogin.getText()).toEqual('Email incorreto ou ausente.');
    })

    it('When don\'t fill the password', function(){
        loginPage.doLogin('me@papito.io', '');

        expect(locator.alertLogin.getText()).toEqual('Senha ausente.');
    })
    //parei no 1:47 Segunda Live - 17 de Outubro de 2018
})