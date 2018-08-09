"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

/* ########################################################################## */
var wantEnterNumber = confirm("Would you like to enter a number?");
// if (wantEnterNumber) {
//     var number = prompt("Enter a number");
// }
// if (number % 2 == 0) {
//         alert("Number is even")
//     } else {
//         alert("Number is odd")
//     }
// alert(parseInt(number) + 100)
// if (number < 0) {
//     alert("Number is negative")
// } else {
//     alert("Number is positive")
// }
var tnumber = prompt("Enter a number")
wantEnterNumber ?  tnumber  : alert("Goodbye")
tnumber % 2 == 0 ? alert("Number is even") : alert("number is odd")
alert("adding 100 to your number equals " + (parseInt(tnumber) + 100));
tnumber < 0 ? alert("Number is negative") : alert("Number is positive")




/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
function analyzeColor(color) {
    color = color.toLowerCase();
    // if (color === "blue") {
    //     return "blue is the color of the sky";
    // } else if (color === "orange") {
    //     return "orange is the color of a pumpkin";
    // } else if (color === "red") {
    //     return "red is the color of strawberries";
    // } else if (color === "yellow") {
    //     return "yellow is the color of the sun";
    // } else if (color === "green") {
    //     return "green is the color of grass";
    // } else if (color === "violet") {
    //     return "violet is the color of a specific flower";
    // } else if (color === "indigo") {
    //     return "indigo is the color of hex code #4b0082";
    // } else {
    //     return "I don't know anything about " + color;
    // }
    // switch(color) {
    //     case "blue":
    //         alert("blue is the color of the sky");
    //         break;
    //     case "orange":
    //         alert("orange is the color of a pumpkin");
    //         break;
    //     case "red":
    //         alert("red is the color of strawberries");
    //         break;
    //     case "yellow":
    //         alert("yellow is the color of the sun");
    //         break;
    //     case "green":
    //         alert("green is the color of grass");
    //         break;
    //     case "violet":
    //         alert("violet is the color of a specific flower");
    //         break;
    //     case "indigo":
    //         alert("indigo is the color of hex code #4b0082");
    //         break;
    //     default:
    //         alert("I don't know anything about " + color);
    //         break;
    // }
    color === "blue" ? alert("blue is the color of the sky") : color === "orange" ? alert("orange is the color of a pumpkin") : color === "red" ? alert("red is the color of strawberries") : color === "yellow" ? alert("yellow is the color of the sun") : color === "green" ? alert("Green is the color of grass") : color === "violet" ? alert("violet is a color of a specific flower") : color === "indigo" ? alert("indigo has the hex value of #4b00082") : alert("I don't know anything about " + color)
}
console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var enterColor = prompt("Please enter a color");
analyzeColor(enterColor);
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber, total) {
    luckyNumber = parseInt(luckyNumber);
    total = parseFloat(total);
    if (luckyNumber === 1) {
        luckyNumber = .1;
    } else if (luckyNumber === 2) {
        luckyNumber = .25;
    } else if (luckyNumber === 3) {
        luckyNumber = .35;
    } else if (luckyNumber === 4) {
        luckyNumber = .5;
    } else if (luckyNumber === 5) {
        luckyNumber = 0;
    } else {
        luckyNumber = 1;
    }
    total = total - (luckyNumber * total);
    return total
}
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var total = prompt("What is your total?");
alert("Your luck number is " + luckyNumber + "!");
alert("Your total before the discount is $" + total);
alert("Your total with discount is $" + calculateTotal(luckyNumber,total));
