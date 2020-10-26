var todaysDate = new Date()
var month = todaysDate.getMonth()
/*
const header = document.getElementById("head")
const goalHeader = document.createElement("h2")
goalHeader.id = "header"

header.style.width = window.innerWidth * 0.75 + "px"
header.style.left = (window.innerWidth / 2) - (window.innerWidth / 2.75) + "px"

const buttons = document.getElementById("buttons")
const manuallyEnter = document.getElementById("manual")
const activity = document.getElementById("activity")


manuallyEnter.style.left = (window.innerWidth / 2) - 220 + "px"
activity.style.left = (window.innerWidth / 2) + 10 + "px"
*/
function random(start, end){
  end -= start
  return Math.round(Math.random() * end + start)
}

function updateWaterUsage(usage) {
  var waterRemaining = dailyGoal - usage
  return waterRemaining
}
/*
window.addEventListener("load", () => {
  document.getElementById("banner").width = window.innerWidth
  document.getElementById("banner").height = window.innerHeight / 3
})
*/


//Calculates the water goal in Liters based on the months
//Warmer months have larger water amounts while colder has fewer water amounts
if (0 <= month && month <= 2){
  var dailyGoal = random(200, 250)
} else if (5 <= month && month <= 8){
  var dailyGoal = random(275, 350)
} else {
  var dailyGoal = random(225, 275)
}

/*
goalHeader.innerHTML = "Today's Goal: " + dailyGoal + "L"
header.appendChild(goalHeader)

manuallyEnter.addEventListener("click", () => {
  
  waterUsage.placeholder = "Enter in water usage"
  

  if (inputs.childElementCount < 1){
    inputs.appendChild(waterUsage)
    inputs.appendChild(submit)
  }
})


submit.addEventListener("click", () => {
  dailyGoal = updateWaterUsage(waterUsage.value)
  console.log(dailyGoal)
})

document.addEventListener("click", event => {
  console.log(event.pageX, event.pageY)
})
*/
const leftOption = document.getElementById("leftoption")
const rightOption = document.getElementById("rightoption")

leftOption.style.height = window.innerHeight - 180 + "px"
rightOption.style.height = window.innerHeight - 180 + "px"

leftOption.children[0].style.padding = (window.innerHeight - 180) / 2 - 72 + "px"
rightOption.children[0].style.padding = (window.innerHeight - 180) / 2 - 72 + "px"

const inputs = document.getElementById("inputs")
  inputs.style.width = "560px"
  inputs.style.margin = "auto"
  inputs.style.border = "solid 1px black"
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
    inputs.appendChild(waterUsage)
    inputs.appendChild(submit)
    
    }, 1000)
})

rightOption.addEventListener("click", () => {
  leftOption.remove()
  rightOption.classList.add("wipeLeft")
  setTimeout(() => {rightOption.remove()}, 1000)
})