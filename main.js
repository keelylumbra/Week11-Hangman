var inquirer = require('inquirer');
var gameWord = require('./letter.js');


var numGuesses = 0
startGame();
guess ();

	


function startGame(){

numGuesses = 9

blanksAndSuccesses = []; 
wrongGuesses = []; 


	for (var i=0; i <gameWord.numBlanks; i++){
		blanksAndSuccesses.push("-");

	}



console.log (blanksAndSuccesses)
// console.log (gameWord.randomWord)


}


function guess () {

inquirer.prompt([
                { type: 'input',
                    name: 'letter',
                    message: 'Give me a letter!'
                }]).then(function(user) { 





var letterInWord = false;

for (var i=0; i<gameWord.numBlanks; i++) {





	// Check if a leter exists inside the array at all.
	

		if(gameWord.lettersInChosenWord[i] == user.letter) {
			letterInWord = true; // if the letter exists then toggle this boolean to true. This will be used in the next step. 
 		}
	

	// If the letter exists somewhere in the word, then figure out exactly where (which indices)
	if(letterInWord === true){
	
		// loop through the word 
		for (var i=0; i<gameWord.numBlanks; i++){

			// Populate the blanksAndSuccesses with every instance of the letter.
			if(gameWord.lettersInChosenWord[i] == user.letter) {
				blanksAndSuccesses[i] = user.letter; // here we set the specific space in blanks and letter equal to the letter when there is a match.

				

			
			}
		}


		
		 // logging for testing
	

	// If the letter doesn't exist at all...
	else {
		wrongGuesses.push(user.letter); // then we add the letter to the list of wrong letters
		// numGuesses--; // and we subtract one of the guesses
		// console.log ("Guesses left: ", numGuesses);
		// console.log(blanksAndSuccesses);

		
		
		}
	
}
}




                	

                	





                	});


            }












function roundComplete(){

					

	// First, log an initial status update in the console telling us how many wins, losses, and guesses are left
	// console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

	
	// If we have gotten all the letters to match the solution... 
	if (gameWord.lettersInChosenWord.toString() == blanksAndSuccesses.toString()) {
		winCounter++; // add to the win counter 
		console.log ("You win!"); // give the user an alert
		numGuesses = 0

		// Update the win counter in the HTML
	}

	// If we've run out of guesses
	else if (numGuesses == 0) {
		lossCounter++; 	 // add to the loss counter 
		console.log ("You lose"); // give the user an alert

		// Update the loss counter in the HTML
	}

	else {
		guess ();
	}



roundComplete();


          
}
	


// console.log (gameWord.lettersIngameWord.randomWord);
// console.log(gameWord.numBlanks)