/*    Project 02-01
      Author: Harrison Goehring
      Date: 9/19/2022
 */

function FahrenheitToCelsius(degree) {
      return (degree - 32) / 1.8;
}

function CelsiusToFahrenheit(degree) {
      return degree * 1.8 + 32;
}

document.getElementById("celValue").onchange = function () {
      let cDegree = document.getElementById("celValue").value;
      document.getElementById("fahValue").value = CelsiusToFahrenheit(cDegree);
}

document.getElementById("fahValue").onchange = function () {
      let fDegree = document.getElementById("fahValue").value;
      document.getElementById("celValue").value = FahrenheitToCelsius(fDegree);
}