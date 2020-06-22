function IsOtherAssay(e) {
	if (e.value === "other") {
		console.log("isOtherAssay");
		document.getElementById("assayname").disabled = false;
		document.getElementById("manuname").disabled = false;
		document.getElementById("lotnum").disabled = false;
		document.getElementById("expdate").disabled = false;
	} else {
		document.getElementById("assayname").disabled = true;
		document.getElementById("manuname").disabled = true;
		document.getElementById("lotnum").disabled = true;
		document.getElementById("expdate").disabled = true;
	}
}

function IsCondition(e) {
	console.log(e.value);
	if (e.value === "yes") {
		document.getElementById("inputbadcondition").disabled = true;
	} else if (e.value === "no") {
		document.getElementById("inputbadcondition").disabled = false;
	}
}

function validate() {
	document.getElementById("submitbtn").disabled = false;
}

function immunoassay_next() {
	var isYes = document.getElementById("extrayes").checked;
	if (isYes === true) {
		window.location.href = "./extratest.html";
	} else {
		window.location.href = "./statusreport.html";
	}
}
function extratest_next() {
	var isYes = document.getElementById("extrayes").checked;
	if (isYes === true) {
		window.location.href = "./extratest.html";
	} else {
		window.location.href = "./statusreport.html";
	}
}

function submit() {
	window.location.href = "../index.html";
}
