
Feature: features in demowebshop
  I want to use this template for my feature file
  
Background:
		Given Alex launches chrome browser
    And he provides the valid url


Scenario: Registration process of demowebshop
    When Alex clicks on register link
    And Alex provides his details
    Then Alex is able register himself
    
  Scenario: login process of demowebshop
    When Alex clicks on login link
    And Alex provides "email" and "password"
    Then Alex shall view the homepage
    
  