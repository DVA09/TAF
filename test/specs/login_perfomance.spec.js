const LoginPagePerfomance = require("../pages/LoginPagePerfomance");

describe("Sauce Tests", () => {
  it("Login Test", async () => {

    browser.url("https://www.saucedemo.com/");

    await LoginPagePerfomance.login("performance_glitch_user", "secret_sauce");

    await LoginPagePerfomance.checkTitle('Swag Labs');
  });
});
