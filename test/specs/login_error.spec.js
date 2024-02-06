const LoginPageError = require("../pages/LoginPageError");

describe("Sauce Tests", () => {
  it("Login Test", async () => {

    browser.url("https://www.saucedemo.com/");

    await LoginPageError.login("error_user", "secret_sauce");

    await LoginPageError.checkTitle('Swag Labs');
  });
});
