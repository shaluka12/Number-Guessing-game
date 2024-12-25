let randomNumber = Math.floor((Math.random() * 10) + 1);
console.log(randomNumber);

document.getElementById('guess').addEventListener('click', function() {
    let userGuess = document.getElementById('addNumber').value;
    if (userGuess == randomNumber) {
        alert('Congratulations! You are Win');
    } else if(userGuess<randomNumber){
        alert('Sorry, try again. The correct number is Greater than '+userGuess);
    } else if(userGuess>randomNumber){
        alert('Sorry, try again. The correct number is Less than '+userGuess);
    }
});
