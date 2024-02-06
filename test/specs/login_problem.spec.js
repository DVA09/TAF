const LoginPageProblem = require("../pages/LoginPageProblem");

describe("Sauce Tests", () => {
  it("Login Test", async () => {

    browser.url("https://www.saucedemo.com/");

    await LoginPageProblem.login("problem_user", "secret_sauce");

    await LoginPageProblem.checkTitle('Swag Labs');
  });
});
