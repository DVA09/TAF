const LoginPageLocked = require("../pages/LoginPageLocked");

describe("Sauce Tests", () => {
  it("Login Test", async () => {

    browser.url("https://www.saucedemo.com/");

    await LoginPageLocked.login("locked_out_user", "secret_sauce");

    await LoginPageLocked.checkTitle('Epic sadface: Sorry, this user has been locked out.');
  });
});
