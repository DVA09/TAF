const { Given, When } = require("@wdio/cucumber-framework");
const { expect } = require("@wdio/globals");
const axios = require("axios");
const address = require("../utils/url.json");

let response;
const user = {
  id: 22,
  username: "Test UserLastName",
  firstName: "Test",
  lastName: "UserLastName",
  email: "testuser@example.com",
  password: "test12356_)",
  phone: "+375297891234",
  userStatus: 0,
};

Given(/^Send positive POST request$/, async () => {
  response = await axios.post(address.url, user);
});

When(/^Check status code, type, message of responce$/, async () => {
  await expect(response.status).toBe(200);
  await expect(response.data.type).toBe("unknown");
  await expect(response.data.message).toBe("22");
});

Given(/^Send negative POST request$/, async () => {
  user.id = "";
  response = await axios.post(address.url, user);
});

When(/^Check status code, type, message of responce negative$/, async () => {
  await expect(response.status).toBe(200);
  await expect(response.data.type).toBe("unknown");
  await expect(response.data.message).toBe("22");
});

Given(/^Send GET request with username "([^"]*)" and password "([^"]*)"$/, async (username, password) => {
    response = await axios.get(
      `${address.url}/login?username=${username}&password=${password}`
    );
  }
);

When(/^Check status code, type of GET responce$/, async () => {
  await expect(response.status).toBe(200);
  expect(response.data.type).toBe("unknown");
});

Given(/^Send PUT request with username "([^"]*)"$/, async (username) => {
  response = await axios.put(`${address.url}/New%20User`, {
    username: username,
  });
});

When(/^Check status code, type, message of PUT responce$/, async () => {
  await expect(response.status).toBe(200);
  await expect(response.data.type).toBe("unknown");
  await expect(response.data.message).toBe("9223372036854775807");
});

Given(/^Send DELETE request with username "([^"]*)"$/, async (username) => {
  response = await axios.delete(`${address.url}/New%20User`, {
    username: username,
  });
});

When(/^Check status code, type of DELETE responce$/, async () => {
  await expect(response.status).toBe(200);
  await expect(response.data.type).toBe("unknown");
  await expect(response.data.message).toBe("New User");
});

Given(/^Send DELETE purchase order request$/, async () => {
  response = await axios.delete(`${address.url}/order/123`, {
    orderId: "123",
  });
});

When(
  /^Check status code, type of DELETE purchase order responce$/,
  async () => {
    await expect(response.status).toBe(404);
  }
);