//Muhammad's file 
//Creates charity objects for each charity
//Each object recieves the image which will be clicked, this close button, as well as the infobox

console.log("Creating charity objects")
var unicef = new Charity(document.getElementById("unicef"), document.getElementById("unicefImage"), document.getElementsByClassName("close")[0])

var pureWaterForTheWorld = new Charity(document.getElementById("purewaterfortheworld"), document.getElementById("purewaterfortheworldImage"), document.getElementsByClassName("close")[1])

var waterForGood = new Charity(document.getElementById("waterForGood"), document.getElementById("waterForGoodImage"), document.getElementsByClassName("close")[2])

var charityWater = new Charity(document.getElementById("charityWater"), document.getElementById("charityWaterImage"), document.getElementsByClassName("close")[3])

var miya = new Charity(document.getElementById("miya"), document.getElementById("miyaImage"), document.getElementsByClassName("close")[4])

var waterorg = new Charity(document.getElementById("waterorg"), document.getElementById("waterorgImage"), document.getElementsByClassName("close")[5])
console.log("Charity objects created")
