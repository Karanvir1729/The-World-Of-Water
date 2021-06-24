//Karanvir's file 
var buttonIncreaseShower = document.getElementById("clickToIncreaseShower"),countOfShower = 0;

var buttonDecreaseShower= document.getElementById("clickTodecreaseShower"),countOfShower = 0;

var showerCountToDisplay= document.getElementById("currentShowerCount"),countOfShower = 0;

/**
 * This function calculates the users water rating in percentage based on their usage.
 * 
 * @param {number} waterUsage - The amount of water used.
 * @returns {number} - The percent rating between 0-100%
 */
function calculatePercentage(waterUsage){
  if (waterUsage > 1800){
    return Math.max(0, 100 - (waterUsage - 1800) / 25)
  } else if (waterUsage <= 1800){
    return 100
  }
}
/**
 * Increases shower time and adds an image everytime the button is clicked
 */
buttonIncreaseShower.addEventListener("click", () => {
  console.log("increasing shower")
  if (countOfShower<20){
    countOfShower += 1;
    console.log("showerCount: "+countOfShower )

    showerCountToDisplay.innerHTML = countOfShower;
    console.log("Appending an image")    
    var image = document.createElement("img");
    image.src = 'images/showerHose-removebg-preview.png';
    image.style.width= "10%"
    document.getElementById('numberOfShowers').appendChild(image);
  

}});

/**
 * Decreases shower time and removes an image everytime the button is clicked
 */
buttonDecreaseShower.addEventListener("click", () => {
  console.log("decreasing shower")
  if (countOfShower>0){
    countOfShower -= 1;
    console.log("showerCount: "+countOfShower )
    showerCountToDisplay.innerHTML = countOfShower;
    var listOfShowers = document.getElementById("numberOfShowers");  
    console.log("removing an image")    
    listOfShowers.removeChild(listOfShowers.childNodes[0]);       
    
    }
  });




var buttonIncreaseShowerTime = document.getElementById("clickToIncreaseShowerTime"),mins = 0;

var buttonDecreaseShowerTime= document.getElementById("clickToDecreaseShowerTime"),mins = 0;

var showerTimeCountToDisplay= document.getElementById("currentCountShowerTime"),mins = 0;


/**
 * Increases shower time count and adds an image everytime the button is clicked
 */
buttonIncreaseShowerTime.addEventListener("click", () => {
  console.log("increasing shower time")
  if (mins<200){
    mins += 1;
    showerTimeCountToDisplay.innerHTML = mins;
    console.log("increasing shower time")

  var image = document.createElement("img");
  image.src = 'images/clock.jpg';
  image.style.width= "10%"
    console.log("increasing shower time images")

  document.getElementById('numberOfMins').appendChild(image);


  }});
/**
 * Decreases shower time count and removes an image everytime the button is clicked
 */

buttonDecreaseShowerTime.addEventListener("click", () => {
  
  if (mins>0){
  console.log("decreasing shower time")

    mins -= 1;
    console.log("mins: "+ mins )

    showerTimeCountToDisplay.innerHTML = mins;
    var listOfTimeImages = document.getElementById("numberOfMins");  
    console.log("decreasing shower time images")
    
    listOfTimeImages.removeChild(listOfTimeImages.childNodes[0]);       
    
    }
});


//Flush
var buttonIncreaseFlush = document.getElementById("clickToIncreaseFlush"),countOfFlush = 0;

var buttonDecreaseFlush= document.getElementById("clickTodecreaseFlush"),countOfFlush = 0;

var flushCountToDisplay= document.getElementById("currentFlushCount"),countOfFlush = 0;

/**
 * Increases flush count and adds an image everytime the button is clicked
 */
buttonIncreaseFlush.addEventListener("click", () => {
  if (countOfFlush<20){
    console.log("increasing flush ")

    countOfFlush += 1;
    console.log("countOfFlush"+ countOfFlush)

    flushCountToDisplay.innerHTML = countOfFlush;

  var image = document.createElement("img");
  image.src = 'images/flush.jpg';
  image.style.width= "10%"
  console.log("increasing flush images ")
  document.getElementById('numberOfFlushes').appendChild(image);
  

    }});
/**
 * Decreases flush count and adds an image everytime the button is clicked
 */
buttonDecreaseFlush.addEventListener("click", () => {
  if (countOfFlush>0){
    console.log("decreasing flush ")

    countOfFlush -= 1;
    console.log("countOfFlush"+ countOfFlush)

    flushCountToDisplay.innerHTML = countOfFlush;
    var listOfFlush = document.getElementById("numberOfFlushes");  
    console.log("decreasing flush images ")

    listOfFlush.removeChild(listOfFlush.childNodes[0]);       
      
      }
    });


///Laundry
var buttonIncreaseLaundry = document.getElementById("clickToIncreaseLaundry"),countOfLaundry = 0;

var buttonDecreaseLaundry= document.getElementById("clickTodecreaseLaundry"),countOfLaundry = 0;

var laundryCountToDisplay= document.getElementById("currentLaundryCount"),countOfLaundry = 0;
/**
 * Increases laundry count and adds an image everytime the button is clicked
 */
buttonIncreaseLaundry.addEventListener("click", () => {
  if (countOfLaundry<20){
    console.log("increasing laundry ")

    countOfLaundry += 1;
    console.log("countOfLaundry"+ countOfLaundry)

    laundryCountToDisplay.innerHTML = countOfLaundry;

  var image = document.createElement("img");
  image.src = 'images/washingMachine.png';
  image.style.width= "10%"
  console.log("increasing laundry images ")

  document.getElementById('numberOfLaundry').appendChild(image);
  

    }});
/**
 * Decreases laundry count and removes an image everytime the button is clicked
 */
buttonDecreaseLaundry.addEventListener("click", () => {
  if (countOfLaundry>0){
    countOfLaundry--;
    console.log("countOfLaundry"+ countOfLaundry)

    laundryCountToDisplay.innerHTML = countOfLaundry;
    var listOfLaundry = document.getElementById("numberOfLaundry");  
    console.log("decreasing flush images ")

    listOfLaundry.removeChild(listOfLaundry.childNodes[0]);       
  
  }
    });
//

//Baths
var buttonIncreaseBaths = document.getElementById("clickToIncreaseBaths"),countOfBaths = 0;


var buttonDecreaseBaths= document.getElementById("clickTodecreaseBaths"),countOfBaths = 0;

var bathCountToDisplay= document.getElementById("currentBathCount"),countOfBaths = 0;
/**
 * Increases bath count and adds an image everytime the button is clicked
 */
buttonIncreaseBaths.addEventListener("click", () => {
  if (countOfBaths<20){
    console.log("increasing baths")

    countOfBaths += 1;
    console.log("countOfBaths: "+ countOfBaths)

    bathCountToDisplay.innerHTML = countOfBaths;

    var image = document.createElement("img");
    image.src = 'images/bathTubImage.jpg';
    image.style.width= "10%"
    console.log("increasing bath images")

    document.getElementById('numberOfBaths').appendChild(image);


    }});
    
/**
 * Decreases bath count and removes an image everytime the button is clicked
 */
buttonDecreaseBaths.addEventListener("click", () => {
  if (countOfBaths>0){
    console.log("decreasing baths")

    countOfBaths -= 1;
    bathCountToDisplay.innerHTML = countOfBaths;
    var listOfBaths = document.getElementById("numberOfBaths");  
    console.log("decreasing bath images")

    listOfBaths.removeChild(listOfBaths.childNodes[0]);       
  
      }
    }); 
// POOLS 

var rectPool= document.getElementById("rectPool")
var removeRectPool= document.getElementById("rectPoolRemove")
var roundPool= document.getElementById("roundPool")
var removeRoundPool= document.getElementById("roundPoolRemove")
var rectTextBoxId= 0; 
var roundTextBoxId=0; 
/**
 * Adds 2 fields of text inputs everytime the button is clicked (diameter and depth) and gives the inputs an id.
 */
roundPool.addEventListener("click", () => {
  console.log("increasing roundpools")  
  var fieldRoundHeight = document.createElement("input")
  fieldRoundHeight.className = "roundPool"
  fieldRoundHeight.style = "display:block;"
  fieldRoundHeight.id = "inputHeightOfRoundPool" + roundTextBoxId;
  fieldRoundHeight.size="100"
  fieldRoundHeight.placeholder= "Enter height for your round pool (ft): "+ roundTextBoxId
  document.getElementById('roundInputHeight').appendChild(fieldRoundHeight);
 
  var fieldRoundDiameter = document.createElement("input")
  fieldRoundDiameter.className = "roundPool"
  fieldRoundDiameter.style = "display:block;"
  fieldRoundDiameter.id = "inputDiameterOfRoundPool" + roundTextBoxId;
  fieldRoundDiameter.placeholder= "Enter length for your round pool (ft): "+ roundTextBoxId
  fieldRoundDiameter.size="100"
  document.getElementById('diameterOfRoundPool').appendChild(fieldRoundDiameter);
  roundTextBoxId++
})
/**
 * Adds 3 fields of text inputs everytime the button is clicked (width, length and depth) and gives the inputs an id.
 */
rectPool.addEventListener("click", () => {
  console.log("increasing rectpools")  

  var fieldRectHeight = document.createElement("input")
  fieldRectHeight.className = "rectPool"
  fieldRectHeight.style = "display:block;"
  fieldRectHeight.id = "inputHeightOfRectPool" + rectTextBoxId;
  fieldRectHeight.size="100"
  fieldRectHeight.placeholder= "Enter height for your rectangular pool (ft): "+ rectTextBoxId
  document.getElementById('rectInputHeight').appendChild(fieldRectHeight);
 
  var fieldRectLen = document.createElement("input")
  fieldRectLen.className = "rectPool"
  fieldRectLen.style = "display:block;"
  fieldRectLen.id = "inputLenOfRectPool" + rectTextBoxId;
  fieldRectLen.placeholder= "Enter length for your rectangular pool (ft): "+ rectTextBoxId
  fieldRectLen.size="100"
  document.getElementById('rectInputLength').appendChild(fieldRectLen);

  var fieldRectWidth = document.createElement("input")
  fieldRectWidth.className = "rectPool"
  fieldRectWidth.style = "display:block;"
  fieldRectWidth.id = "inputWidthOfRectPool" + rectTextBoxId;
  fieldRectWidth.size="100"
  fieldRectWidth.placeholder= ("Enter width for your rectangular pool (ft): "+ rectTextBoxId)
  document.getElementById('rectInputWidth').appendChild(fieldRectWidth);
  rectTextBoxId += 1;
})
/**
 * Removes 3 fields of text inputs (width, length and depth) on each click if one pool already exists and gives the inputs an id.
 */
removeRectPool.addEventListener("click", () => {
  if (rectTextBoxId>0){
     console.log("decreasing rectpools")  

      var listOfRectInputHeight = document.getElementById("rectInputHeight");    
      listOfRectInputHeight.removeChild(listOfRectInputHeight.childNodes[rectTextBoxId]); 

      var listOfRectInputLen = document.getElementById("rectInputLength");    
      listOfRectInputLen.removeChild(listOfRectInputLen.childNodes[rectTextBoxId]); 

      var listOfRectInputWidth = document.getElementById("rectInputWidth");    
      listOfRectInputWidth.removeChild(listOfRectInputWidth.childNodes[rectTextBoxId]); 

       rectTextBoxId -= 1;
      }
})
/**
 * Removes 2 fields of text inputs everytime the button is clicked (diameter and depth) on each click if one pool already exists and gives the inputs an id.
 */
removeRoundPool.addEventListener("click", () => {
  if (roundTextBoxId>0){
    console.log("decreasing roundpools")  

    var listOfRectInputDiameter = document.getElementById("diameterOfRoundPool");    
    listOfRectInputDiameter.removeChild(listOfRectInputDiameter.childNodes[roundTextBoxId]); 

    var listOfRoundInputHeight = document.getElementById("roundInputHeight");   listOfRoundInputHeight.removeChild(listOfRoundInputHeight.childNodes[roundTextBoxId]);
    roundTextBoxId -= 1;
    }
})

var amountOfWater=0; 
var userIsDone = document.getElementById("done")
var totalWater= 0

var userId= 1
/**
 * When user is done this function process a result based on the inputs 
 */

userIsDone.addEventListener("click", () => {
  
  var userName= document.getElementById("name").value
  console.log("name"+ userName)
  if (userName== ""){
    userName= ("User "+ userId)
  }
  var totalWater=0
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
  totalWater+=showerWater
  console.log("showerWater:"+ showerWater)
  var flushWater= countOfFlush*1.28
  totalWater+= flushWater
  console.log("flush Water:"+ flushWater)
  if (countOfBaths>0){
    var percentOfTub=document.getElementById("percentFilled").value
    if (isNaN(percentOfTub) || percentOfTub<0 ){
      var percentOfTub= 1; 
      document.getElementById("bathError").innerHTML= "Since you did not put an appropriate value we are asuming that you fill the average bath tub completely."
      
    }
    var bathWater= (countOfBaths*percentOfTub)*80 
    console.log(bathWater+"bathWater it is")
    totalWater+=bathWater
    }
  var sinkWaterTime= document.getElementById("timeSinksAreRunning").value
  if (isNaN(sinkWaterTime)|| sinkWaterTime<0){
    document.getElementById("sinkError").innerHTML= "Invalid Input."
  }
  else{ 
    var sinkWater= sinkWaterTime*1.5 
    console.log("sink water: "+ sinkWater)
    totalWater+=sinkWater
  }
  var flushWater= countOfFlush* 6 
  if(document.getElementById('sinkWash').checked) {
    var timeUsed= window.prompt("How long do you take to wash dishes?")
    while (isNaN(timeUsed)|| timeUsed<0){
      timeUsed= window.prompt("Invalid Input. How long do you take to wash dishes?")
    }
    var dishWater= 1.5*timeUsed
    console.log(dishWater+ "DW")
    totalWater+=dishWater; 
    
  }
  if(document.getElementById('dishWasher').checked) {
    var timeUsed= window.prompt("How many cycles does your diswasher use?")
     while (isNaN(timeUsed)|| timeUsed<0){
      timeUsed= window.prompt("Invalid Input. How long do you take to wash dishes? (mins)")
     }
    var dishWater= 6*timeUsed
    totalWater+=dishWater
    console.log(dishWater+ "DW")
  }



  if(document.getElementById('eStarWashingMachine').checked) {
    var waterPerWashLoad= 14;
  }
  else{
    var waterPerWashLoad= 20;
  }
  var laundryWater= countOfLaundry*waterPerWashLoad
  totalWater+=laundryWater
  console.log("laundry:" + laundryWater)
  console.log("totalWater"+totalWater)
  var lawnSize=document.getElementById('sizeOfLawn').value
  console.log(lawnSize)
  if (lawnSize>=0){
    var lawnWater= lawnSize* 0.623
    console.log("lawnWater"+ lawnWater)
    totalWater+=lawnWater
  }
  else if (lawnSize==""){}
  else{ 
    alert("Invalid input for lawn size.")
  }
  console.log("totalWater"+totalWater)
  if(document.getElementById('vegan').checked) {
    totalWater+= 300
    }
  if(document.getElementById('vegetarian').checked) {
    totalWater+= 500
    }
  if(document.getElementById('other').checked) {
    totalWater+= 1200
    }
    console.log(totalWater+ "with diet")

  if (rectTextBoxId>=0) {
    for (i = 0; i < rectTextBoxId; i++){
      
      var depthOfPool= document.getElementById("inputHeightOfRectPool"+i).value
      var lengthOfPool=document.getElementById("inputLenOfRectPool"+i).value
      var widthOfPool= document.getElementById("inputWidthOfRectPool"+ i).value

    
        var volumeOfPool= depthOfPool*lengthOfPool*widthOfPool*7.5
        if (isNaN(volumeOfPool)==false && volumeOfPool>0){
        totalWater+=volumeOfPool
        }
      else{
        alert("Invalid input for rectangular pool: " + i )
      }
  }
  }
  if (roundTextBoxId>=0) {
    for (i = 0; i < roundTextBoxId; i++){
      console.log(document.getElementById("inputHeightOfRoundPool"+i).value+"l")
      var depthOfRoundPool= document.getElementById("inputHeightOfRoundPool"+i).value
      var diameterOfRoundPool=document.getElementById("inputDiameterOfRoundPool"+i).value
      var volumeOfRoundPool= depthOfRoundPool*diameterOfRoundPool*diameterOfRoundPool*5.9
      if (isNaN(volumeOfRoundPool)==false && volumeOfPool>0){
        totalWater+=volumeOfRoundPool
        }
        
      else{
        alert("Invalid input for round pool: " + i)
      }

  }
  }
  console.log(totalWater+",.")

  //results. 
  var newDate= new Date 
  console.log(newDate)
  console.log(userName)
  var resultsDisplay= document.getElementById("resultsOfQuiz")
  var comparision= document.getElementById("comparison")
  var percentValue= 100
  
  var extraUseage= window.prompt("Any extra water usage? (Enter 0 if none)")

  while (isNaN(extraUseage)|| extraUseage<0){
    var extraUseage= window.prompt("Invalid input. Any extra water usage? (Enter 0 if none)")
  }
  if (extraUseage>0){
    totalWater+=parseFloat(extraUseage)
  } 
  totalWater= Math.round(totalWater)

  resultsDisplay.innerHTML=("Results for: "+userName+"<br>"+ "Date: "+ newDate +"<br>"+"Your total water usage is: "+ totalWater+ " gallons"+"<br>"+ "Your water rating is  "+ calculatePercentage(totalWater) + " %")
  console.log(totalWater)

  userId+=1
  }) 
