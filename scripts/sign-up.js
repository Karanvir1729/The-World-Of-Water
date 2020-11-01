const submit = document.getElementById("submit-info")
const username = document.getElementById("username")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")

const warning = document.getElementById("warning")
submit.addEventListener("click", () => {
  if (password.value != confirmPassword.value){
    warning.innerHTML = "Passwords don't match"
    return;
  }
  if (username.value == "" || password.value == "" || confirmPassword.value == ""){
    warning.innerHTML = "Enter all fields"
    return;
  }
  
  var db = openDatabase('userinfo', '1.0', 'Test DB', 2 * 1024 * 1024);
  db.transaction(function (tx) { 
    tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)'); 
    tx.executeSql('INSERT INTO LOGS (id,log) VALUES (?, ?)', [username.value, password.value]); 
  });  
})