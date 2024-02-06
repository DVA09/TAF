const LoginPage = require("../pages/login.pages");

describe("Sauce Tests", () => {
  it("Login Test", async () => {

    browser.url("https://www.saucedemo.com/");

    await LoginPage.login("standard_user", "secret_sauceeeeee");

    await LoginPage.checkTitle('Swag Labs');

    // await $("#user-name").setValue("standard_user");

    // await $("#password").setValue("secret_sauce");

    // await $("#login-button").click();

    // await $('.app_logo').getText();

    // await expect($('.app_logo')).toHaveTextContaining('Swag Labs');
  });
});
