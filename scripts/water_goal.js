//Muhammad's file 
var todaysDate = new Date()
console.log(todaysDate+" Date")
var month = todaysDate.getMonth()
console.log(month+" Month")
var dailyGoal = 0
console.log(dailyGoal+" dailyGoal")
var db = openDatabase('userinfo', '1.0', 'Test DB', 2 * 1024 * 1024);
console.log(db+" db")
var username = ""
console.log(username+" dailyGoal")

/**
 * Gives a random whole number between a range.
 * 
 * @param {integer} start - The lower number in the range
 * @param {integer} end - The higher number in the range
 * @returns {integer} - A random number between the specified range
 */
function random(start, end){
  console.log("Random function is called generating random number between " + start + "-" + end)
  end -= start
  return Math.round(Math.random() * end + start)
}

/**
 * Updates the water usage.
 * 
 * @param {integer} usage - The amount of water used
 * @param {integer} dailyGoal - The water daily goal
 * @returns {integer} - The number left over
 */
function updateWaterUsage(dailyGoal, usage) {
  console.log("Update water usage function is called")
  console.log("Updatng " + dailyGoal + "L of water from " + usage + "L usaed")
  var waterRemaining = dailyGoal - usage
  console.log("water remaining: "+ waterRemaining)
  
  return waterRemaining
}

/**
 * Directs the user back to the options after they have entered in their water usage
 * 
 * @param {HTML element} inputs - The inputs in which the user enter the usage
 * @param {HTML element} container - The container in we=hich the options are stored in
 */
function directBackToOptions(inputs, container){
  console.log("Directing user back to the options")
  console.log("Removing current elements")
  while (inputs.childElementCount >= 1){
    console.log(" Input:" + inputs )
    inputs.removeChild(inputs.firstChild)
  }
  leftOption.classList.remove("wipeRight")
  container.appendChild(leftOption)
  rightOption.classList.remove("wipeLeft")
  container.appendChild(rightOption)
  
  console.log("Checking if dailyGoal is maintained")
  if (dailyGoal >= 0){
    console.log("Daily Goal is maintained user is still conserving water")
    goalHeader.innerHTML = "Water Remaining " + dailyGoal + "L"
  } 
  else {
    console.log("User has gone beyond the limit")
    goalHeader.innerHTML = "Excess Usage " + Math.abs(dailyGoal) + "L"
    if (!localStorage.getItem("excessUsage")){
      localStorage.setItem("excessUsage", 1)
      localStorage.setItem("excessUsageDate", new Date())
    } else if (todaysDate.getDay() - new Date(localStorage.getItem("excessUsageDate")).getDay() == 1){
      var days = localStorage.getItem("excessUsage") 
      localStorage.setItem("excessUsage", days+1)
    } else {
      localStorage.setItem("excessUsage", 1)
    }
  }
  
  container.appendChild(goalHeader)
}

/**
 * Calculates the water goal in Liters based on the months
 * Warmer months have larger water amounts while colder has
 * fewer water amounts
 */

function setGoal(){
  console.log("Setting up daily goal")
  var dailyGoal = 0;
  console.log("Checking month to get dailyGoal")
  if (0 <= month && month <= 2){
    dailyGoal = random(225, 275)
  } else if (5 <= month && month <= 8){
    dailyGoal = random(300, 375)
  } else {
    dailyGoal = random(250, 300)
  }
  console.log("Daily Goal of " + dailyGoal + "L generated")
  return dailyGoal
}

const meter = document.getElementById("meter")
  console.log("meter: "+ meter)

var waterUsed = 0
meter.style.display = "block"
meter.style.margin = "auto"
meter.high = 0.80
meter.optimum = 0.33

const container = document.getElementById("container")
console.log("container: "+ container)

const goalHeader = document.createElement("h2")
goalHeader.style.position = "absolute"
goalHeader.style.top = window.innerHeight / 8 + 110  + "px"
goalHeader.style.left = window.innerWidth / 2 - 140 + 'px'
goalHeader.style.fontSize = "36px"
goalHeader.classList.add("center")

dailyGoal = setGoal()
goalHeader.innerHTML = "Water Goal " + dailyGoal + "L"

if(sessionStorage.getItem("loggedIn")){
  if (todaysDate.getDay() - new Date(localStorage.getItem("date")).getDay() > 0 || !localStorage.getItem("dailyGoal")) {
    var excessDays = localStorage.getItem("excessUsage")
    console.log("excessDays: "+ excessDays)
    if (excessDays >= 3){
      console.log("excessDays: "+ excessDays)
      alert("You have gone over the water goal limit 3 days in a row. To make easier for you to complete this goal you get bonus 50L today")
      dailyGoal += 50
    }
    goalHeader.innerHTML = "Water Goal " + dailyGoal + "L"
    meter.max = dailyGoal
    meter.low = 0
    meter.value = 0
    localStorage.setItem("date", new Date())
    localStorage.setItem("dailyGoal", dailyGoal)
    localStorage.setItem("usage", 0)
    
  } else {
    dailyGoal = localStorage.getItem("dailyGoal") - localStorage.getItem("usage")
    console.log("daily goal: "+ dailyGoal)
    if (dailyGoal >= 0){
      console.log("daily goal: "+ dailyGoal)
      goalHeader.innerHTML = "Water Remaining " + dailyGoal + "L" 
      console.log("daily goal: "+ dailyGoal)
    } else {
      goalHeader.innerHTML = "Excess Usage " + Math.abs(dailyGoal) + "L"  
    }
    meter.max = localStorage.getItem("dailyGoal")
    meter.low = 0
    waterUsed = Number(localStorage.getItem("usage"))
    meter.value = waterUsed
  }
}
container.appendChild(goalHeader)

const leftOption = document.getElementById("leftoption")
const rightOption = document.getElementById("rightoption")

leftOption.style.height = window.innerHeight - 180 + "px"
console.log("leftOption: "+ leftOption)
rightOption.style.height = window.innerHeight - 180 + "px"
console.log("rightOption: "+ rightOption)


leftOption.children[0].style.padding = (window.innerHeight - 180) / 2 - 72 + "px"
rightOption.children[0].style.padding = (window.innerHeight - 180) / 2 - 72 + "px"

const header = document.createElement("h1")
header.innerHTML = "Enter Water Usage"
header.id = "header"

const inputs = document.getElementById("inputs")

const waterUsage = document.createElement("input")
  waterUsage.style.fontSize = "25px"
  waterUsage.style.border = "solid 5px blue"
  waterUsage.style.display = "block"
  waterUsage.style.margin = "auto"
  waterUsage.style.position = "relative"
  waterUsage.style.top = "45px"

const submit = document.createElement("button")
submit.innerHTML = "submit"
submit.id = "submit"
submit.style.display = "block"
submit.style.margin = "auto"
submit.style.position = "relative"
submit.style.top = "45px"

const select = document.createElement("button")
select.innerHTML = "select"
select.id = "select"

leftOption.addEventListener("click", () => {
  rightOption.remove()
  console.log("rightOption: "+ rightOption)
  leftOption.classList.add("wipeRight")
  setTimeout(() => {
    leftOption.remove()
    inputs.appendChild(header)
    inputs.appendChild(waterUsage)
    inputs.appendChild(submit)
    inputs.style.display = "block"
    inputs.style.margin = "auto"

    goalHeader.remove()
    
    }, 1000)
})

const newLine = document.createElement("br")
const form = document.createElement('form')
  form.id = "activities"

const showerInput = document.createElement("input")
  showerInput.type = "radio"
  showerInput.name = "activity"
  showerInput.id = "shower"
const showerLabel = document.createElement("label")
  showerLabel.for = "shower"
  showerLabel.innerHTML = "Shower"
form.appendChild(showerInput)
form.appendChild(showerLabel)
form.appendChild(document.createElement("br"))

const carWashInput = document.createElement("input")
  carWashInput.type = "radio"
  carWashInput.name = "activity"
  carWashInput.id = "carWash"
const carWashLabel = document.createElement("label")
  carWashLabel.for = "carWash"
  carWashLabel.innerHTML = "Car Wash"
form.appendChild(carWashInput)
form.appendChild(carWashLabel)
form.appendChild(document.createElement("br"))

const drinkingInput = document.createElement("input")
  drinkingInput.type = "radio"
  drinkingInput.name = "activity"
  drinkingInput.id = "drinking"
const drinkingLabel = document.createElement("label")
  drinkingLabel.for = "drinking"
  drinkingLabel.innerHTML = "Drinking"
form.appendChild(drinkingInput)
form.appendChild(drinkingLabel)
form.appendChild(document.createElement("br"))

const toiletInput = document.createElement("input")
  toiletInput.type = "radio"
  toiletInput.name = "activity"
  toiletInput.id = "toilet"
const toiletLabel = document.createElement("label")
  toiletLabel.for = "toilet"
  toiletLabel.innerHTML = "Toilet"
form.appendChild(toiletInput)
form.appendChild(toiletLabel)
form.appendChild(document.createElement("br"))

const wateringPlantsInput = document.createElement("input")
  wateringPlantsInput.type = "radio"
  wateringPlantsInput.name = "activity"
  wateringPlantsInput.id = "wateringPlants"
const wateringPlantsLabel = document.createElement("label")
  wateringPlantsLabel.for = "wateringPlants"
  wateringPlantsLabel.innerHTML = "Watering Plants"
form.appendChild(wateringPlantsInput)
form.appendChild(wateringPlantsLabel)
form.appendChild(document.createElement("br"))

const laundryInput = document.createElement("input")
  laundryInput.type = "radio"
  laundryInput.name = "activity"
  laundryInput.id = "laundry"
const laundryLabel = document.createElement("label")
  laundryLabel.for = "laundry"
  laundryLabel.innerHTML = "Laundry"
form.appendChild(laundryInput)
form.appendChild(laundryLabel)
form.appendChild(document.createElement("br"))


const instructions = document.createElement("h1")
instructions.innerHTML = "Select the activity and confirm your water usage. Ensure to keep track of your water usage to have sustainable water usage practices and to reduce your water footprint"
rightOption.addEventListener("click", () => {
  leftOption.remove()
  console.log("left Option: "+ leftOption)
  rightOption.classList.add("wipeLeft")
  setTimeout(() => {
    rightOption.remove()
    goalHeader.remove()
    console.log("rightOption: "+ rightOption)
    inputs.appendChild(instructions)
    inputs.appendChild(form)
    inputs.appendChild(select)
  }, 1000)
})

submit.addEventListener("click", () => {
  if (waterUsage.value < 0 || isNaN(waterUsage.value)){
    console.log("waterUseage: "+ waterUseage)
    alert("Enter only positive integers")
    return 
  }
  if (confirm("Are you sure that you used " + waterUsage.value + "L of water.\nOnce this is entered it cannot be changed")){
    dailyGoal = updateWaterUsage(dailyGoal, Number(waterUsage.value))
    waterUsed += Number(waterUsage.value)
    meter.value = waterUsed
    console.log("waterUsed: "+ waterUsed)
    localStorage.setItem("usage", waterUsed)
  }
  directBackToOptions(inputs, container)
})

select.addEventListener("click", () => {
  var checked = null;
  for (var i = 0; i < form.length; i++){
    if(form[i].checked){
      checked = i
      console.log("this is checked:"+ i)
    }  
  }

  switch (checked){
    case 0:
      var duration = prompt("Did you know the average shower lasts 8 minutes and uses 10 liters per minute. Please enter the duration of the shower")
      console.log("duration: "+ duration)
      while (duration < 0 || isNaN(duration)){
        duration = prompt("Please enter a positive integer")
        console.log("duration: "+ duration)

      }
      var usage = 10*Number(duration)
      console.log("usage: "+ usage)
      
      if (!confirm("You used " + usage + "L of water. \nOnce this is enterd it cannot be changed")){
        return
      }
      break;
    case 1:
      alert("Car washes recycle water to save on water consumption however, using rain water can prove to be a better solution to a car wash. The average car wash uses about 60L per vehicle")
      var usage = 60
      console.log("usage: "+ usage)
      if (!confirm("You used 60L of water.\nOnce this is enterd it cannot be changed")){
        return
      }
      break;
    case 2:
      console.log("usage: "+ usage)
      var glasses = prompt("The average glass of water contains about 250ml of water and drinking water accounts for about 1% of the water used per houshold. On average humans should drink up to 8 glasses of water each day. Enter the number of glasses drank.")
      while (glasses < 0 || isNaN(glasses)){
        glasses = prompt("Please enter a positive integer")
      console.log("glasses: "+ glasses)

      }
      var usage = 0.25 * Number(glasses)
      console.log("usage: "+ usage)
      if (!confirm("You used " + usage + "L of water. \nOnce this is enterd it cannot be changed")){
        return
      }
      break;
    case 3:
      var frequency = prompt("When you flush the toilet it uses approximately 5L of water. Enter the number of times you flushed")
      console.log("frequency: "+ frequency)
      
      while (frequency < 0 || isNaN(frequency)){
        frequency = prompt("Please enter a positive integer")
      }
      var usage = 5 * Number(frequency)
      if (!confirm("You used " + usage + "L of water. \nOnce this is enterd it cannot be changed")){
        return
      }
      break;
    case 4:
      var duration = prompt("When watering plants ensure that you are not overwatering them most people are unaware of the water used when watering. On average it takes 3L per minute when watering. Enter the duration of watering plants")
      console.log("duration: "+ duration)

      while (duration < 0 || isNaN(duration)){
        duration = prompt("Please enter a positive integer")
        console.log("duration: "+ duration)

      }
      var usage = 3 * Number(duration)
      console.log("usage: "+ usage)

      if (!confirm("You used " + usage + "L of water. \nOnce this is enterd it cannot be changed")){
        return
      }
      break;
    case 5:
      var loads = prompt("Water machines use water similar to car washes. On average they use 64L of water per load. Enter the number of loads of laundry done")
      console.log("loads: "+ loads)
      
      while (loads < 0 || isNaN(loads)){
        loads = prompt("Please enter a positive integer")
        console.log("loads: "+ loads)

      }
      var usage = 64 * Number(loads)
      if (!confirm("You used " + usage + "L of water. \nOnce this is enterd it cannot be changed")){
        return
      }
      break;
  }
  
  
  dailyGoal = updateWaterUsage(dailyGoal, usage)
  waterUsed += usage
  console.log("dailyGoal: "+ dailyGoal)

  localStorage.setItem("usage", waterUsed)
  
  meter.value = localStorage.getItem("usage")
  console.log(meter.value)
  

  directBackToOptions(inputs, container)
})
