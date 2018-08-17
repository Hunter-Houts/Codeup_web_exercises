"use strict";
while(true) {
    var userNum = parseInt(prompt("Enter an odd number between 1 and 50"));
    if ((userNum % 2 !== 0) && (typeof(userNum) === "number") && (userNum >= 1) && (userNum < 50)) {
        break;
    }
}

for(var i = 0; i < 50; i++){

    if (i === 0) {
        console.log("The number to skip is " + userNum);
    } else if (i === userNum) {
        console.log("Yikes! Skipping number: " + userNum);
        continue;
    } else if (i % 2 !== 0) {
        console.log("Here is an odd number: " + i);

    } else {
        //do nothing
    }

}
// var i = 0;
// while (i < 50) {
//     if (i === 0) {console.log("The number to skip is " + userNum);}
//     i++;
//     if (i === userNum) {
//         console.log("Yikes! Skipping number: " + userNum);
//         continue;
//     } else if (i % 2 !== 0) {
//         console.log("Here is an odd number: " + i);
//
//     }
//