"use strict";
const liElements = [];
for(let li of document.querySelectorAll('li')) {
    let title = li.firstChild;
    liElements.push(title.data);
}
console.log(liElements.length);
console.log(liElements)


