Feature: Test Login page

  Scenario: check login with valid credentials
    Given user is on login page
    When user enters <username> and <password>
    And clicks on login button
    Then this <message> is displayed

    Examples: 
      | username                | password     | message   |
      | standard_user           | secret_sauce | Swag Labs |
      | locked_out_user         | secret_sauce | Swag Labs |
      | problem_user            | secret_sauce | Swag Labs |
      | performance_glitch_user | secret_sauce | Swag Labs |
      | error_user              | secret_sauce | Swag Labs |
      | visual_user             | secret_sauce | Swag Labs |
