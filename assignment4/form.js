//Assignment #4 create a form that inputs a username, email, and password

function check() {
	if(document.getElementsByName('userid')[0].value === "jane1" && document.getElementsByName('password')[0].value ==="12345678") {
		//window.open('form.html');
		alert("Correct");
	} else {
		alert("Incorrect");
	}
}
