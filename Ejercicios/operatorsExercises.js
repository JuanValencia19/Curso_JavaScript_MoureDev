

// 1. Crea una variable para cada operación aritmética
let suma = console.log(5 + 3) //Suma
let resta = console.log(10 - 4) //Resta
let multi = console.log(5*3) //Multiplicación
let div = console.log(20 / 4) //División
let modulo = console.log(10 % 3) //Módulo
let exponente = console.log(2 ** 3) //Exponente
// 2. Crea una variable para cada tipo de operación de asignación,
let asignacion = 7
asignacion += 3
asignacion -= 4
asignacion *=2
asignacion /= 1
asignacion %= 2
asignacion **= 3
console.log(asignacion)
//    que haga uso de las variables utilizadas para las operaciones aritméticas

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
let comparacion1 = console.log(5 > 3) //Mayor que
let comparacion2 = console.log(3 < 5) //Menor que
let comparacion3 = console.log(5 >= 5) //Mayor o igual que
let comparacion4 = console.log(4 <= 5) //Menor o igual que
let comparacion5 = console.log(5 == 5) //Igualdad
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
let falsa1 = console.log( 3 > 5)
let falsa2 = console.log(5 < 3)
let falsa3 = console.log( 2 >= 5)
let falsa4 = console.log(6 <= 4)
let falsa5 = console.log( 10 == 3)
// 5. Utiliza el operador lógico and
let and = console.log(5 > 3 && 10 > 5)
// 6. Utiliza el operador lógico or
let or = console.log(5 > 3 || 10 < 5)
// 7. Combina ambos operadores lógicos
let andOr = console.log((5 > 3 && 10 > 5) || (2 < 3 && 4 < 5))
// 8. Añade alguna negación
let negacion = console.log (!( 3 < 5 || 70 < 20))
// 9. Utiliza el operador ternario
let ternario = console.log(5 > 3 ? "Verdadero" : "Falso")
// 10. Combina operadores aritméticos, de comparáción y lógicas
let combinado = console.log ((8+6 > 9) && (5*2 == 10) || (40/2 <= 15))