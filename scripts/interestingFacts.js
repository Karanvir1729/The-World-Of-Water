//Karanvir's prblem's and Muhammad's solutions 
//Loops 1000 times to create 1000 images of the person icon
//representing the amount of lifetimes spent towards collecting water
for (var i = 0; i < 1000; i++) {      
  var image = document.createElement("img");
  image.src = 'images/person.png';
  image.style.width= "1%"
  document.getElementById('numberOfLives').appendChild(image);
  console.log("appending image: "+ i)

}
console.clear()
