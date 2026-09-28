import { questionsList, answersList } from "./content.js";

var mainContent = document.getElementById("mainContent").childNodes;

var h2List = [];
var pList = [];

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

mainContent.forEach(item => {
    if(item.nodeName == "H2") {
        h2List.push(item);
    }
    if(item.nodeName == "P") {
        pList.push(item)
    }
})

let i = 0;

async function myFunc() {    
    while(i !== questionsList.length) {
        h2List[i].textContent = questionsList[i];
        pList[i].textContent = answersList[i];
        await wait(1)
        h2List[i].style.opacity = 1;
        pList[i].style.opacity = 1;
        i += 1;

        await wait(500);
    }
}

myFunc();