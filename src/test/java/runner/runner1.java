package runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)

@CucumberOptions(features="C:\\Users\\s.srinadhuni\\eclipse-workspace\\Selenium_GFT\\cucumber_gft\\features\\cuctags.feature",
				glue= {"stepdefs"},
				tags= {"@login,@register"},
				monochrome = true,
				plugin= {"pretty","html:target/cucumber-html-report"})

public class runner1 {

}
