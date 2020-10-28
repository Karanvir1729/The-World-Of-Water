var slideIndex = 0
showSlides()
function showSlides(){
  
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slides[slideIndex].style.display = "block";
  slideIndex++;

  if (slideIndex > slides.length - 1) {
    slideIndex = 0
  }
  setTimeout(showSlides, 2000); 
}