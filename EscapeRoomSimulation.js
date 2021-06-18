const readline = require("readline-sync");
const name = readline.question("What is your name? ");
var welcomeMessage = "Welcome " + name + ". You have now locked yourself in a room. Find the key to get out."
console.log(welcomeMessage);

var keyAquired = false;
var isAlive = true;

while (isAlive == true) {
    var menuOption = readline.questionInt("Please select an option below:\nEnter 1 to search the hole in the wall\nEnter 2 to search the chest on the night stand\nEnter 3 to open the door\n");
    if(menuOption == 1) {
        console.log("You have placed your hand in the hole and got sucked in by zombies. You are now dead.");
        isAlive = false;
    }
    else if(menuOption == 2 && keyAquired == false) {
        console.log("You opened the chest and found the key! Proceed to the door to escape.");
        keyAquired = true;
    }
    else if(menuOption == 2 && keyAquired == true) {
        console.log("You already have the key. Proceed to the door to escape.");
    }
    else if(menuOption == 3 && keyAquired == false) {
        console.log("You have not found the key yet. Search the room to find the key.");
    }
    else if(menuOption == 3 && keyAquired == true) {
        console.log("You unlocked the door and successfully escaped the room!");
        isAlive = false;
    }
    else {
        console.log("Invalid Option.");
    }
}