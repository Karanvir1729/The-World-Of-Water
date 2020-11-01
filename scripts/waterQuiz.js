var buttonIncreaseShower = document.getElementById("clickToIncreaseShower"),countOfShower = 0;

var buttonDecreaseShower= document.getElementById("clickTodecreaseShower"),countOfShower = 0;

var showerCountToDisplay= document.getElementById("currentShowerCount"),countOfShower = 0;

buttonIncreaseShower.addEventListener("click", () => {
      if (countOfShower<20){
      countOfShower += 1;
      showerCountToDisplay.innerHTML = countOfShower;

      var image = document.createElement("img");
      image.src = 'images/showerIcon.jpg';
      image.style.width= "10%"
      document.getElementById('numberOfShowers').appendChild(image);
      

    }});

    buttonDecreaseShower.addEventListener("click", () => {
      if (countOfShower>0){
      countOfShower -= 1;
      showerCountToDisplay.innerHTML = countOfShower;
      var listOfShowers = document.getElementById("numberOfShowers");  
      listOfShowers.removeChild(listOfShowers.childNodes[0]);       
      
      }
    });




var buttonIncreaseShowerTime = document.getElementById("clickToIncreaseShowerTime"),mins = 0;

var buttonDecreaseShowerTime= document.getElementById("clickToDecreaseShowerTime"),mins = 0;

var showerTimeCountToDisplay= document.getElementById("currentCountShowerTime"),mins = 0;



      buttonIncreaseShowerTime.addEventListener("click", () => {
      if (mins<20){
      mins += 1;
      showerTimeCountToDisplay.innerHTML = mins;

      var image = document.createElement("img");
      image.src = 'images/person.png';
      image.style.width= "1%"
      document.getElementById('numberOfMins').appendChild(image);
      

    }});

    buttonDecreaseShowerTime.addEventListener("click", () => {
      if (mins>0){
      mins -= 1;
      showerTimeCountToDisplay.innerHTML = mins;
      var listOfTimeImages = document.getElementById("numberOfMins");  
      listOfTimeImages.removeChild(listOfTimeImages.childNodes[0]);       
      
      }
    });


    ///Flush
var buttonIncreaseFlush = document.getElementById("clickToIncreaseFlush"),countOfFlush = 0;

var buttonDecreaseFlush= document.getElementById("clickTodecreaseFlush"),countOfFlush = 0;

var flushCountToDisplay= document.getElementById("currentShowerCount"),countOfFlush = 0;

buttonIncreaseFlush.addEventListener("click", () => {
      if (countOfFlush<20){
      countOfFlush += 1;
      flushCountToDisplay.innerHTML = countOfFlush;

      var image = document.createElement("img");
      image.src = 'images/showerIcon.jpg';
      image.style.width= "10%"
      document.getElementById('numberOfFlushes').appendChild(image);
      

    }});

    buttonDecreaseFlush.addEventListener("click", () => {
      if (countOfFlush>0){
      countOfFlush -= 1;
      flushCountToDisplay.innerHTML = countOfFlush;
      var listOfFlush = document.getElementById("numberOfFlushes");  
      listOfFlush.removeChild(listOfFlush.childNodes[0]);       
      
      }
    });


///Laundry
var buttonIncreaseLaundry = document.getElementById("clickToIncreaseLaundry"),countOfLaundry = 0;

var buttonDecreaseLaundry= document.getElementById("clickTodecreaseLaundry"),countOfLaundry = 0;

var laundryCountToDisplay= document.getElementById("currentShowerCount"),countOfLaundry = 0;

buttonIncreaseLaundry.addEventListener("click", () => {
      if (countOfLaundry<20){
      countOfLaundry += 1;
      laundryCountToDisplay.innerHTML = countOfLaundry;

      var image = document.createElement("img");
      image.src = 'images/showerIcon.jpg';
      image.style.width= "10%"
      document.getElementById('numberOfLaundry').appendChild(image);
      

    }});

//Baths
var buttonIncreaseBaths = document.getElementById("clickToIncreaseBaths"),countOfBaths = 0;


var buttonDecreaseBaths= document.getElementById("clickTodecreaseBaths"),countOfBaths = 0;

var bathCountToDisplay= document.getElementById("currentBathCount"),countOfBaths = 0;

buttonIncreaseBaths.addEventListener("click", () => {
      if (countOfBaths<20){
      countOfBaths += 1;
      bathCountToDisplay.innerHTML = countOfBaths;

      var image = document.createElement("img");
      image.src = 'images/showerIcon.jpg';
      image.style.width= "10%"
      document.getElementById('numberOfBaths').appendChild(image);
      

    }});

    buttonDecreaseBaths.addEventListener("click", () => {
      if (countOfBaths>0){
      countOfBaths -= 1;
      bathCountToDisplay.innerHTML = countOfBaths;
      var listOfBaths = document.getElementById("numberOfBaths");  
      listOfBaths.removeChild(listOfBaths.childNodes[0]);       
      
      }
    }); 


var amountOfWater=0; 
var userIsDone = document.getElementById("done")

userIsDone.addEventListener("click", () => {
  
  var userName= document.getElementById("name").value
  console.log("name"+ userName)
  var showerTypeList= document.getElementsByName("showerType")
  for (var i = 0, length = showerTypeList.length; i < length; i++) {
  if (showerTypeList[i].checked) {
  showerTypeMultiplier= parseFloat(showerTypeList[i].value)
  console.log("multiplier: "+ showerTypeMultiplier)
  break;
  }
  }
  console.log(mins)
  if (mins!=0 && countOfShower!=0){
  var showerWater= (showerTypeMultiplier*mins)/countOfShower
  }
  else{ 
    var showerWater=0; 
  }
  console.log("showerWater:"+ showerWater)
  var flushWater= countOfFlush*1.28
  console.log("flush Water:"+ flushWater)
  
})