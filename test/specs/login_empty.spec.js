const LoginPageEmpty = require("../pages/LoginPageEmpty");

describe("Sauce Tests", () => {
  it("Login Test", async () => {

    browser.url("https://www.saucedemo.com/");

    await LoginPageEmpty.login("", "");

    await LoginPageEmpty.checkTitle('Epic sadface: Username and Password is required');
  });
});
