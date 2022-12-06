"use strict";
/*    Project 05-03
      Project to create a table of headings from an article
      Author: Harrison Goehring
      Date: November 15th, 2022
*/

let sourceDoc = document.getElementById("source_doc");
let tableDoc = document.getElementById("tableoc");
let headingCount = 1;
const heading = "H2";

for (let n = sourceDoc.firstElementChild; n != null; n = n.nextElementSibling) {
      if (n.nodeName === heading) {
          
          let anchor = document.createElement("a");
          anchor.name = "doclink" + headingCount;
          n.insertBefore(anchor, n.firstElementChild);
          
          let listItem = document.createElement("li");
          let link = document.createElement("a");
          listItem.appendChild(link);
          link.textContent = n.textContent;
          link.href = "#doclink" + headingCount;
          tableDoc.appendChild(listItem);

          headingCount++;
      }
}