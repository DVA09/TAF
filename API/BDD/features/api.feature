Feature: API testing different endpoints

  Scenario Outline: Create a new user

    Given Send request to "https://petstore.swagger.io/v2/user"
    Then Check status code, type, message of responce

  Scenario Outline: Create a new user negative

    Given Send negative POST request to "https://petstore.swagger.io/v2/user"
    Then Check status code, type, message of responce negative 

  Scenario Outline: User with ID 0 exists

    Given Send GET request to "https://petstore.swagger.io/v2/user/login?username=Test%20UserLastName&password=test12356_)"
    Then Check status code, type of GET responce
  
  Scenario Outline: Updated user

    Given Send PUT request to "https://petstore.swagger.io/v2/user/New%20User"
    Then Check status code, type, message of PUT responce
  
  Scenario Outline: Delete user

    Given Send DELETE request to "https://petstore.swagger.io/v2/user/New%20User"
    Then Check status code, type of DELETE responce
  
  Scenario Outline: Delete purchase order by ID

    Given Send DELETE purchase order request to "https://petstore.swagger.io/v2/store/order/123"
    Then Check status code, type of DELETE purchase order responce