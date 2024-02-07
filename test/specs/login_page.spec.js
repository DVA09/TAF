const LoginPage = require("../pages/LoginPage");
const login = require("../utils/login.json")

describe("Sauce Tests", () => {

  it("Login Test Standard", async () => {

    browser.url(login.url);

    await LoginPage.loginCSS(login.username[0], login.password);

    await expect(LoginPage.loginMessageCSS).toHaveTextContaining(login.title);
  });

  it("Login Test Locked", async () => {

    browser.url(login.url);

    await LoginPage.loginName(login.username[1], login.password);

    await expect(LoginPage.loginMessageName).toHaveTextContaining(login.errorMessage[3]);
  });

  it("Login Test Problem", async () => {

    browser.url(login.url);

    await LoginPage.loginXpath(login.username[2], login.password);

    await expect(LoginPage.burgerMenuXpath).toBeDisplayed();
  });

  it("Login Test Perfomance", async () => {

    browser.url(login.url);

    await LoginPage.loginName(login.username[3], login.password);

    await expect(LoginPage.loginMessageCSS).toHaveTextContaining(login.title);

  });

  it("Login Test Error", async () => {

    browser.url(login.url);

    await LoginPage.loginXpath(login.username[4], login.password);
    
    await expect(LoginPage.burgerMenuXpath).toBeDisplayed();
  });

  it("Login Test Visual", async () => {

    browser.url(login.url);

    await LoginPage.loginCSS(login.username[5], login.password);

    await expect(LoginPage.loginMessageCSS).toHaveTextContaining(login.title);
  });

  it("Login Test Empty", async () => {

    browser.url(login.url);

    await LoginPage.loginXpath(login.username[6], login.passwordEmpty);

    await expect(LoginPage.loginMessageName).toHaveTextContaining([login.errorMessage[0], login.errorMessage[1]]);
  });

  it("Login Test Empty Password", async () => {

    browser.url(login.url);

    await LoginPage.loginName(login.username[6], login.password);

    await expect(LoginPage.loginMessageName).toHaveTextContaining(login.errorMessage[1]);
  });

  it("Login Test Empty Username", async () => {

    browser.url(login.url);

    await LoginPage.loginXpath(login.username[6], login.password);

    await expect(LoginPage.loginMessageName).toHaveTextContaining(login.errorMessage[2]);

  });

});
