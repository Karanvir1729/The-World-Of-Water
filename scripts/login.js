//Muhammad's file 
const login = document.getElementById("log-in")
const username = document.getElementById("username")
const password = document.getElementById("password")
const warning = document.getElementById("warning")
const welcome = document.getElementById("welcome")

var dailyWaterGoal = null
var db = openDatabase('userinfo', '1.0', 'Test DB', 2 * 1024 * 1024);

/**
 * Once the login button is clicked the website opens up a database that stores in the username and password
 */
login.addEventListener("click", () => {
  console.log("Login button has been clicked checking entered fields")
  if (username.value == "" || password.value == ""){
    console.error("Empty fields")
    warning.innerHTML = "Enter all fields"
  }

  /**
   * Calls an asyncronous function that opens up a database and checks if the entered information matches an entry
   */
  db.transaction(function (tx) { 
    console.log("Selecting all usernames and passwords from database")
    tx.executeSql('SELECT * FROM LOGS', [], (tx, results) => { 
      var len = results.rows.length;

      //Loops through each username and password and checks if it matches the entered one
      console.log("Checking if entered username and passwords match")
      for (i = 0; i < len; i++) {
        if (username.value == results.rows.item(i).id && password.value == results.rows.item(i).log) {
          console.log("Mathced collecting data and logging user in")
          localStorage.setItem('loggedIn', true);
          welcome.innerHTML = "Welcome Back " + username.value
          welcome.style.top = "0px"
          welcome.style.animation = "animatetop 1s"
          sessionStorage.setItem('loggedIn', true)
          login.href = "index.html"
          login.click()
          return
        }
      } 
      console.error("Incorrect username or password")
      warning.innerHTML = "Invalid username or password"
    }, null); 
  });
})
