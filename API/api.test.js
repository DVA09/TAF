const axios = require('axios');

test('Create a new user', async () => {
    const user = {
        "id": 0,
        "username": "Test UserLastName",
        "firstName": "Test",
        "lastName": "UserLastName",
        "email": "testuser@example.com",
        "password": "test12356_)",
        "phone": "+375297891234",
        "userStatus": 0
    };
    const response = await axios.post('https://petstore.swagger.io/v2/user', user);
    expect(response.status).toBe(200);
});

test('User with ID 0 exists', async () => {
    const response = await axios.get('https://petstore.swagger.io/v2/user/login?username=Test%20UserLastName&password=test12356_)');
    expect(response.status).toBe(200);
});

test('Updated user', async () => {
    const response = await axios.put('https://petstore.swagger.io/v2/user/New%20User', {
        username: "New User"
    });
    expect(response.status).toBe(200);
});

test('Updated user', async () => {
    const response = await axios.delete('https://petstore.swagger.io/v2/user/New%20User', {
        username: "New User"
    });
    expect(response.status).toBe(200);
});