//Strings
let myName = "Juan"
let greeting ="Hola,  " + myName + "!" //Concatenación
console.log(greeting)

//longitud
console.log(greeting.length)

//acceso a caracteres
console.log(greeting[0])
console.log(greeting[1])

//Metodos comunes de strings
console.log(greeting.toUpperCase()) //Mayusculas
console.log(greeting.toLowerCase()) //Minusculas
console.log(greeting.indexOf("Juan")) //Indice de la primera ocurrencia
console.log(greeting.slice(0, 5)) //Subcadena desde el indice 0 hasta el 5 (no incluido)
console.log(greeting.replace("Juan", "Pedro")) //Reemplaza "Juan" por "Pedro"
console.log(greeting.includes("Hola")) //Verifica si la cadena incluye "Hola"

//Template Literals
console.log(`Hola, ${myName}! Bienvenido a JavaScript.`)

//Interpolacion de valores
let email = "braismoure@mouredev.com"
console.log(`Hola, ${myName}! Tu email es ${email}.`)
