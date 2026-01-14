// 1. Concatena dos cadenas de texto
let myMessage = "Esta es mi cadena"
let anotherMessage = myMessage +" de texto."
console.log(anotherMessage)

// 2. Muestra la longitud de una cadena de texto
console.log(anotherMessage.length)
// 3. Muestra el primer y último carácter de un string
console.log(anotherMessage[0])
console.log(anotherMessage[anotherMessage.length - 1])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(anotherMessage.toUpperCase())
console.log(anotherMessage.toLowerCase())
// 5. Crea una cadena de texto en varias líneas
let variasLineas = `Hola mundo esta es mi cadena
    en multiples lineas`
// 6. Interpola el valor de una variable en un string
let email = "juanjodev@gmail.com"
let name = "juanjo"
let message = `Hola ${name} tu correo es: ${email}`
console.log(message)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(message.replaceAll(" " , "-"))
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(message.includes("juanjo"))
// 9. Comprueba si dos strings son iguales
console.log(name == email)
// 10. Comprueba si dos strings tienen la misma longitud
console.log(message.length == email.length)
