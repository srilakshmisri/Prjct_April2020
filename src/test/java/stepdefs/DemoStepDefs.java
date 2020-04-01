package stepdefs;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class DemoStepDefs {
	
	@Given("I have two numbers")
	public void i_have_two_numbers() {
	   System.out.println(" i have 2 numbers");
	}

	@When("I add both the numbers")
	public void i_add_both_the_numbers() {
	    System.out.println("adding numbers");
	}

	@Then("I shall see the sum")
	public void i_shall_see_the_sum() {
		System.out.println("seeing the result");
	    
	}


}
