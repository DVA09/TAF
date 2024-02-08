class LoginPage {

    get usernameTextboxCSS() {
      return $("#user-name");
    }
  
    get passwordTextboxCSS() {
      return $("#password");
    }
  
    get loginButtonCSS() {
      return $("#login-button");
    }
  
    get loginMessageCSS() {
      return $(".app_logo");
    }
    


    get usernameTextboxName() {
      return $("[name='user-name']");
    }
  
    get passwordTextboxName() {
      return $("[name='password']");
    }
  
    get loginButtonName() {
      return $("[name='login-button']");
    }
  
    get loginMessageName() {
      return $("h3[data-test='error']");
    }



    get usernameTextboxXpath() {
      return $("//input[@type='text']");
    }
  
    get passwordTextboxXpath() {
      return $("//input[@type='password']");
    }
  
    get loginButtonXpath() {
      return $("//input[@type='submit']");
    }
  
    get loginMessageXpath() {
      return $("//*[@id='login_button_container']/div/form/div[3]");
    }
    
    
    get burgerMenuXpath() {
      return $("//*[@id='react-burger-menu-btn']");
    }
  
    async loginCSS(userName, password) {
      await this.usernameTextboxCSS.setValue(userName);
      await this.passwordTextboxCSS.setValue(password);
      await this.loginButtonCSS.click();
    }

    async loginName(userName, password) {
      await this.usernameTextboxName.setValue(userName);
      await this.passwordTextboxName.setValue(password);
      await this.loginButtonName.click();
    }

    async loginXpath(userName, password) {
      await this.usernameTextboxXpath.setValue(userName);
      await this.passwordTextboxXpath.setValue(password);
      await this.loginButtonXpath.click();
    } 
  }
  
  module.exports = new LoginPage();