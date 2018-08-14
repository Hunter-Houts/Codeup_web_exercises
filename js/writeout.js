function writeout(input) {
    if (typeof input === "number") {
        input = input.toString();
    }
    for (var i = 0; i < input.length; i++) {
        if (typeof input[i] === 'number') {
            console.log(input[i]);
        } else  {
            for (var j = 0; j < input[i].length; j++) {
                console.log(input[i][j]);
            }
        }
    }
}
var things = ["Thing1","Thing2","Thing3","Thing4","Thing5","Thing6","Thing7", 5, 6, 7, 8, [1,2,3,4]];

writeout(things);
