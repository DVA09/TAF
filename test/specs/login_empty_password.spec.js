const LoginPageEmptyPassword = require("../pages/LoginPageEmptyPassword");

describe("Sauce Tests", () => {
  it("Login Test", async () => {

    browser.url("https://www.saucedemo.com/");

    await LoginPageEmptyPassword.login("standard_user", "");

    await LoginPageEmptyPassword.checkTitle('Epic sadface: Password is required');
  });
});
