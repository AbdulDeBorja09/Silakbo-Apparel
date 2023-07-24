// SAMPLE LOGIN
function valdiate (){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var user = "admin";
  var pass = "silakbo123";

  if(username == user && password == pass){
    alert("login succes")
  }else{
    alert("login failed")
  }



}