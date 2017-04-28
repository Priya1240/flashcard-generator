var clozer = require("./clozer.json");
var basic = require("./basic.json");
var inquirer = require('inquirer');

var ClozeCard = require("./ClozeCard.js");
var BasicCard = require("./BasicCard.js");
var counter = 0;
var correctAns = 0;

console.log("Welcome to the Flashcard Game!");

function start() {
    correctAns = 0;
    counter = 0;
    
    inquirer.prompt([{
        type: "input",
        name: "game",
        message: "Would you like to play the basic or cloze game?"

    }]).then(function(answers) {
        if (answers.game.toLowerCase() == "basic") {
            AskQuest();
        }
        if (answers.game.toLowerCase() == "cloze") {
            AskCloze();
        }
      
    });
}

start();


var AskQuest = function() {

    inquirer.prompt([{
        type: "input",
        name: 'ask',
        message: basic[counter].front

    }]).then(function(answers) {

        if (answers.ask.toLowerCase() == basic[counter].back.toLowerCase()) {
            console.log("You are correct!");
            correctAns++;
            console.log("-------------------------");

        } else {
            console.log("You are wrong!");
            console.log("-------------------------")
        }

        counter++;

        if (counter < basic.length) {
            AskQuest(counter);
        } else {
            close();
        }

    });


};



var AskCloze = function() {


    inquirer.prompt([{
        type: "input",
        name: 'ask',
        message: clozer[counter].text

    }]).then(function(answers) {

        if (answers.ask.toLowerCase() == clozer[counter].cloze.toLowerCase()) {
            console.log("You are correct!");
            correctAns++;
            console.log("-------------------------");

        } else {
            console.log("You are wrong!");
            console.log("-------------------------")
        }

        counter++;

        if (counter < clozer.length) {
            AskCloze(counter);
        } else {
            close();
        }
    });


};




function close() {

    console.log("You got " + correctAns + " correct!");
    inquirer.prompt({
        type: "confirm",
        name: "playAgain",
        message: "Do you want to play again?"

    }).then(function(end) {

        if (end.playAgain) {
            start();
        } else {
            console.log("Thanks for Playing!");
        }

    });
};
