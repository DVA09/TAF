Feature: API testing different endpoints
  Scenario: Create a new user
    Given Send positive POST request
    When Check status code, type, message of responce

  Scenario: Create a new user negative
    Given Send negative POST request
    When Check status code, type, message of responce negative 

  Scenario: User with ID 0 exists
    Given Send GET request with username "Test UserLastName" and password "test12356"
    When Check status code, type of GET responce
  
  Scenario: Updated user
    Given Send PUT request with username "New User"
    When Check status code, type, message of PUT responce
  
  Scenario: Delete user
    Given Send DELETE request with username "New User"
    When Check status code, type of DELETE responce
  
  Scenario: Delete purchase order by ID
    Given Send DELETE purchase order request
    When Check status code, type of DELETE purchase order responce