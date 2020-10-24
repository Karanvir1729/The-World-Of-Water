/**
 * This is the class used to create country objects for the map webpage
 * https://washdata.org/data/household#!/
 * 
 * @class
 */
class Country {
/**
 * @constructor
 * @param {string} name - the name of the country
 * @param {number} accessibilityUrban - The percentage of people that have access to water in urban areas
 * @param {number} accessibilityRural - The percentage of people that have access to water in rural areas
 * @param {number} markerX - The x coordinate on the map of the country's marker.
 * @param {number} markerY - The y coordinate on the map of the country's marker.
 */
  constructor(name, accessibilityUrban, accessibilityRural, markerX, markerY){
    this.name = name
    this.accessibilityUrban = accessibilityUrban;
    this.accessibilityRural = accessibilityRural;
    this.markerX = markerX;
    this.markerY = markerY;
    this.displayed = false;
  }

/**
 * This function checks if the mouse is hovering on top of a marker. 
 * @param {integer} mouseX - the x-coordinate of the mouse
 * @param {integer} mouseY - the y-coordinate of the mouse
 * @returns {bool} false if the mouse isn't within a 25x25 box around the marker true if the mouse is.
 */

  checkMouseHover(mouseX, mouseY) {
    if (this.markerX - 5 < mouseX && (this.markerX + 13) > mouseX){
      if (this.markerY - 3 < mouseY && (this.markerY + 23) > mouseY){
        return true
      }
    }
    return false
  }
}
