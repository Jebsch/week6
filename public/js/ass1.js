"use strict";

const $ = (selector) => document.querySelector(selector);

function showdate(){
document.getElementById("timedisplay").innerHTML= Date(); }

setInterval(() => {  
showdate();
}, 1000);


function validatedashboard() {
  let x = document.forms["Form"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

function validateprofile() {
  let first = document.forms["profileform"]["Firstname"].value;
  let last = document.forms["profileform"]["Lastname"].value;
  let full = Firstname + " " + Lastname;
  let email = document.forms["profileform"]["Emailinput"].value;
  $("email").text(email);
  $("Fullname").text(full);

   }
first.onchange = validateprofile;
last.onchange = validateprofile;
full.onchange = validateprofile;
email.onchange = validateprofile;

var firstname = document.getElementById('firstname').value;
var lastname = document.getElementById('lastname').value;
var fullname = firstname + " " + lastname;
("#fullname").textcontent = fullname;

document.getElementById("ProfileForm").submit() = (evt) => {
  evt.preventDefault(); 
  
};
   var password = document.getElementById("password");
   var confirm_password = document.getElementById("confirm_password");
 
 function validatePassword(event, inputText){
  event.preventDefault
   if(password.value != confirm_password.value) {
     confirm_password.setCustomValidity("Passwords Don't Match");
   } else {
     confirm_password.setCustomValidity('');
   }
 }
 
 password.onchange = validatePassword;
 confirm_password.onkeyup = validatePassword;

 var profileform = document.getElementById("retForm");
 var retOp = document.getElementById("retOp");
 function submitFormReturn(event) {
  profileform.style.display = "none";
    retOp.innerHTML = "<b>Form submit successful</b>";
 }
 

