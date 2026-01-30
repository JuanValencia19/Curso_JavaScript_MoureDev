//set

//Declaracion

let mySet = new Set()
console.log(mySet)

mySet = new Set([1, "Dev", 3, 4, 5])

//Metodos comunes

//add y delete
mySet.add(6)
console.log(mySet)

mySet.delete(3)
console.log(mySet)

//has
console.log(mySet.has(4)) // true
console.log(mySet.has(10)) // false

//size
console.log("El tamaño del set es: " + mySet.size)

//convertir set a array
let myArray = Array.from(mySet)
console.log(myArray)