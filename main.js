var inquirer = require('inquirer');
var gameWord = require('./letter.js');





// blanksAndSuccesses = []; // CRITICAL LINE - here we *reset* the guess and success array at each round. 
// 	wrongGuesses = []; // CRITICAL LINE - here we *reset* the wrong guesses from the previous round.

// 	// Fill up the blanksAndSuccesses list with appropriate number of blanks. This is based on number of letters in solution
// 	for (var i=0; i <numBlanks; i++){
// 		blanksAndSuccesses.push("_");
// 	}




console.log (gameWord.lettersInChosenWord);