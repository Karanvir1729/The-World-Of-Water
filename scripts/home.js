//Muhammad's file. Slideshow is indivudial. 
var slideIndex = 0

showSlides()
/**
 * Recursive function that increments the slide index and then displays
 * an image that is
 * linked to that slide index
 */
function showSlides(){
  console.log("show slides function is called")
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    console.log("Making all images invisible")
    slides[i].style.display = "none";  
  }
  
  console.log("Showing the image that is at the current index and incrementing index")
  slides[slideIndex].style.display = "block";
  slideIndex++;

  //Resets the slideindex
  if (slideIndex > slides.length - 1) {
    console.log("Resetting the index to loop back around")
    slideIndex = 0
  }
  console.log("Recalling the function after 2 seconds")
  setTimeout(showSlides, 2000); 
}
