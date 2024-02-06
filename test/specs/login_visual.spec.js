const LoginPageVisual = require("../pages/LoginPageVisual");

describe("Sauce Tests", () => {
  it("Login Test", async () => {

    browser.url("https://www.saucedemo.com/");

    await LoginPageVisual.login("performance_glitch_user", "secret_sauce");

    await LoginPageVisual.checkTitle('Swag Labs');
  });
});
