function login() {
	username = document.getElementById("username").value;
	password = document.getElementById("password").value;
	console.log(username, password);
	window.location.href = "./diseases.html";
}

function register() {
	alert("New user registered");
}

function downloaddata() {
	alert("Downloading data");
}
