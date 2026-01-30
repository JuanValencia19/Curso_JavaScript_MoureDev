//Maps

//Declaracion
let myMap = new Map()
console.log(myMap)

//Inicializacion

myMap = new Map([
  ["nombre", "Juan"],
  ["edad", 22],
  ["profesion", "Desarrollador"],
])

console.log(myMap)

//Metodos comunes y propiedades

//set

myMap.set("pais", "España")
myMap.set("nombre", "Brian") // actualiza el valor de la clave "nombre"
console.log(myMap)

//get
console.log(myMap.get("nombre")) // Brian
console.log(myMap.get("edad")) // 22

//has
console.log(myMap.has("profesion")) // true
console.log(myMap.has("ciudad")) // false

//delete
myMap.delete("edad")
console.log(myMap)

//size
console.log("El tamaño del map es: " + myMap.size)

//clear
myMap.clear()
console.log(myMap)