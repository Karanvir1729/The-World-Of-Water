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


//Calculates the water goal in Liters based on the months
//Warmer months have larger water amounts while colder has fewer water amounts
if (0 <= month && month <= 2){
  var dailyGoal = random(200, 250)
} else if (5 <= month && month <= 8){
  var dailyGoal = random(275, 350)
} else {
  var dailyGoal = random(225, 275)
}

const meter = document.getElementById("meter")
var waterUsed = 0
meter.style.display = "block"
meter.style.margin = "auto"
meter.high = 0
meter.optimum = 0.33
meter.low = 0.66
meter.max = dailyGoal
meter.value = waterUsed

const leftOption = document.getElementById("leftoption")
const rightOption = document.getElementById("rightoption")

leftOption.style.height = window.innerHeight - 180 + "px"
rightOption.style.height = window.innerHeight - 180 + "px"

leftOption.children[0].style.padding = (window.innerHeight - 180) / 2 - 72 + "px"
rightOption.children[0].style.padding = (window.innerHeight - 180) / 2 - 72 + "px"

const background = document.getElementById("background")
  background.style.width = window.innerWidth
  background.style.height = window.innerHeight - 70 + "px"

const header = document.createElement("h1")
header.innerHTML = "Enter Water Usage"
header.id = "header"

const inputs = document.getElementById("inputs")
  inputs.style.width = "555px"
  inputs.style.margin = "auto"
  inputs.style.position = "relative"
  inputs.style.top = window.innerHeight / 3 + "px"

const waterUsage = document.createElement("input")
  waterUsage.style.fontSize = "25px"
  waterUsage.style.border = "solid 5px blue"

const submit = document.createElement("button")
submit.innerHTML = "submit"
submit.id = "submit"

leftOption.addEventListener("click", () => {
  rightOption.remove()
  leftOption.classList.add("wipeRight")
  setTimeout(() => {
    leftOption.remove()
    background.appendChild(header)
    inputs.appendChild(waterUsage)
    inputs.appendChild(submit)
    goalHeader.remove()
    }, 1000)
})

const form = document.getElementById('activities')
rightOption.addEventListener("click", () => {
  leftOption.remove()
  rightOption.classList.add("wipeLeft")
  setTimeout(() => {
    rightOption.remove()
    goalHeader.remove()
    form.style.visibility = "visible"
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
    dailyGoal = dailyGoal - waterUsage.value
    waterUsed += waterUsage.value
    meter.value = waterUsed
  }
  
})