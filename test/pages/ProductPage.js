class ProductPage {
  //Header locators
  get iconBurgerMenu() {
    return $("//*[@id='react-burger-menu-btn']");
  }

  get iconBurgerMenuItem1() {
    return $("//*[@id='inventory_sidebar_link']");
  }

  get iconBurgerMenuItem2() {
    return $("//*[@id='about_sidebar_link']");
  }

  get iconBurgerMenuItem3() {
    return $("//*[@id='logout_sidebar_link']");
  }

  get iconBurgerMenuItem4() {
    return $("//*[@id='reset_sidebar_link']");
  }

  get iconBurgerMenuCross() {
    return $("//*[@id='react-burger-cross-btn']");
  }

  get homeTitle() {
    return $(".app_logo");
  }

  get iconShoppingBasket() {
    return $("//*[@id='shopping_cart_container']/a");
  }

  //Header secondary locators
  get headerTitle() {
    return $("//*[@id='header_container']/div[2]/span");
  }

  get activeOption() {
    return $("//*[@id='header_container']/div[2]/div/span/span");
  }

  get productSort() {
    return $("//*[@id='header_container']/div[2]/div/span/select");
  }

  get activeOption() {
    return $("//*[@id='header_container']/div[2]/div/span/span");
  }

  get sortOption1() {
    return $("//*[@id='header_container']/div[2]/div/span/select/option[1]");
  }

  get sortOption2() {
    return $("//*[@id='header_container']/div[2]/div/span/select/option[2]");
  }

  get sortOption3() {
    return $("//*[@id='header_container']/div[2]/div/span/select/option[3]");
  }

  get sortOption4() {
    return $("//*[@id='header_container']/div[2]/div/span/select/option[4]");
  }

  //Product card locators
  get productList() {
    return $("//*[@id='inventory_container']/div");
  }

  get productName() {
    return $$(".inventory_item_name");
  }

  get productDescription() {
    return $$(".inventory_item_description");
  }

  get productImage() {
    return $$(".inventory_item_img");
  }

  get productBtn() {
    return $$(".btn_inventory");
  }

  //Footer locators
  get social() {
    return $$(".social");
  }

  get socialTwitter() {
    return $("//*[@id='page_wrapper']/footer/ul/li[1]/a");
  }

  get socialFacebook() {
    return $("//*[@id='page_wrapper']/footer/ul/li[2]/a");
  }

  get socialLinkedin() {
    return $("//*[@id='page_wrapper']/footer/ul/li[3]/a");
  }

  get copyText() {
    return $$("//*[@id='page_wrapper']/footer/div");
  }
}

module.exports = new ProductPage();
