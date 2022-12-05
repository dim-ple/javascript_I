"use strict";
/*    Project 05-04
      Project to display footnotes in a popup window
      Author: Harrison Goehring
      Date: November 16th, 2022  
*/

// Node list of phrases that are associated with footnotes
let phrases = document.querySelectorAll("article blockquote dfn");

for (let i = 0; i < phrases.length; i++) {
      phrases[i].onclick = function () {
            
            let quotes = document.createElement("h1");
            quotes.textContent = this.textContent;

            let footnote = document.createElement("p");
            footnote.textContent = footnotes[i];
            footnote.style = "font-style: italic; font-size: 1.2em;"

            let closeButton = document.createElement("input");
            closeButton.type = "button";
            closeButton.value = "Close Footnote";
            closeButton.style = "display: block; margin: 10px auto";

            let popup = window.open("", "footnote", "width=300, height=200, top=100, left=100");

            popup.document.body.style = "background-color: ivory; font-size: 16px; padding: 10px;";

            popup.document.body.appendChild(quotes);
            popup.document.body.appendChild(footnote);
            popup.document.body.appendChild(closeButton);
            
            closeButton.onclick = function() {
                  popup.close();
            }
      }
}