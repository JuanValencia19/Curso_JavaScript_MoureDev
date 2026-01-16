// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "Juan";

if (nombre == "Juan"){
    console.log("Es correcto")
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let contra = "holamundo"
let aut = ""
if (aut == contra) {
    console.log("La contraseña coincide. Acceso concedido")
}
else {
    console.log("La contraseña no coincide. Acceso denegado")
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let num1 = 3
if (num1 > 0) {
    console.log("El numero es positivo y mayor que 0")
}
else if (num1 < 0){
    console.log("El numero es negativo y es menor que 0")
}
else {
    console.log("El numero es 0")
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edadIngresada = 10
let edadRestante = 18 - edadIngresada
if (edadIngresada >= 18){
    console.log("la persona puede votar")
} 
else {
    console.log(`Eres menor de edad. Te faltan ${edadRestante} anos para poder votar`)
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let age = 18
let mayorEdad = (age >= 18) ? "Eres adulto" : "Eres menor de edad"
console.log(mayorEdad)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mesEst = 2
if (mesEst == 12 || mesEst == 1 || mesEst==2){
    console.log("La estacion del ano es: Invierno")
}
else if (mesEst == 3 || mesEst == 4 || mesEst == 5){
    console.log("La estacion del ano es: Primavera")
}
else if(mesEst == 6 || mesEst == 7 || mesEst == 8){
    console.log("La estacion del ano es: Verano")
}
else if(mesEst == 9 || mesEst == 10 || mesEst == 11){
    console.log("La estacion del ano es: Otoño")
}
else {
    console.log("Mes invalido")
}
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
mesEst = 3
if (mesEst == 1 || mesEst == 3 || mesEst == 5 || mesEst == 7 || mesEst == 8 || mesEst == 10 || mesEst == 12){
    console.log("El mes contiene 31 dias")
}
else if (mesEst == 4 || mesEst == 6 || mesEst == 9 || mesEst == 11){
    console.log("El mes contiene 30 dias")
}
else if (mesEst == 2){
    console.log("El mes es febrero contiene 28 dias, si el años es bisiesto contiene 29")
}
else {
    console.log("Mes invalido")
}
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let message = "en"
switch (message){
        case "es": 
            console.log("Hola este es un saludo en español")
            break;
        case "en":
            console.log("This is a greeting in English")
            break;
        case "fr":
            console.log("Saludo en francés")
            break;
        default: 
            console.log("Selección de idioma incorrecto")
    }
// 9. Usa un switch para hacer de nuevo el ejercicio 6
let mes = 1
switch (mes) {
case 1:
case 12:
case 2:
    console.log("La estacion del ano es: Invierno")
    break;
case 3:
case 4:
case 5:
    console.log("La estacion del ano es: Primavera")
    break;
case 6:
case 7:
case 8:
    console.log("La estacion del ano es: Verano")
    break;
case 9:
case 10:
case 11:
    console.log("La estacion del ano es: Otoño")
    break;
}
// 10. Usa un switch para hacer de nuevo el ejercicio 7
mesEst = 3
switch (mesEst) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        console.log("El mes contiene 31 días")
        break;
    case 4: case 6: case 9: case 11:
        console.log("El mes contiene 30 días")
        break;
    case 2:
        console.log("El mes es febrero contiene 28 días, si el año es bisiesto contiene 29")
        break;
    default:
        console.log("Mes inválido")
}