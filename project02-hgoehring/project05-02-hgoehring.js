"use strict";
/*    Project 05-02
      Project to move images between a photo collection and photo list.
      Author: Harrison Goehring
      Date: November 8th, 2022
*/

let images = document.getElementsByTagName("img");
let photoCollection = document.getElementById("photo_collection");
let photoList = document.getElementById("photo_list");

for (let i = 0; i < images.length; i++) {
      images[i].onclick = function () {
           if (this.parentElement.id == "photo_collection") {
                let newItem = document.createElement("li");
                newItem.appendChild(this);
                photoList.append(newItem);  
           } else {
                let oldItem = this.parentElement;
                photoCollection.appendChild(this);
                oldItem.parentElement.removeChild(oldItem);
           }
      };
}
