
var random = require('./game.js');
var lettersInChosenWord = []



// console.log(random.randomWord)


exports.randomWord = random.randomWord.toLowerCase()
exports.lettersInChosenWord = exports.randomWord.split("");
exports.numBlanks = exports.lettersInChosenWord.length
















