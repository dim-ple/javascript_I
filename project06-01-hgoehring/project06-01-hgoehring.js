"use strict";
/*    Project 06-01
      Project to validate a form used for setting up a new account
      Author: Harrison Goehring
      Date: December 5th, 2022  
*/

let sbmtBtn = document.getElementById("sbmtBtn");
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");

sbmtBtn.addEventListener('click',  function(){
      
      if (pwd.validity.patternMismatch) {
            pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number");
      } else if (pwd.value !== pwd2.value) {
            pwd.setCustomValidity("Your passwords do not match");
      } else {
            pwd.setCustomValidity("");
      }
});


