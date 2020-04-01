package stepdefs;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class DemowebshopStepDefs {
	WebDriver driver;
	
	@Given("Alex launches chrome browser")
	public void alex_launches_chrome_browser() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\s.srinadhuni\\Documents\\Drivers\\chromedriver.exe");
		 driver = new ChromeDriver();
		
	   
	}

	@Given("he provides the valid url")
	public void he_provides_the_valid_url() {
		driver.get("http://demowebshop.tricentis.com/");
	   
	}

	@When("Alex clicks on register link")
	public void alex_clicks_on_register_link() {
		driver.findElement(By.className("ico-register")).click();
	   
	}

	@When("Alex provides his details")
	public void alex_provides_his_details() {
		System.out.println("Alex provides all his personal details");
	   
	}

	@Then("Alex is able register himself")
	public void alex_is_able_register_himself() {
		System.out.println("Alex - successful registered");
	   
	}

	@When("Alex clicks on login link")
	public void alex_clicks_on_login_link() {
	    
	}

	@When("Alex provides {string} and {string}")
	public void alex_provides_and(String string, String string2) {
	   
	}

	@Then("Alex shall view the homepage")
	public void alex_shall_view_the_homepage() {
	   
	}


}
