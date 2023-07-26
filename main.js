// SAMPLE LOGIN
function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "admin" && password === "silakbo123") {
    window.location.href = "index.html#sectionhome";
  } else {
    swal({
      title: "Login Failed!",
      text: "Invalid Login Credentials",
      icon: "error",
      button: "Continue",
    });
  }
}

function placeorder() {
  var name = document.getElementById("name");
  var contact = document.getElementById("contact");
  var house = document.getElementById("house");
  var state = document.getElementById("state");
  var postal = document.getElementById("postal");
  var country = document.getElementById("country");

  if (
    name == "" ||
    contact == "" ||
    house == "" ||
    state == "" ||
    postal == "" ||
    country == ""
  ) {
    swal({
      title: "successs",
      text: "order places",
      icon: "success",
      button: "Continue",
    });
  } else {
    swal({
      title: "Order Success",
      text: "Thank you for shopping!",
      icon: "success",
      button: "Continue",
    });
  }
}
