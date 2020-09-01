var AdminUsername = "HuggyDaBuggy";
var AdminPassword = "buggy";

function login() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if (username == AdminUsername && password == AdminPassword) {
		alert("Login successful but am to lazy too finish the code")
	}
	else  if (username == ""){
		alert("Please input a Username")
	}
	else  if (password == ""){
		alert("Please input a Password")
	}
	else {
		alert("Incorrect Username/Password")
	}
}