class LoginPageEmptyPassword {

  get usernameTextbox() {
    return $("[placeholder*='Username']");
  }

  get passwordTextbox() {
    return $("[placeholder*='Password']");
  }

  get loginButton() {
    return $("[value*='Login']");
  }
s
  get loginMessage() {
    return $("[data-test='error']");
  }

  async login(userName, password) {
    await this.usernameTextbox.setValue(userName);
    await this.passwordTextbox.setValue(password);
    await this.loginButton.click();
  }

  async checkTitle(title){
    await expect(this.loginMessage).toHaveTextContaining(title);
  }
}

module.exports = new LoginPageEmptyPassword();
