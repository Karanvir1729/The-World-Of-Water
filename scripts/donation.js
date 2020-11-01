var charities = []
var events = []

var unicef = {
  infoBox:document.getElementById("unicef"),
  close:document.getElementsByClassName("close")[0],
  image:document.getElementById("unicefImage"),
  appear:function(){
    this.infoBox.style.display = "block"
  }
  remove:function(){
    this.infoBox.style.display = "none"
  }
}
charities.push(unicef)

var pureWaterForTheWorld = {
  infoBox:document.getElementById("purewaterfortheworld"),
  close:document.getElementsByClassName("close")[1],
  image:document.getElementById("purewaterfortheworldImage"),
  appear:function(){
    this.infoBox.style.display = "block"
  }
}
charities.push(pureWaterForTheWorld)

var waterForGood = {
  infoBox:document.getElementById("waterForGood"),
  close:document.getElementsByClassName("close")[2],
  image:document.getElementById("waterForGoodImage"),
  appear:function(){
    this.infoBox.style.display = "block"
  }
}
charities.push(waterForGood)

charities[0].appear()
window.onclick = (event) => {
  for(var i in charities){
    if (event.target == charities[i].infoBox){
      charities[i].style.display = "none"
    }

    

    charities[i].close.onclick = function() {
      charities[i].infoBox.style.display = "none"
    }
  }
}
