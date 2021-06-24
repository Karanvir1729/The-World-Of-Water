//assertions of Muhammad's file by Muhammad and assertions of Karanvir's files by Karanvir.  
//Assertion tests to ensure individual units are functioning as intended

var path = window.location.pathname;
var page = path.split("/").pop();
console.log(page)
//Daily Water goal page assertions
if (page == "water_goal.html"){
  //Runs 10 times to ensure proper testing
  for (i = 0; i < 10; i++){
    console.assert(random(0, 10) <= 10 && random(0, 10) >= 0, "Random number not in range")
  }

  console.assert(updateWaterUsage(100, 25) == 75, "Water usage is not updated correctly")

  //Negative number means excess usage
  console.assert(updateWaterUsage(100, 125) == -25, "Water usage is not updated correctly")
} else if (page == "map.html"){
  
  //Map page assertions
  var country = new Country("Canada", 99, 82, 212, 123)
  console.assert(country.name == "Canada", "Country name is not assigned correctly")
  console.assert(country.accessibilityUrban == 99, "Urban accessibity incorrectly assigned")
  console.assert(country.accessibilityRural == 82, "Rural accessibity incorrectly assigned")
  console.assert(country.markerX == 212, "markerX incorrectly assigned")
  console.assert(country.markerY == 123, "markerY incorrectly assigned")
  console.assert(country.displayed == false, "display property incorrectly initialized")

  console.assert(country.checkMouseHover(215, 125) == true, "Hover not correctly calculated")
  console.assert(country.checkMouseHover(1215, 125) == false, "Hover not correctly calculated")
}
else if (page == "products.html"){ 
  var exampleOfProduct = new Product("ExampleOfProduct", 99, "https://repl.it/@Muhammad_Hamza_/The-World-Of-Water#scripts/assertions.js" , "Charity",0)
  console.assert(exampleOfProduct.name == "ExampleOfProduct", "Product name is not assigned correctly")
  console.assert(exampleOfProduct.price == 99, "Product price is not assigned correctly")
  console.assert(exampleOfProduct.link == "https://repl.it/@Muhammad_Hamza_/The-World-Of-Water#scripts/assertions.js" , "Product link is not assigned correctly")
  console.assert(exampleOfProduct.charity == "Charity" , "Product's charity is not assigned correctly")
   console.assert(exampleOfProduct.moneyDonation == 0 , "Product's moneyDonatation is not assigned correctly")
   console.assert(exampleOfProduct.typeOfDonation() == "This organization donates items directly to those in need", "typeOfProduct does not functions as needed")
} else if (page == "waterQuiz"){
  console.assert(calculatePercentage(1800) == 100, "Incorrect calculated percentage")
  console.assert(calculatePercentage(1900) == 96, "Incorrect calculated percentage")
  console.assert(calculatePercentage(19000) == 0, "Incorrect calculated percentage")
  console.assert(calculatePercentage(1500) == 100, "Incorrect calculated percentage")
}
