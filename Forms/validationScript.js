let form = document.getElementById('myForm'); 
form.addEventListener('submit', formCheck)
// JavaScript code for form validation
function formCheck (event){
  let fieldInput = document.getElementById('inputField').value;
    if (fieldInput == ""){
        Nosubmit(event);
      }
    else {
      valueValidation(fieldInput, event);
      }
     }
// Prevent form from submitting
function Nosubmit (event){
  event.preventDefault();
}
// Retrieve the input field value
let fieldInput = document.getElementById('inputField').value;
// Regular expression pattern for alphanumeric input
let alphanumeric = /^[a-zA-Z0-9]+$/;
// Check if the input value matches the pattern
function valueValidation (fieldInput, event) {
  let val = fieldInput;
  let alphanumeric = /^[a-zA-Z0-9]+$/;
  let Valid = alphanumeric.test(val);
  if (Valid) {
    inputValid();
  }
  else{
    inputWrong(event);
  }
}
// Valid input: display confirmation and submit the form
function inputValid (){
  alert("Alphanumeric was validated and submitted");
  form.submit();
 }

// Invalid input: display error message
function inputWrong (event){
  alert("Error Non-alphanumeric was used");
  event.preventDefault();
 }