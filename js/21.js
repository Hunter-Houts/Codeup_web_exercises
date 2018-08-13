function hitme() {
    return Math.floor((Math.random() * 11)+1)
}
var count = 0;
if (confirm("Do you want to play a game of 21?")) {
    while (count <= 21) {
        if (confirm("Your score is " + count + ". Do you want another card.")) {
            count += hitme();
        } else {
            break;
        }
        count > 21 ? alert("You busted") : alert("Your score is " + count);
    }
}