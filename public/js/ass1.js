"use strict";

const $ = (selector) => document.querySelector(selector);

function showdate(){
document.getElementById("timedisplay").innerHTML= Date(); }

setInterval(() => {  
showdate();
}, 1000);


function changetab (evt, tabname){
  var i, tabs, tablinks;

  tabs=document.getElementsByClassName("tabs");
  
    tabs[1].style.display = "none";

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < 1; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabname).style.display = "block";
  evt.currentTarget.className += " active";
}  

function validatedashboard() {
  let x = document.forms["Form"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

function validateprofile() {
  let first = document.forms["myForm"]["Firstname"].value;
  let last = document.forms["myForm"]["Lastname"].value;
  let full = Firstname + " " + Lastname
  $("Fullname").text(full);
   }


const dispenseMoney = (evt) => {

  evt.preventDefault();  
  
  let money = parseInt($("#money").value);

  let isPossible = false;

  if (money >= 5 && money % 5 == 0) {
    isPossible = true;
  }

  if (isPossible) {
    let moneyLeftToDispense = money;

    for (let bill of bills) {
      if (moneyLeftToDispense >= bill) {
        let amountBills = parseInt(moneyLeftToDispense / bill);

        moneyLeftToDispense = moneyLeftToDispense % bill;
        $(`#bill${bill}s`).value = amountBills;
      }
    }
  } else {
    $("#money-error").textContent = "We can't dispense that amount of money";
  }
};

var firstname = document.getElementById('firstname').value;
var lastname = document.getElementById('lastname').value;
var fullname = firstname + " " + lastname;
("#fullname").textcontent = fullname;

document.getElementById("ProfileForm").submit() = (evt) => {
  evt.preventDefault(); 
  
};


const validateTemp = (evt) =>{
  let temps = parseFloat($("#temps").value)
  if((temps%.5)==0){
    $("temp-error").textcontent="";
  }else{
    $("temp-error").textcontent="Temperature should be devisible by 0.5";
  }

 // let re = new RegExp("^\[0-9]{10}")

 // let phonenumber = evt.currentTarget.value;

 // if(re.test(phonenumber)){
 //   $("phone-number-error").textcontent = "";
 // }else{
 //   $("phone-number-error").textcontent = "The phone number should be in formal ##########";  
 //   }
}

document.addEventListener("DOMContentLoaded", () => {

  $("#reset").addEventListener("click", () => {
    $("#money").value = "";
    $("#money-error").textContent = "";

    for (let bill of bills) {
      $(`#bill${bill}s`).value = "";
    }

    $("#money").focus();
  });

  $("#phone-number").addEventListener("input". validatePhoneNumber);

  $("#dispense-button").addEventListener("click", dispenseMoney);

  $("#money").value = 60;

  $("#money").focus();
});
