//Muhammad's file 
/**
 * @class
 * This is the class for making charity objects
 *
 */
class Charity {
  /**
   * @constructor
   * This is the constructor function of charity objects
   * 
   * @param {HTML element} infoBox - The HTML element that hold the charity information
   * @param {HTML element} image - The image of the charity's logo that opens up the infobox
   * @param {HTML element} close - The close button element that will close the infobox
   */
  constructor(infoBox, image, close){
    //Recieves in html elements and then on clicking them
    //they display an infobox with the charity information
    image.onclick = function(){
      console.log("Displaying Infobox")
      infoBox.style.display = "block"
    }

    //When the close button is clicked it will close the infobox.
    close.onclick = function(){
      console.log("Removing InfoBox")
      infoBox.style.display = "none"
    }
  }
}
