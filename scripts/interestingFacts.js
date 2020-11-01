




for (var i = 0; i < 1000; i++) {      
var image = document.createElement("img");
image.src = 'images/person.png';
image.style.width= "1%"
document.getElementById('numberOfLives').appendChild(image);

}

const stressMap = document.getElementById("contaminatedWater");
const highlight = document.getElementById("highlight")
  highlight.style.left = 648  + "px"
  highlight.style.top = 5779 + "px"
  
  console.log(stressMap.x, stressMap.y)

document.addEventListener('click', event => {
  console.log(event.pageX - 6, event.pageY - 80);
});
