"use strict";
/*    Project 06-02
      Project to turn a selection list into a selection of hypertext links
      Author: Harrison Goehring
      Date: December 5th, 2022  
*/


window.addEventListener("load", function(){
      let allSelect = document.querySelectorAll("form#govLinks select")
      for (let i = 0; i < allSelect.length; i++) {
            allSelect[i].onchange = function(evt) {
                  let linkURL = evt.target.value;
                  let newWin = window.open(linkURL);
            }
      }
});