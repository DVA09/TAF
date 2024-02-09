const { Given, When, Then } = require("@wdio/cucumber-framework");

Given(/^user is on login page$/, async () => {
  await browser.url("https://www.saucedemo.com/");
});

When(/^user enters (.*) and (.*)$/, async (username, password) => {
  await $("//input[@type='text']").setValue(username);
  await $("//input[@type='password']").setValue(password);
});

When(/^clicks on login button$/, async () => {
  await $("//input[@type='submit']").click();
});

Then(/^this (.*) is displayed$/, async (message) => {
  await expect($(".app_logo")).toHaveTitle(message);
});
