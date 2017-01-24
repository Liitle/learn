
function emailValidation(){

	var email= document.getElementById("email").value;
	//email_regex = /^([a-zA-Z0-9_\-\.])@([a-zA-Z0-9_\-\.])\.([com|net])$/; 
	email_regex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	if(email_regex.test(email)){
		var email_message = "The email address is valid";
	}
	else{
		var email_message = "The email address is not valid";
	}

	document.getElementById("email_message").innerHTML = email_message;
}

