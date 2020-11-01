var todaysDate = new Date()
var month = todaysDate.getMonth()

function random(start, end){
  end -= start
  return Math.round(Math.random() * end + start)
}

function updateWaterUsage(usage) {
  var waterRemaining = dailyGoal - usage
  return waterRemaining
}

function directBackToOptions(inputs, container){
  while (inputs.childElementCount >= 1){
    inputs.removeChild(inputs.firstChild)
  }
  leftOption.classList.remove("wipeRight")
  container.appendChild(leftOption)
  rightOption.classList.remove("wipeLeft")
  container.appendChild(rightOption)
  if (dailyGoal >= 0){
  goalHeader.innerHTML = "Water remaining " + dailyGoal + " L"} else {
    goalHeader.innerHTML = "Excess Usage " + Math.abs(dailyGoal) + "L"
  }
  container.appendChild(goalHeader)
}

//Calculates the water goal in Liters based on the months
//Warmer months have larger water amounts while colder has fewer water amounts
if (0 <= month && month <= 2){
  var dailyGoal = random(225, 275)
} else if (5 <= month && month <= 8){
  var dailyGoal = random(300, 375)
} else {
  var dailyGoal = random(250, 300)
}

const meter = document.getElementById("meter")
var waterUsed = 0
meter.style.display = "block"
meter.style.margin = "auto"
meter.high = 0.80
meter.optimum = 0.33
meter.low = 0
meter.max = dailyGoal
meter.value = waterUsed

const leftOption = document.getElementById("leftoption")
const rightOption = document.getElementById("rightoption")

leftOption.style.height = window.innerHeight - 180 + "px"
rightOption.style.height = window.innerHeight - 180 + "px"

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
  rightOption.classList.add("wipeLeft")
  setTimeout(() => {
    rightOption.remove()
    goalHeader.remove()
    inputs.appendChild(instructions)
    inputs.appendChild(form)
    inputs.appendChild(select)
  }, 1000)
})

const container = document.getElementById("container")
const goalHeader = document.createElement("h2")
goalHeader.style.position = "absolute"
goalHeader.style.top = window.innerHeight / 8 + 110  + "px"
goalHeader.style.left = window.innerWidth / 2 - 140 + 'px'
goalHeader.style.fontSize = "36px"
goalHeader.innerHTML = "Water Goal " + dailyGoal + "L"
goalHeader.classList.add("center")

container.appendChild(goalHeader)

submit.addEventListener("click", () => {
  if (waterUsage.value < 0 || isNaN(waterUsage.value)){
    alert("Enter only positive integers")
    return 
  }
  if (confirm("Are you sure that you used " + waterUsage.value + "L of water.\nOnce this is entered it cannot be changed")){
    dailyGoal = updateWaterUsage(Number(waterUsage.value))
    waterUsed += Number(waterUsage.value)
    meter.value = waterUsed
  }
  directBackToOptions(inputs, container)
})

select.addEventListener("click", () => {
  var checked = null;
  for (var i = 0; i < form.length; i++){
    if(form[i].checked){
      checked = i
    }  
  }

  switch (checked){
    case 0:
      var duration = prompt("Did you know the average shower lasts 8 minutes and uses 10 liters per minute. Please enter the duration of the shower")
      while (duration < 0 || isNaN(duration)){
        duration = prompt("Please enter a positive integer")
      }
      var usage = 10*Number(duration)
      if (!confirm("You used " + usage + "L of water. \nOnce this is enterd it cannot be changed")){
        return
      }
      break;
    case 1:
      alert("Car washes recycle water to save on water consumption however, using rain water can prove to be a better solution to a car wash. The average car wash uses about 60L per vehicle")
      var usage = 60
      if (!confirm("You used 60L of water.\nOnce this is enterd it cannot be changed")){
        return
      }
      break;
    case 2:
      var glasses = prompt("The average glass of water contains about 250ml of water and drinking water accounts for about 1% of the water used per houshold. On average humans should drink up to 8 glasses of water each day. Enter the number of glasses drank.")
      while (glasses < 0 || isNaN(glasses)){
        glasses = prompt("Please enter a positive integer")
      }
      var usage = 0.25 * Number(glasses)
      if (!confirm("You used " + usage + "L of water. \nOnce this is enterd it cannot be changed")){
        return
      }
      break;
    case 3:
      var frequency = prompt("When you flush the toilet it uses approximately 5L of water. Enter the number of times you flushed")
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
      while (duration < 0 || isNaN(duration)){
        duration = prompt("Please enter a positive integer")
      }
      var usage = 3 * Number(duration)
      if (!confirm("You used " + usage + "L of water. \nOnce this is enterd it cannot be changed")){
        return
      }
      break;
    case 5:
      var loads = prompt("Water machines use water similar to car washes. On average they use 64L of water per load. Enter the number of loads of laundry done")
      while (loads < 0 || isNaN(loads)){
        loads = prompt("Please enter a positive integer")
      }
      var usage = 64 * Number(loads)
      if (!confirm("You used " + usage + "L of water. \nOnce this is enterd it cannot be changed")){
        return
      }
      break;
  }
  
  dailyGoal = updateWaterUsage(usage)
  waterUsed += usage
  localStorage.setItem("usage", waterUsed)
  meter.value = waterUsed

  directBackToOptions(inputs, container)
})
