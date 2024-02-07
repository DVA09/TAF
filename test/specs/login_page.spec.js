const LoginPage = require("../pages/LoginPage");

describe("Sauce Tests", () => {

  it("Login Test Standard", async () => {

    browser.url("https://www.saucedemo.com/");

    await LoginPage.loginCSS("standard_user", "secret_sauce");

    await LoginPage.checkTitle('Swag Labs');
  });

  it("Login Test Locked", async () => {

    browser.url("https://www.saucedemo.com/");

    await LoginPage.loginName("locked_out_user", "secret_sauce");

    await LoginPage.checkError('Epic sadface: Sorry, this user has been locked out.');
  });

  it("Login Test Problem", async () => {

    browser.url("https://www.saucedemo.com/");

    await LoginPage.loginXpath("problem_user", "secret_sauce");

    await LoginPage.checkDisplayed();
  });

  it("Login Test Perfomance", async () => {

    browser.url("https://www.saucedemo.com/");

    await LoginPage.loginName("performance_glitch_user", "secret_sauce");

    await LoginPage.checkTitle('Swag Labs');
  });

  it("Login Test Error", async () => {

    browser.url("https://www.saucedemo.com/");

    await LoginPage.loginXpath("error_user", "secret_sauce");

    await LoginPage.checkDisplayed();
  });

  it("Login Test Visual", async () => {

    browser.url("https://www.saucedemo.com/");

    await LoginPage.loginCSS("visual_user", "secret_sauce");

    await LoginPage.checkTitle('Swag Labs');
  });

  it("Login Test Empty", async () => {

    browser.url("https://www.saucedemo.com/");

    await LoginPage.loginXpath("", "");

    await LoginPage.checkError('Epic sadface: Username and Password is required');
  });

  it("Login Test Empty Password", async () => {

    browser.url("https://www.saucedemo.com/");

    await LoginPage.loginName("", "secret_sauce");

    await LoginPage.checkError('Epic sadface: Username is required');
  });

  it("Login Test Empty Username", async () => {

    browser.url("https://www.saucedemo.com/");

    await LoginPage.loginXpath("", "secret_sauce");

    await LoginPage.checkError('Epic sadface: Username is required');
  });

});
