"use strict";

var age = 21;

var message = alert("Happy birthday, you are " + ++age + " years old!");

var confirmed = confirm('Are you sure you want to age?');


var userInput = prompt('Please type something: ');
console.log("The user entered: " + userInput);
console.log("Hello form external JavaScript");

alert("Welcome to my Website!");
var favColor = prompt("What is your favorite color?");

alert("Great, " + favColor + " is my favorite color too!");
//Start of part 1 of 4
var littleMermaidDays = prompt("How many days did you rent Little Mermaid for?");

var brotherBearDays = prompt("How many days did you rent Brother Bear for?");

var herculesDays = prompt("How many days did you rent Hercules for?");

var pricePerDay = prompt("How much does it cost per day to rent a movie?");


var totalLittleMermaid =  (littleMermaidDays * pricePerDay);
var totalBrotherBear = (brotherBearDays * pricePerDay);
var totalHercules = (herculesDays * pricePerDay);

var grandTotal = alert("The grand total for all the movies is $" + (totalBrotherBear + totalHercules + totalLittleMermaid) + "." );
//end of part 1 of 4
//start of part 2 of 4
var googlePerHour = prompt("How much is google paying per hour?");
var facebookPerHour = prompt("How much is facebook paying per hour?");
var amazonPerHour = prompt("How much is amazon paying per hour?");
var googleWorked = prompt("How many hours did you work for google this week?");
var facebookWorked = prompt("how many hours did you work for facebook this week?");
var amazonWorked = prompt("How many hours did you work for amazon this week?");
var payment = alert("You will receive $" + ((googlePerHour * googleWorked) + (amazonPerHour * amazonWorked) + (facebookPerHour * facebookWorked)) + " this week.");
//end of part 2 of 4
//start of part 3 of 4
var isClassNotFull = confirm("Is there room in the class?");
var scheduleConflict = confirm("Does this class conflict with your schedule?");
var joinClass = (isClassNotFull && !scheduleConflict);
alert(joinClass ? "You can join this class" : "Sorry, You cannot join this class.");
//end of part 3 of 4
//start of part 4 of 4
var numOfItemsBought = prompt("How many items did you buy?");
var twoItemsBought = (numOfItemsBought > 2);
var offerValid = confirm("The offer is still valid?");
var premiumMember = confirm("Are you a premium member?");

var giveOffer = (offerValid && (twoItemsBought|| premiumMember));
alert(giveOffer ? "You get the offer!" : "You are not approved for the offer");
//end of all sections and exercises.

