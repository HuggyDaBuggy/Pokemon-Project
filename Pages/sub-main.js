function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var AdminUsername = "HuggyDaBuggy";
var AdminPassword = "buggy";

function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == AdminUsername && password == AdminPassword) {
    setCookie("admin", "logged-in", 365);
    window.location.replace("admin.html");
  } else if (username == "") {
    alert("Please input a Username");
  } else if (password == "") {
    alert("Please input a Password");
  } else {
    alert("Incorrect Username/Password");
  }
}

function load() {}
