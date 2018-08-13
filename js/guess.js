number = Math.floor(Math.random() * 101);

function guessingGame(numOfguess) {
    guess = 0;
    alert('You get ' + numOfguess + ' guesses!');
    while (guess < numOfguess){
        var user_guess = prompt('Guess a number between 1 and 100');
        guess++;
        if (user_guess < number) {
            alert('Higher');

        } else if (user_guess > number) {
            alert('Lower');
        } else if (user_guess == number) {
            alert('Congrates, the number was ' + number + '!');
            break;
        } else if (guess == number) {
            alert('Sorry you ran out of guesses!');
        } else {
            console.log('Something went wrong');
        }

    }
}
guessingGame(10);