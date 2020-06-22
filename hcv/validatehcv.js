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
	var hiv1 = document.getElementById("HIV_1").value;
	var hiv2 = document.getElementById("HIV_2").value;
	var hiv3 = document.getElementById("HIV_3").value;
	var hiv4 = document.getElementById("HIV_4").value;
	var hiv5 = document.getElementById("HIV_5").value;
	var hiv6 = document.getElementById("HIV_6").value;
	var hiv7 = document.getElementById("HIV_7").value;
	var hiv8 = document.getElementById("HIV_8").value;
	var lab = document.getElementById("labId").value;
	var arr = [hiv1, hiv2, hiv3, hiv4, hiv5, hiv6, hiv7, hiv8];
	for (var i = 0; i < 8; ++i) {
		if (
			((arr[i] >= 0.0 && arr[i] < 50000.0) ||
				arr[i] == "R" ||
				arr[i] == "NR" ||
				arr[i] == "") &&
			lab != ""
		) {
			continue;
		} else
			alert(
				"Enter only numerical values or R,NR for reactive/non-reactive in given fields. For no entry, put one space.."
			);
		return;
	}
	alert(
		"Entries are valid. Fill the details below and click submit at the bottom."
	);
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
