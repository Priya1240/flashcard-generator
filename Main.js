var ClozeCard = require("./ClozeCard.js");
var BasicCard = require("./BasicCard.js");

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

console.log(firstPresident.front); 

console.log(firstPresident.back); 

console.log("-------------------------")

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");


console.log(firstPresidentCloze.partial); 

console.log(firstPresidentCloze.cloze); 

console.log("-------------------------")


console.log(firstPresidentCloze.fullText);

var brokenCloze = new ClozeCard("This doesn't work", "oops");
