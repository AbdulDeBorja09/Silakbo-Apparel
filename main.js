// SAMPLE LOGIN
function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "admin" && password == "silakbo123") {
    alert("login success");
  } else {
    alert("login failed");
  }
}
