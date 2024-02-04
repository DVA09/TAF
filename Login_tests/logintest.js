const { Builder, By, until } = require('selenium-webdriver');
const assert = require ('assert');

const loginPage = "https://www.saucedemo.com/";
const inputUserName = 'user-name';
const acceptedUserName = 'standard_user';
const inputPassword = "password";
const password = "secret_sauce";
const btnLogin = "login-button";
const title = "Swag Labs";

async function loginTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get(loginPage);
        await driver.findElement(By.id(inputUserName)).sendKeys(acceptedUserName);
        await driver.findElement(By.id(inputPassword)).sendKeys(password);
        await driver.findElement(By.name(btnLogin)).click();
        const pageTitle = await driver.getTitle();
        assert.strictEqual(pageTitle, title);
        await driver.wait(until.titleIs(title), 4000);
    } finally {
        await driver.quit(); 
    }
}
loginTest();