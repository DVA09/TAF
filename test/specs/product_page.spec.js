const ProductPage = require("../pages/ProductPage");
const LoginPage = require("../pages/LoginPage");
const login = require("../utils/login.json");
const product = require("../utils/product.json");
 
describe("Product Page", () => {
  //Header tests
  it("Burger Menu test", async () => {
    browser.url(product.url);

    await LoginPage.loginCSS(login.username[0], login.password);

    await expect(ProductPage.iconBurgerMenu).toBeClickable();
  });

  it("Burger Menu item1 test", async () => {
    await ProductPage.iconBurgerMenu.click();

    await expect(ProductPage.iconBurgerMenuItem1).toHaveText("All Items");

    await expect(ProductPage.iconBurgerMenuItem1).toBeClickable();
  });

  it("Burger Menu item2 test", async () => {
    await expect(ProductPage.iconBurgerMenuItem2).toHaveText("About");

    await expect(ProductPage.iconBurgerMenuItem2).toBeClickable();
  });

  it("Burger Menu item3 test", async () => {
    await expect(ProductPage.iconBurgerMenuItem3).toHaveText("Logout");

    await expect(ProductPage.iconBurgerMenuItem3).toBeClickable();
  });

  it("Burger Menu item4 test", async () => {
    await expect(ProductPage.iconBurgerMenuItem4).toHaveText("Reset App State");

    await expect(ProductPage.iconBurgerMenuItem4).toBeClickable();

    await ProductPage.iconBurgerMenuCross.click();
  });

  it("Product page title test", async () => {
    await expect(ProductPage.homeTitle).toHaveText("Swag Labs");
  });

  it("Product basket test", async () => {
    await expect(ProductPage.iconShoppingBasket).toBeDisplayed();

    await expect(ProductPage.iconShoppingBasket).toBeClickable();
  });

  //Header secondary tests
  it("Header title test", async () => {
    await expect(ProductPage.headerTitle).toHaveText("Products");
  });

  it("Filter test", async () => {
    await expect(ProductPage.productSort).toBeDisplayed();

    await expect(ProductPage.productSort).toBeClickable();

    await expect(ProductPage.productSort).toHaveChildren(4);

    await ProductPage.productSort.click();
  });

  it("Filter Option test 1", async () => {
    await expect(ProductPage.sortOption1).toBeDisplayed();

    await expect(ProductPage.activeOption).toHaveText("Name (A to Z)");
  });

  it("Filter Option test 2", async () => {
    await ProductPage.sortOption2.click();

    await expect(ProductPage.activeOption).toHaveText("Name (Z to A)");

    await expect(ProductPage.sortOption2).toBeDisplayed();
  });

  it("Filter Option test 3", async () => {
    await ProductPage.productSort.click();

    await ProductPage.sortOption3.click();

    await expect(ProductPage.sortOption3).toBeDisplayed();

    await expect(ProductPage.activeOption).toHaveText("Price (low to high)");
  });

  it("Filter Option test 4", async () => {
    await ProductPage.productSort.click();

    await ProductPage.sortOption4.click();

    await expect(ProductPage.sortOption4).toBeDisplayed();

    await expect(ProductPage.activeOption).toHaveText("Price (high to low)");
  });

  it("Inventory card", async () => {
    await expect(ProductPage.productName).toBeClickable();
    await expect(ProductPage.productName).toBeClickable();

    await expect(ProductPage.productImage).toBeClickable();

    await expect(ProductPage.productBtn).toBeClickable();
  });

  it("Inventory card Name", async () => {
    await expect(ProductPage.productName).toHaveTextContaining(/^(?!.*\(\)).*$/);      
  });

  it("Inventory card Description", async () => {
    await expect(ProductPage.productDescription).toHaveTextContaining(/^(?!.*\(\)).*$/);      
  });

  //Footer
  it("Footer social", async () => {
    await expect(ProductPage.social).toBeClickable();
  });

  it("Footer social Twitter", async () => {
    await ProductPage.socialTwitter.click();
  });

  it("Footer social Facebook", async () => {
    await ProductPage.socialFacebook.click();
  });

  it("Footer social Linkedin", async () => {
    await ProductPage.socialLinkedin.click();
  });

  it("Footer copy", async () => {
    await expect(ProductPage.copyText).toHaveText(
      "© 2024 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy"
    );
  });

  it("Log out", async () => {
    await ProductPage.iconBurgerMenu.click();

    await ProductPage.iconBurgerMenuItem3.click();
  });
});
