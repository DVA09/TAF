const LoginPage = require("../pages/login.pages");

describe("Sauce Tests", () => {
  it("Login Test", async () => {

    browser.url("https://www.saucedemo.com/");

    await LoginPage.login("standard_user", "secret_sauce");

    await LoginPage.checkTitle('Swag Labs');
  });
});
