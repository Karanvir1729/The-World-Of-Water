const check = document.getElementById('check')

check.addEventListener("click", () => {
  var outputText= "hi"
  var text = document.getElementById('textAfterClick')
  text.innerHTML = "hi"
});




for (var i = 0; i < 1000; i++) {      
var image = document.createElement("img");
image.src = 'images/person.png';
image.style.width= "1%"
document.getElementById('numberOfLives').appendChild(image);

}
