// SAMPLE LOGIN
function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "admin" && password == "silakbo123") {
    window.location.href =
      "https://abduldeborja09.github.io/SilakboApparel/onsite.html";
  } else {
    alert("failed");
  }
}
