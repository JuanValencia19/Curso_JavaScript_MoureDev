//Operadores

//Operadores Aritméticos

let a = 5 
let b = 10

console.log(a + b) //Suma
console.log(a - b) //Resta
console.log(a * b) //Multiplicación
console.log(a / b) //División
console.log(a % b) //Módulo
console.log(a ** 2) //Exponente

a++ //Incremento
console.log(a)

b-- //Decremento
console.log(b)

//Operadores de Asignación

let myVariable = 7
console.log(myVariable)
myVariable += 3 //myVariable = myVariable + 3
console.log(myVariable)

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2
console.log(myVariable)

//Operadores de Comparación

console.log(a > b) //Mayor que
console.log(a < b) //Menor que
console.log(a >= b) //Mayor o igual que
console.log(a <= b) //Menor o igual que
console.log(a == b) //Igualdad
console.log(a === b) //Igualdad estricta por identidad (tipo y valor)
console.log(a != b) //Desigualdad
console.log(a !== b) //Desigualdad estricta por identidad (tipo y valor)

//truthy values
// Todos los numeros positivos y negativos excepto el 0

//falsy values
// 0, null, undefined, NaN, "", false

//Operadores Lógicos

//and (&&)
console.log(5 > 10 && 15 > 50)
console.log(20 > 10 && 15 > 5) //Si una de las expresiones es falsa, el resultado es falso

//or (||)
console.log(5 > 10 || 15 > 50)
console.log(20 > 10 || 15 > 5) //Si una de las expresiones es verdadera, el resultado es verdadero

//not (!)
console.log(!(5 > 10 && 15 > 50))

//operadores ternarios

isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")