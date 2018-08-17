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

