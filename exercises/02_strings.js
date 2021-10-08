//2.a)
var tenCharacters = 'technology';
var upperWord = tenCharacters.toUpperCase();
console.log('Exercise 2.a:', upperWord);
//2.b)
var characters10 = 'Adaptation';
var subCharacters = characters10.substring(0, 5);
console.log('Exercise 2.b:', subCharacters);
//2.c)
var word10 = 'revolution';
var subChar = word10.substring(7);
console.log('Exercise 2.c:', subChar);
//2.d)
var char10 = 'tELEVISION';
var upSub = char10.substring(0, 1).toUpperCase() + char10.substring(1, 10).toLowerCase();
var result = upSub;
console.log('Exercise 2.d:', result);
//2.e)
var string10 = 'basket ball';
var findSpace = string10.indexOf(' ');
console.log('Exercise 2.e:', findSpace);
//2.f)
var longWords = 'aPPRECIATE lITERATURE';
var modifiedWords = longWords.substring(0, 1).toUpperCase() + longWords.substring(1, 10).toLowerCase() +
    longWords.substring(longWords.indexOf(' '), longWords.indexOf('l')) +
    longWords.substring(11, 12).toUpperCase() + longWords.substring(12, 21).toLowerCase();
console.log('Exercise 2.f:', modifiedWords);