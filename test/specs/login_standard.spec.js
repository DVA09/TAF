const LoginPageStandard = require("../pages/LoginPageStandard");

describe("Sauce Tests", () => {
  it("Login Test", async () => {

    browser.url("https://www.saucedemo.com/");

    await LoginPageStandard.login("standard_user", "secret_sauce");

    await LoginPageStandard.checkTitle('Swag Labs');
  });
});
