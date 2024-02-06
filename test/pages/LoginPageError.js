class LoginPageError {

  get usernameTextbox() {
    return $("#user-name");
  }

  get passwordTextbox() {
    return $("#password");
  }

  get loginButton() {
    return $("#login-button");
  }

  get loginMessage() {
    return $(".app_logo");
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

module.exports = new LoginPageError();
