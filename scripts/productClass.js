//karanvir's file 
/**
 * This class describes the attributes of a Product 
 * Exported to other files
 * @class
 */
 class Product {
 
  /**
   * This function is the constructor function for a product.
   * @constructor
   * @param {string} name - This is the name of the product.
   * @param {float} price - This is the price of the product (will be a public instance variable)
   *  @param {string} link - This is the link to the webpage of the product (will be a public instance variable)
   * @param {string} charity - The charity associated with the company. 
   * @param {int} moneyDonation - 1 if money is donated and any other numbers if items are donated. 
   
   */
  constructor( name, price, link, charity, moneyDonation) {
    console.log("initializing product class variables")
    this.name = name;
    this.price = price;
    this.link= link;
    this.charity= charity; 
    this.moneyDonation= moneyDonation;
     console.log("Initialized " + this.name + ", " + this.price + ", " + this.link + ", " + this.charity + ", " +  this.moneyDonation )
  }
  /**
   * Used to return a message that tells the user how the company donates to the charity. 
   * @returns{string}: string message if item is donated 
   * @returns{string}: string message if money is donated 
   */
  typeOfDonation(){
    if (this.moneyDonation== 0){
      console.log("moneyDonation is 0. i.e money item donation ")
      return "This organization donates items directly to those in need"
    } 

    else{
      console.log("moneyDonation is not 0. i.e item money")

      return "This organization donates an amount form your payment to those in need"
    }
    
  }
 
}
