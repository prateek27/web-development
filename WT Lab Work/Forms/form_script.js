function validateForm(){
	var fname = document.forms["reg_form"]["fname"].value;
	var lname = document.forms["reg_form"]["lname"].value;
	var email = document.forms["reg_form"]["email"].value;
	var text="";
	if(fname == null || fname =="" ){
		text += " Enter the first name ";
	}
	if(lname==null||lname==""){
		text+="\n Enter the last name";
	}
	if(email==null||email==""){
		text+="\n Enter the EMAIL";
	}
	if(text!=""){
	alert(text);
	}
}