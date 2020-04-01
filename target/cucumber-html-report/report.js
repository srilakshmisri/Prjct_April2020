$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/C:/Users/s.srinadhuni/eclipse-workspace/Selenium_GFT/cucumber_gft/features/cuctags.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@entirefeature"
    }
  ]
});
formatter.scenario({
  "name": "login to demowebshop",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@entirefeature"
    },
    {
      "name": "@login"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "Amy launched chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "CuctagsStepDefs.amy_launched_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provided valid URL",
  "keyword": "And "
});
formatter.match({
  "location": "CuctagsStepDefs.provided_valid_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Amy provides valid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "CuctagsStepDefs.amy_provides_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login",
  "keyword": "And "
});
formatter.match({
  "location": "CuctagsStepDefs.click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Amy shall see the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "CuctagsStepDefs.amy_shall_see_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "registration of user in demowebshop",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@entirefeature"
    },
    {
      "name": "@register"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "Amy is on registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "CuctagsStepDefs.amy_is_on_registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Amy provides all the details",
  "keyword": "When "
});
formatter.match({
  "location": "CuctagsStepDefs.amy_provides_all_the_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she shall be registered successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "CuctagsStepDefs.she_shall_be_registered_successfully()"
});
formatter.result({
  "status": "passed"
});
});