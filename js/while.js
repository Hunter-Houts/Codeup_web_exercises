var count = 2;

// do {
//     console.log(count);
//     count = count*2;
// }while (count <= 65536);

while (count <= 65536) {
    console.log(count);
    count = count*2;
}

var allCones = Math.floor(Math.random() * 50) + 50;
do {
    console.log("I must sell " + allCones + ".");
    var soldToEach = Math.floor(Math.random() * 5) + 1;
    if (soldToEach < allCones) {
        console.log(soldToEach + " Cones sold!")
        allCones = allCones - soldToEach;
    } else if (allCones === soldToEach){
        console.log("I SOLD THEM ALL!")
        break;
    } else {
        console.log("I can't sell " + soldToEach +" Cones! I only have " + allCones + " Left!");

    }
} while(allCones >= 0);

function showMultiplicationTable(num) {
    for (var i = 0; i <= 10; i++) {
        console.log(num + " x " + i + " = " + num * i);
    }
}



for(var i = 0; i < 10; i++) {
    var randomNum = Math.floor(Math.random() * 180 + 20);
    if (randomNum % 2 === 0) {
        console.log(randomNum + " is even");
    } else {
        console.log(randomNum + " is odd");
    }
}

for(var i = 0; i < 10; i++) {
    i = i.toString();
   console.log(i.repeat(i));
}

for(var i = 100; i > 0;) {
    console.log(i);
    i -= 5;

}
while(true) {
    var userNum = parseInt(prompt("Enter an odd number between 1 and 50"));
    if ((userNum % 2 !== 0) && (typeof(userNum) === "number") && (userNum >= 1) && (userNum < 50)) {
        break;
    }
}

// for(var i = 0; i < 50; i++){
//
//     if (i === 0) {
//         console.log("The number to skip is " + userNum);
//     } else if (i === userNum) {
//         console.log("Yikes! Skipping number: " + userNum);
//         continue;
//     } else if (i % 2 !== 0) {
//         console.log("Here is an odd number: " + i);
//
//     } else {
//         //do nothing
//     }
//
// }
var i = 0;
while (i < 50) {
    if (i === 0) {console.log("The number to skip is " + userNum);}
    i++;
    if (i === userNum) {
        console.log("Yikes! Skipping number: " + userNum);
        continue;
    } else if (i % 2 !== 0) {
        console.log("Here is an odd number: " + i);

    }

}