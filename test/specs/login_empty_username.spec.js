const LoginPageEmptyUsername = require("../pages/LoginPageEmptyUsername");

describe("Sauce Tests", () => {
  it("Login Test", async () => {

    browser.url("https://www.saucedemo.com/");

    await LoginPageEmptyUsername.login("", "secret_sauce");

    await LoginPageEmptyUsername.checkTitle('Epic sadface: Username is required');
  });
});
