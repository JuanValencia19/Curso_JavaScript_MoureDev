// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let myArray = [1,2,3,4,5]
let [myValue0, myValue1] = myArray
console.log(myValue0)
console.log(myValue1)
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let myArray1 = [1,2,3,4,5];
let [myValor0, myValor1, myValor2 = 0] = myArray1;

console.log(myValor0);
console.log(myValor1);
console.log(myValor2);
// 3. Usa desestructuración para extraer dos propiedades de un objeto
let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

let {nombre, edad, ciudad} = persona
console.log(nombre)
console.log(edad)
// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let {nombre: name, edad: age, ciudad: city} = persona
console.log(name)
console.log(age)
console.log(city)
// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let person3 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function () {
        console.log("La persona camina.")
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function () {
            console.log(`La persona de ${this.age} años de experiencia trabaja.`)
        }
    }
}
let {name: nombre1, job: { name: jobName, exp: jobExp}} = person3
console.log(jobName)
console.log(jobExp)
// 6. Usa propagación para combinar dos arrays en uno nuevo
let num = [-1,-2,-3,-4,-5]
let num1 = [0,1,2,3,4,5]
let propagacion = [...num,...num1]
console.log(propagacion)
// 7. Usa propagación para crear una copia de un array
propagacion = [...num1];
console.log(propagacion); // mostrar la copia en lugar del array original
// 8. Usa propagación para combinar dos objetos en uno nuevo
propagacion = {...persona, ...person3}
console.log(propagacion)
// 9. Usa propagación para crear una copia de un objeto
propagacion = {...persona}
console.log(propagacion)
// 10. Combina desestructuración y propagación
// Propagacion
let myArray3 = [...myArray, 7, 8]
let myArray4 = [...myArray, ...myArray1]
console.log(myArray4)

//Desestructuracion
let [miValor, miValor1, miValor2] = myArray4
console.log(miValor)
console.log(miValor1)