/*    Project 02-02
      Author: Harrison Goehring
      Date: 9/19/2022   
 */

function verifyForm() {
      
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let phone = document.getElementById("phone").value;

      (name && email && phone) ?
            window.alert("Thank you! We'll reply soon!"):
            window.alert("Please fill in all fields");


}

document.getElementById("submit").addEventListener("click", verifyForm);