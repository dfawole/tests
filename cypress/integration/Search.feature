Feature: Search Product

  I want to search for a product

  Scenario: Searching product on Desktop
    Given I am on desktop
    Then I see "test" in the title
    When I search for "Bundles" and click search
    Then I should be redirected to product listing page and see "Bundles"
    Given I scroll down to find I scroll down to find Xbox One X and click the product

  Scenario: Searching product on Mobile
    Given I am on mobile
    Then I see "test" in the title
    When I search for "Bundles" and click search
    Then I should be redirected to product listing page and see "Bundles"
    Given I scroll down to find I scroll down to find Bundles and click the product