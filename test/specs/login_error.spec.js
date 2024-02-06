const LoginPageError = require("../pages/LoginPageError");

describe("Sauce Tests", () => {
  it("Login Test", async () => {

    browser.url("https://www.saucedemo.com/");

    await LoginPageError.login("performance_glitch_user", "secret_sauce");

    await LoginPageError.checkTitle('Swag Labs');
  });
});
