//3.a)
var array = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
    'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var newArray = Object.assign([], array)
console.log('Exercise 3.a:', array[4], array[10]);
//3.b)
console.log('Exercise 3.b:', array.sort());
//3.c)
array.unshift('Month');
array.push('Week');
console.log('Exercise 3.c:', array);
//3.d)
array.shift();
array.pop();
console.log('Exercise 3.d:', array);
//3.e)
array.reverse();
console.log('Exercise 3.e:', array);
//3.f)
var oneString = array.join('-');
console.log('Exercise 3.f:', oneString);
//3.g)
var arrayCopy = newArray.slice(4, 11);
console.log('Exercise 3.g:', arrayCopy);