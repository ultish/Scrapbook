/// <reference path="./typings/angular-protractor/angular-protractor.d.ts" />
/// <reference path="./typings/jasmine/jasmine.d.ts" />
/// <reference path="./typings/requirejs/require.d.ts" />
var LoginPage = (function () {
    function LoginPage() {
        this.form = element(by.css('form'));
        this.inputEmail = element(by.model('c.email'));
        this.inputPassword = element(by.model('c.password'));
        this.buttonLogin = element(by.buttonText('ログイン'));
    }
    LoginPage.prototype.open = function () {
        browser.get('http://localhost:9010/');
    };
    LoginPage.prototype.getButtonLogin = function () {
        return this.buttonLogin;
    };
    LoginPage.prototype.getDisabledLoginButton = function () {
        return element(by.css('button[disabled="disabled"]'));
    };
    LoginPage.prototype.typeEmail = function (email, clearField) {
        var _this = this;
        var deferred = protractor.promise.defer();
        if (clearField) {
            this.inputEmail.clear().then(function () {
                _this.setEmailText(email, deferred);
            });
        }
        else {
            this.setEmailText(email, deferred);
        }
        return deferred.promise;
    };
    LoginPage.prototype.typePassword = function (password, clearField) {
        var _this = this;
        var deferred = protractor.promise.defer();
        if (clearField) {
            this.inputPassword.clear().then(function () {
                _this.setPasswordText(password, deferred);
            });
        }
        else {
            this.setPasswordText(password, deferred);
        }
        return deferred.promise;
    };
    LoginPage.prototype.getErrorMessage = function () {
        return element(by.css('span[ng-bind-html="message.content"]')).getText();
    };
    LoginPage.prototype.setEmailText = function (email, deferred) {
        var _this = this;
        this.inputEmail.sendKeys(email).then(function () {
            deferred.fulfill(_this.inputEmail);
        });
    };
    LoginPage.prototype.setPasswordText = function (password, deferred) {
        var _this = this;
        this.inputPassword.sendKeys(password).then(function () {
            deferred.fulfill(_this.inputPassword);
        });
    };
    return LoginPage;
})();
exports.LoginPage = LoginPage;
var loginPage = new LoginPage();
var EC = protractor.ExpectedConditions;
describe("Login", function () {
    loginPage.open();
    it('login button should be disabled', function () {
        browser.wait(EC.presenceOf(loginPage.getDisabledLoginButton()), 1000);
    });
    it('login button should be disabled with only an email', function () {
        loginPage.typeEmail('bizreach@sutead.com', false).then(function () {
            expect(loginPage.getButtonLogin().isEnabled()).toBe(false);
        });
    });
    it('login button should be enabled now', function () {
        loginPage.typePassword('fakepassword', false).then(function (input) {
            expect(loginPage.getButtonLogin().isEnabled()).toBe(true);
        });
    });
    it('error message due to wrong login credentials', function () {
        loginPage.getButtonLogin().click().then(function () {
            loginPage.getErrorMessage().then(function (text) {
                expect(text).toBe("Emailアドレスまたはパスワードが誤っています。");
            });
        });
    });
    it('login button disabled due to invalid email structure', function () {
        loginPage.typeEmail('bizreach', true).then(function () {
            expect(loginPage.getButtonLogin().isEnabled()).toBe(false);
        });
    });
    it('login button enabled again', function () {
        loginPage.typeEmail('bizreach@sutead.com', true);
        loginPage.typePassword('password', true).then(function () {
            expect(loginPage.getButtonLogin().isEnabled()).toBe(true);
        });
    });
    it('login success', function () {
        loginPage.getButtonLogin().click();
        browser.sleep(2000);
        browser.getLocationAbsUrl().then(function (url) {
            expect(url).toBe("/");
        });
    });
});
