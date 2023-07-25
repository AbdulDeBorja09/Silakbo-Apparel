// SAMPLE LOGIN
function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "admin" && password === "silakbo123") {
    window.location.href = "index.html#sectionhome";
  } else {
    Swal.fire('Any fool can use a computer')
  }
}
