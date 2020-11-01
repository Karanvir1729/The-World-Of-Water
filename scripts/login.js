const login = document.getElementById("log-in")
const username = document.getElementById("username")
const password = document.getElementById("password")
const warning = document.getElementById("warning")

var db = openDatabase('userinfo', '1.0', 'Test DB', 2 * 1024 * 1024);

login.addEventListener("click", () => {
  if (username.value == "" || password.value == ""){
    warning.innerHTML = "Enter all fields"
  }

  db.transaction(function (tx) { 
    tx.executeSql('SELECT * FROM LOGS', [], function (tx, results) { 
      var len = results.rows.length; 
      for (i = 0; i < len; i++) {
        if (username.value == results.rows.item(i).id && password.value == results.rows.item(i).log) {
          console.log("Welcome Back " + username.value)
          login.href = "index.html"
          login.click()
          return
        }
      } 
      warning.innerHTML = "Invalid username or password"
    }, null); 
  });
})
