//4.a)
var randomNumber = Math.random();
if (randomNumber > 0.5){
    alert("Greater than 0,5");
}else{
    alert("Lower than 0,5");
}
//4.b)
var age = Math.round((Math.random()*100));
if(age <= 2){
    alert("Bebe");
}else if(age >= 3 && age <= 12){
    alert("Nino");
}else if(age >= 13 && age <= 19){
    alert("Adolescente");
}else if(age >= 20 && age <= 30 ){
    alert("Joven");
}else if(age >= 31 && age <= 60 ){
    alert("Adulto");
}else if(age >= 61 && age <= 75 ){
    alert("Adulto Mayor");
}else{
    alert("Anciano");
}