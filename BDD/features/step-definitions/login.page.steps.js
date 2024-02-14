const { Given, When, Then } = require("@wdio/cucumber-framework");

Given(/^user is on login page$/, async () => {
  await browser.url("https://www.saucedemo.com/");
});

When(/^user enters standard_user and secret_sauce$/, async () => {
  await $("//input[@type='text']").setValue('standard_user');
  await $("//input[@type='password']").setValue('secret_sauce');
});

When(/^clicks on login button$/, async () => {
  await $("//input[@type='submit']").click();
});

Then(/^title Swag Labs is displayed$/, async () => {
  await expect($(".app_logo")).toHaveTitle('Swag Labs');
});

When(/^clicks on burger menu icon$/, async () => {
	await $("//*[@id='react-burger-menu-btn']").click();
});

Then(/^burger menu is visible$/, async () => {
	await expect($("//*[@id='menu_button_container']/div/div[2]")).toBeDisplayed();
});

Then(/^burger menu Item1 has text All Items$/, async () => {
	await expect($("//*[@id='inventory_sidebar_link']")).toHaveText("All Items");
});

Then(/^item1 is clickable$/, async () => {
	await expect($("//*[@id='inventory_sidebar_link']")).toBeClickable();
});

Then(/^burger menu Item2 has text About$/, async () => {
	await expect($("//*[@id='about_sidebar_link']")).toHaveText("About");
});

Then(/^item2 is clickable$/, async () => {
	await expect($("//*[@id='about_sidebar_link']")).toBeClickable();
});

Then(/^burger menu Item3 has text Logout$/, async () => {
	await expect($("//*[@id='logout_sidebar_link']")).toHaveText("Logout");
});

Then(/^item3 is clickable$/, async () => {
	await expect($("//*[@id='logout_sidebar_link']")).toBeClickable();
});

Then(/^burger menu Item4 has text Reset App State$/, async () => {
	await expect($("//*[@id='reset_sidebar_link']")).toHaveText("Reset App State");
});

Then(/^item4 is clickable$/, async () => {
	await expect($("//*[@id='reset_sidebar_link']")).toBeClickable();
});

When(/^close burger menu$/, async () => {
	await $("//*[@id='react-burger-cross-btn']").click();
});

Then(/^product page title has text$/, async () => {
	await expect($(".app_logo")).toHaveText("Swag Labs");
});

Then(/^basket icon to be displayed on the page$/, async () => {
	await expect($("//*[@id='shopping_cart_container']/a")).toBeDisplayed();
});

Then(/^basket icon is clickable$/, async () => {
	await expect($("//*[@id='shopping_cart_container']/a")).toBeClickable();
});

Then(/^secondary header has text$/, async () => {
  await expect($("//*[@id='header_container']/div[2]/span")).toHaveText("Products");
});

Then(/^filter icon to be displayed on the page$/, async () => {
  await expect($("//*[@id='header_container']/div[2]/div/span/select")).toBeDisplayed();
});

When(/^filter icon is clickable$/, async () => {
  await expect($("//*[@id='header_container']/div[2]/div/span/select")).toBeClickable();
});

Then(/^filter has 4 options$/, async () => {
	await expect($("//*[@id='header_container']/div[2]/div/span/select")).toHaveChildren(4);
});

When(/^open list with filter options$/, async () => {
	await $("//*[@data-test='product_sort_container']").click();
});

Then(/^1st filter option to be displayed$/, async () => {
	await expect($("//*[@id='header_container']/div[2]/div/span/select/option[1]")).toBeDisplayed();
});

Then(/^1st filter option has text$/, async () => {
	await expect($("//*[@id='header_container']/div[2]/div/span/select/option[1]")).toHaveText("Name (A to Z)");
});

When(/^click on 2nd filter option$/, async () => {
	await $("//*[@id='header_container']/div[2]/div/span/select/option[2]").click();
});

Then(/^2nd filter option to be displayed$/, async () => {
	await expect($("//*[@id='header_container']/div[2]/div/span/select/option[2]")).toBeDisplayed();
});

Then(/^2nd filter option has text$/, async () => {
	await expect($("//*[@id='header_container']/div[2]/div/span/span")).toHaveText("Name (Z to A)");
});

When(/^open list with filter options 3$/, async () => {
	await $("//*[@id='header_container']/div[2]/div/span/select").click();
});

When(/^click on 3rd filter option$/, async () => {
	await $("//*[@id='header_container']/div[2]/div/span/select/option[3]").click();
});

Then(/^3rd filter option to be displayed$/, async () => {
	await expect($("//*[@id='header_container']/div[2]/div/span/select/option[3]")).toBeDisplayed();
});

Then(/^3rd filter option has text$/, async () => {
	await expect($("//*[@id='header_container']/div[2]/div/span/span")).toHaveText("Price (low to high)");
});

When(/^open list with filter options 4$/, async () => {
	await $("//*[@id='header_container']/div[2]/div/span/select").click();
});

When(/^click on 4th filter option$/, async () => {
	await $("//*[@id='header_container']/div[2]/div/span/select/option[4]").click();
});

Then(/^4th filter option to be displayed$/, async () => {
	await expect($("//*[@id='header_container']/div[2]/div/span/select/option[4]")).toBeDisplayed();
});

Then(/^4th filter option has text$/, async () => {
	await expect($("//*[@id='header_container']/div[2]/div/span/span")).toHaveText("Price (high to low)");
});

Then(/^names of the products is clickable$/, async () => {
	await expect($$(".inventory_item_name")).toBeClickable();
});

Then(/^images of the products is clickable$/, async () => {
	await expect($$(".inventory_item_img")).toBeClickable();
});

Then(/^button of the products is clickable$/, async () => {
	await expect($$(".btn_inventory")).toBeClickable();
});

Then(/^names of the products don't have brackets$/, async () => {
	await expect($$(".inventory_item_name")).toHaveTextContaining(/^(?!.*\(\)).*$/);  
});

Then(/^description of the products don't have brackets$/, async () => {
	await expect($$(".inventory_item_desc")).toHaveTextContaining(/^(?!.*\(\)).*$/);
});


