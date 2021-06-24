//Muhammad's file 
const submit = document.getElementById("submit-info")
const username = document.getElementById("username")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")

const warning = document.getElementById("warning")
//Once the submit button is pressed this code runs
submit.addEventListener("click", () => {
  var valid = true
  //If the confirm-password doesnt match display warning message
  console.log("User has submitted checking data")
  if (password.value != confirmPassword.value){
    warning.innerHTML = "Passwords don't match"
    console.error("Passwords do not match")
    return;
  }
  
  //If fields are blank display warning message
  if (username.value == "" || password.value == "" || confirmPassword.value == ""){
    warning.innerHTML = "Enter all fields"
    console.error("All fields are not entered")
    return;
  }
  
  //Creates database called userinfo and stores the username and password.
  var db = openDatabase('userinfo', '1.0', 'Test DB', 2 * 1024 * 1024);
  db.transaction(function (tx) { 
    console.log("Selecting all usernames from database")
      tx.executeSql('SELECT * FROM LOGS', [], (tx, results) => { 
      var len = results.rows.length;

      for (i = 0; i < len; i++) {
        if(results.rows.item(i).id == username.value){
          console.error("Username is taken")
          warning.innerHTML = "Username Taken"
          break
        }
      }
    }, null)
  })


  db.transaction(function (tx) { 
    console.log("Signing user up and logging them in")
    tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)'); 
    tx.executeSql('INSERT INTO LOGS (id,log) VALUES (?, ?)', [username.value, password.value]);
    localStorage.setItem("date", new Date())
    sessionStorage.setItem('loggedIn', true); 
  });
  
  submit.href = "index.html"
  submit.click()  
})
