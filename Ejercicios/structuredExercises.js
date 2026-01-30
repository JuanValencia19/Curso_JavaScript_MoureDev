// 1. Crea un array que almacene cinco animales
let animales = ["perro", "gato", "mono", "leon", "oso"]
// 2. Añade dos más. Uno al principio y otro al final
animales.push("delfin")
animales.unshift("ardilla")

console.log(animales)
// 3. Elimina el que se encuentra en tercera posición
animales.splice(2,1)
console.log(animales)
// 4. Crea un set que almacene cinco libros
let mySet = new Set(["cronicas de narnia", "Harry Potter", "Juego de tronos", "La Biblia", "100 años de soledad"])
// 5. Añade dos más. Uno de ellos repetido
mySet.add("La chica del tren", "La Biblia")
mySet.add("La Biblia") // No lo agrega ya que se encuentra tal cual en el set

console.log(mySet)
// 6. Elimina uno concreto a tu elección
mySet.delete("Harry Potter")
console.log(mySet)
// 7. Crea un mapa que asocie el número del mes a su nombre
let myMap = new Map([[2, "Juanjo"]]);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (myMap.has(5)){
    console.log(myMap)
} else {
    console.log("El numero no existe en el mapa")
}
// 9. Añade al mapa una clave con un array que almacene los meses de verano
let verano = ["Junio", "Julio", "Agosto"];
myMap.set('verano', verano);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let otherArray = [1, 2, "Programacion", "Juan", 70];
let setArray = new Set(otherArray);


let myMap2 = new Map();
myMap2.set('miSet', setArray);

console.log(myMap2)