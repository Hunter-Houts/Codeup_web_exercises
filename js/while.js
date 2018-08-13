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

