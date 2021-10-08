//3.a)
var array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
            "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(array[4], array[10]);
//3.b)
console.log(array.sort());
//3.c)
array.unshift("Month");
array.push("Week");
console.log(array);
//3.d)
array.shift();
array.pop();
console.log(array);
//3.e)
array.reverse();
console.log(array);
//3.f)
var oneString = array.join("-");
console.log(oneString);
//3.g)
var array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
            "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var arrayCopy = array.slice(4, 11);
console.log(arrayCopy);