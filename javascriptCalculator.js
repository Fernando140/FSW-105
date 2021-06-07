const readline = require("readline-sync");

function add(a,b) {
    return a + b;
}

function sub(a,b) {
    return a - b;
}

function mul(a,b) {
    return a * b;
}

function div(a,b) {
    return a / b;
}

var num1 = readline.questionInt("Please enter your first number: ");
var num2 = readline.questionInt("Please enter your second number: ");
var operator = readline.question("Please enter the operation to perform (add, sub, mul, div): ");
var solution;

switch (operator) {
    case "add":
        solution = "The result is " + add(num1,num2);
        break;
    case "sub":
        solution = "The result is " + sub(num1,num2);
        break;
    case "mul":
        solution = "The result is " + mul(num1,num2);
        break;
    case "div":
        solution = "The result is " + div(num1,num2);
        break
    default:
        solution = "Invalid Operation";
}

console.log(solution);