// arrays

//Declaracion

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

myArray = [1]

myArray = [1, 2, 3, 4, 5]
myArray2 = new Array(1, 2, 3, 4, 5)

console.log(myArray)
console.log(myArray2)

myArray = ["Juan", "moure", 3, true]
myArray2 = new Array(1, "moure", false, 3.5)

console.log(myArray)
console.log(myArray2)

//Metodos comunes

myArray = []

//push y pop

myArray.push(1)
myArray.push(2)
myArray.push("Hola")

console.log(myArray)

myArray.pop()

console.log(myArray)

//shift y unshift

myArray.unshift("Primero")
console.log(myArray)

myArray.shift()
console.log(myArray)

//length

console.log("El tamaño del array es: " + myArray.length)

//slice
myArray = [1, 2, 3, 4, 5]
let newArray = myArray.slice(1, 4) // desde el indice 1 hasta el 4 (sin incluir el 4)
console.log(newArray)

//splice
myArray.splice(1, 2) // desde el indice 1 elimina 2 elementos
console.log(myArray)