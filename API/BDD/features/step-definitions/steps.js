const { Given, When } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals')
const axios = require('axios');

let response;
const user = {
    "id": 22,
    "username": "Test UserLastName",
    "firstName": "Test",
    "lastName": "UserLastName",
    "email": "testuser@example.com",
    "password": "test12356_)",
    "phone": "+375297891234",
    "userStatus": 0
};

Given(/^Send request to "([^"]*)"$/, async (url) => {    
    response = await axios.post(url, user);
});

When(/^Check status code, type, message of responce$/, async () => {
	await expect(response.status).toBe(200);
    await expect(response.data.type).toBe("unknown");
    await expect(response.data.message).toBe("22");
});

Given(/^Send negative POST request to "([^"]*)"$/, async (url) => {
    user.id = '';
    response = await axios.post(url, user);
});

When(/^Check status code, type, message of responce negative$/, async () => {
	await expect(response.status).toBe(200);
    await expect(response.data.type).toBe("unknown");
    await expect(response.data.message).toBe("22");
});

Given(/^Send GET request to "([^"]*)"$/, async (url) => {
	response = await axios.get(url);
});    

When(/^Check status code, type of GET responce$/, async () => {
	await expect(response.status).toBe(200);
    expect(response.data.type).toBe("unknown"); 
});

Given(/^Send PUT request to "([^"]*)"$/, async (url) => {
	response = await axios.put(url, {
        username: "New User"
    });
});

When(/^Check status code, type, message of PUT responce$/, async () => {
	await expect(response.status).toBe(200);
    await expect(response.data.type).toBe("unknown");
    await expect(response.data.message).toBe("9223372036854775807"); 
});

Given(/^Send DELETE request to "([^"]*)"$/, async (url) => {
	response = await axios.delete(url, {
        username: "New User"
    });
});

When(/^Check status code, type of DELETE responce$/, async () => {
	await expect(response.status).toBe(200);
    await expect(response.data.type).toBe("unknown");
    await expect(response.data.message).toBe("New User");
});

Given(/^Send DELETE purchase order request to "([^"]*)"$/, async (url) => {
	response = await axios.delete(url, {
        orderId: "123"
    });
});

When(/^Check status code, type of DELETE purchase order responce$/,async () => {
	await expect(response.status).toBe(404);
});