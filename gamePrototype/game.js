/* RULES
- Player must guess a number between a min and max
- Player gets 5 guesses
- Notify player of guesses remaining
- Notify player the correct answer if they lose
- Let the player choose to play again
*/

// VARIABLE DECLARATION

// GAME VALUES
let   min = 1,
      max = 10,
      winningNum = getRandomNum(min, max),
      guessesLeft = 5,
      guessedAlready = [];

// UI ELEMNENTS
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      // message = document.querySelector('.message'),
      listMsg = document.querySelector('#special-message'),
      listGuessed = document.querySelector('#list-item-guessed'),
      resetBtn = document.querySelector('#reset-btn');

// ASSIGN UI MIN & MAX
minNum.textContent = min;
maxNum.textContent = max;

// Listen for Guess
guessBtn.addEventListener('click', function(){
      //e.preventDefault();
      let guess = parseInt(guessInput.value);
      //console.log(guess);
      // Validate
      // VALIDATION not working Monday Morning
      if(isNaN(guess) || guess < min || guess > max){
            setMessage(`Please enter a number between ${min} and ${max}`, 'red');
      }

      // CHECK IF WON
      if(guess === winningNum){
            
            // Disable input
            //guess.guessInput.disabled = true;
            // Change border color
            guessInput.style.borderColor = 'green';
            // Declare won
            //setMessage("you won", 'green');
            setMessage(`${winningNum} is correct, you win!`, 'green');

      } else if(guessesLeft > 1){
            setMessage("try again, " + guessesLeft + " guesses left.", 'blue');
            guessesLeft--;
            guessedAlready.push(guess);

      } else {
            setMessage("Sorry, you didn't win this time", 'blue');
            guessInput.value = "";

      }
});

// PLAY RESET EVENT LISTENER 
// RESET guessesLeft, clear message
// NEED to RESET THE winningNum

resetBtn.addEventListener('click', function(){
      guessesLeft=5;
      setMessage("Game Reset");
      guessInput.value = "";
      

});

// GENERATE COMPUTER"s GUESS
function getRandomNum(min, max){
      return Math.floor(Math.random()*(max-min+1)+min);
    }

// Set Message - buggy, maybe alert, ugh
function setMessage(msg, color){
      listMsg.style.color = color;
      listMsg.textContent = msg;
}

// List what has been guessed - not working
function setGuessed(guessedVal){
      listGuessed.textContent = guessedAlready;
}


 

