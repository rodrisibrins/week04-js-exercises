//5.a)
var sportsArray = ["baseball", "football", "basketball", "volleyball", "tennis"];
for(i = 0; i < sportsArray.length; i++){
    alert(sportsArray[i]);
}
//5.b)
for(i = 0; i < sportsArray.length; i++){
    alert(sportsArray[i].charAt().toUpperCase() + sportsArray[i].slice(1));
}
//5.c)
var sentence = "";
for (i = 0; i < sportsArray.length; i++){
    sentence = sentence + " " + sportsArray[i];
}
alert(sentence);
//5.d)
var secondArray = [];
for (i = 0; i < 10; i++){
    secondArray.push(i);
}
console.log(secondArray);