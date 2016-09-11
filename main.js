var inquirer = require('inquirer');
var gameWord = require('./letter.js');



function startGame(){

blanksAndSuccesses = []; 
wrongGuesses = []; 


	for (var i=0; i <gameWord.numBlanks; i++){
		blanksAndSuccesses.push("-");

	}



console.log (blanksAndSuccesses)
console.log (gameWord.random.randomWord)



}

startGame ()


// function checkLetters(letter) {

// 	var letterInWord = false; // this boolean will be toggled based on whether or not a user letter is found anywhere in the word

// 	// Check if a leter exists inside the array at all.
// 	for (var i=0; i<numBlanks; i++) {
// 		if(gameWord.random.randomWord[i] == letter) {
// 			letterInWord = true; // if the letter exists then toggle this boolean to true. This will be used in the next step. 
//  		}
// 	}

// 	// If the letter exists somewhere in the word, then figure out exactly where (which indices)
// 	if(letterInWord){
	
// 		// loop through the word 
// 		for (var i=0; i<numBlanks; i++){

// 			// Populate the blanksAndSuccesses with every instance of the letter.
// 			if(chosenWord[i] == letter) {
// 				blanksAndSuccesses[i] = letter; // here we set the specific space in blanks and letter equal to the letter when there is a match.
// 			}
// 		}
// 		console.log(blanksAndSuccesses); // logging for testing
// 	}
// 	// If the letter doesn't exist at all...
// 	else {
// 		wrongGuesses.push(letter); // then we add the letter to the list of wrong letters
// 		numGuesses--; // and we subtract one of the guesses
// 	}
// }

// // roundComplete() function
// // Here we will have all of the code that needs to be run after each guess is made
// function roundComplete(){

// 	// First, log an initial status update in the console telling us how many wins, losses, and guesses are left
// 	console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

// 	// Update the HTML to reflect the new number of guesses. Also update the correct guesses.
// 	document.getElementById("guessesLeft").innerHTML= numGuesses;
// 	document.getElementById("wordblanks").innerHTML = blanksAndSuccesses.join(" "); // This will print the array of guesses and blanks onto the page
// 	document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(" "); // this will print the wrong guesses onto the page.

// 	// If we have gotten all the letters to match the solution... 
// 	if (lettersInChosenWord.toString() == blanksAndSuccesses.toString()) {
// 		winCounter++; // add to the win counter 
// 		alert("You win!"); // give the user an alert

// 		// Update the win counter in the HTML
// 		document.getElementById("winCounter").innerHTML= winCounter;
// 		startGame(); // restart the game 
// 	}

// 	// If we've run out of guesses
// 	else if(numGuesses == 0) {
// 		lossCounter++; 	 // add to the loss counter 
// 		alert("You lose"); // give the user an alert

// 		// Update the loss counter in the HTML
// 		document.getElementById("lossCounter").innerHTML= lossCounter; 
// 		startGame(); // restart the game
// 	}

// }

// // MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// // ==================================================================================================

// // Starts the Game by running the startGame() function
// startGame();


// }



// console.log (gameWord.lettersInChosenWord);
// console.log(gameWord.numBlanks)