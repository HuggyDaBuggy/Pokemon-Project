var AdminUsername = "HuggyDaBuggy";
var AdminPassword = "buggy";

function login() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if (username == AdminUsername && password == AdminPassword) {
		
	}
	else {
		alert("Incorrect Username/Password")
	}
}