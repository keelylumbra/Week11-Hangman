
var random = require('./game.js');
var lettersInChosenWord = []
var numBlanks = 0


console.log(random.randomWord)



exports.lettersInChosenWord = random.randomWord.toString().split("");
exports.numBlanks = lettersInChosenWord.length;













