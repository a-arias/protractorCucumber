@regression @smoke
Feature: Amazon search items feature

  Scenario: The user should be be to perform a search on amazon search feature
    Given The user is on amazon page
    When The user search for "Cat bell" on the search input
    Then The user should be able to see the results number for the search of "1-48 of over 2,000 results for"

  @other
  Scenario Outline: I should be able to perform different searches on amazon
    Given The user is on amazon page
    Given The user search for "<string>" on the search input
    Then The user should be able to see the results number for the search of "<results>"
    Examples:
      | string               | results                               |
      | Cat bell             | 1-48 of over 2,000 results for        |
      | Dog bell             | 1-48 of over 1,000 results for        |
