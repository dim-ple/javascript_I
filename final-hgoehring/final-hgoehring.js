"use strict";
/*    Final Project 
      Author: Harrison Goehring 
      Date: December 11th, 2022  
*/

// Selection lists in the web form
let brand = document.getElementById("brand");
let shoeStyle = document.getElementById("shoeStyle");
let shoe = document.getElementById("shoe");

// Option elements within the selection lists
let brandOptions = document.querySelectorAll("select#brand option");
let styleOptions = document.querySelectorAll("select#shoeStyle option");
let shoeOptions = document.querySelectorAll("select#shoe option");

// The number of options within each selection list
let brands = brandOptions.length;
let styles = styleOptions.length;
let shoes = shoeOptions.length;

// Form button to generate the text of the selected shoes
let selectShoe = document.getElementById("selectShoe");

// Paragraph containing the text of the selected shoe
let shoeSelected = document.getElementById("shoeSelected");


// Event handler to modify the content of the shoeStyle selection list
// when the brand selection list changes
brand.onchange = function() {
   let brandIndex = brand.selectedIndex;
   let brandCategory = brand.options[brandIndex].text;
   
   if (brandIndex === 0) {
      showAll(shoeStyle);
   } else {
      filterSelect(shoeStyle, brandCategory);
   }  
}

// Event handler to modify the content of the shoes selection list
// when the style selection list changes
shoeStyle.onchange = function() {
   let shoeStyleIndex = shoeStyle.selectedIndex;
   let shoeStyleCategory = shoeStyle.options[shoeStyleIndex].text;
   
   if (shoeStyleIndex === 0) {
      showAll(shoe);
   } else {
      filterSelect(shoe, shoeStyleCategory);
   }     
}

//Function to show all options within the selected list
function showAll(selectList) {
      let options = selectList.options;
      let optionLength = options.length;
      for (let i = 0; i < optionLength; i++) {
            options[i].style.display = "block";
      }
}

// Function to filter the options within a selected list to show only
// those options that match a previously chosen shoe brand or shoe style
function filterSelect(selectList, category) {
      let options = selectList.options;
      let optionLength = options.length;
      for (let i = 0; i < optionLength; i++) {
            if (options[i].className === category) {
                  options[i].style.display = "block";
            } else {
                  options[i].style.display = "none";
            }
      }
}



selectShoe.onclick= () => {
      console.log(brand.options[brand.selectedIndex].text);
      console.log(shoeStyle.options[shoeStyle.selectedIndex].text);
      console.log(shoe.options[shoe.selectedIndex].text);
      document.getElementById("shoeSelected").textContent = `${brand.options[brand.selectedIndex].text} - ${shoeStyle.options[shoeStyle.selectedIndex].text} - ${shoe.options[shoe.selectedIndex].text}`;

}


