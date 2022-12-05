/*    Application to calculate total order cost
      Author: Harrison Goehring
      Date: 10/11/22  
*/

let lunchItems = document.getElementsByClassName("lunchItem");

for (let i = 0; i < lunchItems.length; i++) {
      lunchItems[i].addEventListener("click", calcTotal);
}

// function to add values of selected check boxes and display total
function calcTotal() {
      let orderTotal = 0;

      for (let i = 0; i < lunchItems.length; i++) {
            if (lunchItems[i].checked) {
                  orderTotal += Number(lunchItems[i].value);
            }
      }

      document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);

}


 // Function to display a numeric value as a text string in the format $##.## 
function formatCurrency(value) {
      return "$" + value.toFixed(2);
}