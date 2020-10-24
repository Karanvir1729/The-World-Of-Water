var todaysDate = new Date()
var month = todaysDate.getMonth()

const header = document.getElementById("header")
const goalHeader = document.createElement("h2")

const buttons = document.getElementById("buttons")
const manuallyEnter = document.getElementById("manual")
const inputs = document.getElementById("inputs")

function random(start, end){
  end -= start
  return Math.round(Math.random() * end + start)
}

function updateWaterusage(usage) {
  var waterRemaining = dailyGoal - usage
  return waterRemaining
}
manuallyEnter.addEventListener("click", () => {
  var waterUsage = document.createElement("input")
  waterUsage.placeholder = "Enter in water usage"
  var submit = document.createElement("button")
  submit.innerHTML = "submit"
  inputs.appendChild(waterUsage)
  inputs.appendChild(submit)
  upadteWaterusage(waterUsage.value)
})

//Calculates the water goal in Liters based on the months
//Warmer months have larger water amounts while colder has fewer water amounts
if (0 <= month && month <= 2){
  var dailyGoal = random(200, 250)
} else if (5 <= month && month <= 8){
  var dailyGoal = random(275, 350)
} else {
  var dailyGoal = random(225, 275)
}

goalHeader.innerHTML = "Today's Goal: " + dailyGoal + "L"
header.appendChild(goalHeader)
