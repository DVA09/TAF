Feature: Test Login page

  Background: check login with valid credentials
    Given user is on login page
    When user enters standard_user and secret_sauce
    And clicks on login button
    Then title Swag Labs is displayed
  
  Scenario Outline: check product page
    When clicks on burger menu icon
    Then burger menu is visible
    When burger menu Item1 has text All Items
    Then item1 is clickable
    When burger menu Item2 has text About
    Then item2 is clickable
    When burger menu Item3 has text Logout
    Then item3 is clickable
    When burger menu Item4 has text Reset App State
    Then item4 is clickable
    Then close burger menu
    Then product page title has text
    When basket icon to be displayed on the page
    Then basket icon is clickable
    When secondary header has text
    Then filter icon to be displayed on the page
    When filter icon is clickable
    Then filter has 4 options
    Then open list with filter options
    When 1st filter option to be displayed
    Then 1st filter option has text
    When click on 2nd filter option
    Then 2nd filter option to be displayed
    When 2nd filter option has text
    Then open list with filter options 3
    When click on 3rd filter option
    Then 3rd filter option to be displayed
    When 3rd filter option has text
    Then open list with filter options 4
    When click on 4th filter option
    Then 4th filter option to be displayed
    When 4th filter option has text
    Then names of the products is clickable
    When images of the products is clickable
    Then button of the products is clickable
    When names of the products don't have brackets
    Then description of the products don't have brackets


    

 