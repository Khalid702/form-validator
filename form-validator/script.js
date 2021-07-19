const form = document.getElementById('form');
const password1El = document.getElementById('Password1');
const password2El = document.getElementById('Password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

console.log()

let isValid = false;
let passwordsMatch = false;

function validateForm(){
 isValid = form.checkValidity();
 //Style main message for an error
  if(!isValid){
 message.textContent = 'Please fill out all fields';
 message.style.color = 'red';
 messageContainer.style.borderColor ='red';	
 return;
 }
  if(password1El.value === password2El.value){
   passwordsMatch = true;
   password1El.style.borderColor = 'green';
   password2El.style.borderColor = 'green';
  } else{
  	passwordsMatch = false;
  	 message.textContent = 'Make sure passwords match';
     message.style.color = 'red';
     messageContainer.style.borderColor ='red';	
     password1El.style.borderColor = 'red';
     password2El.style.borderColor = 'red';
     return;
  }	
  //validation success
  if(passwordsMatch & isValid){
  	 message.textContent = 'Successfully Registered!';
     message.style.color = 'green';
     messageContainer.style.borderColor ='green';	
  }

}

function storeFormData(){
	const user = {
		name: form.name.value,
		phone: form.phone.value,
		email: form.email.value,
		website: form.website.value,
		password: form.password.value
	}
	console.log(user);
}

function proccessFormData(e){
e.preventDefault();
 //Validate Form
 validateForm();
if(isValid & passwordsMatch){
	storeFormData();
}
 
}

//Event Listener
form.addEventListener('submit',proccessFormData);