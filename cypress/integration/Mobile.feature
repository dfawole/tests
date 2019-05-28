Feature: This is to test Mobile

  Scenario: Test Mobile
    Given I am on mobile
    Then I see "GAME" in the title
    When I search for "XBox console" and click search
    Then I should be redirected to product listing page and see "Xbox One Consoles and Bundles"
    Given I scroll down to find I scroll down to find Xbox One X and click the product
