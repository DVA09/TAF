class LoginPageEmpty {

  get usernameTextbox() {
    return $("//input[@id='user-name']");
  }

  get passwordTextbox() {
    return $("//input[@id='password']");
  }

  get loginButton() {
    return $("//input[@id='login-button']");
  }

  get loginMessage() {
    return $("h3[data-test='error']");
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

module.exports = new LoginPageEmpty();
