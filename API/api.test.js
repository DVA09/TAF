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
    console.log(response);
});