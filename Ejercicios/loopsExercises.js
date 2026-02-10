// 1. Crea un bucle que imprima los números del 1 al 20
for(let i = 0; i < 21; i++){
    console.log(i)
}
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let count2 = 0
for(let i = 0; i < 101; i++){
    count2 += i
}
console.log(count2)
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
let count = 0
while(count < 51){
    if(count % 2 == 0){
        console.log("Par: " + count)
    }
    count ++;
}
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let myArray= ["Juan","Chanti","West","Timmy","Leandro"]
    for(let valor of myArray){
        console.log(valor)
    }
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
myString = "Hola mundo JavaScript"
let count1 = 0
for(let char of myString) {
    if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
        count1 ++
    }
}
console.log("Numero total de vocales: " + count1)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let myArray1 = [1,5,7,8,4,2]
let count3 = 1
    for(valor of myArray1){
        count3 *= valor
    }
    console.log("El producto es del array es: " + count3)
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let mult = 5
for(let i=0; i < 11; i++){
    let result = mult * i
    console.log(`5 x ${i}: ${result}`)
}
// 8. Usa un bucle para invertir una cadena de texto
let cadena = "Pool Party"
let nuevaCadena = ""
for (let i = cadena.length - 1; i >= 0; i--) {
    nuevaCadena += cadena[i]
}
console.log("Cadena invertida: " + nuevaCadena)
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let fib = 0
for(let i = 0; i < 11; i++){
    if(i === 0){
        fib = 0
    } else if(i === 1){
        fib = 1
    } else {
        fib = fib + (i - 1)
    }
    console.log(`Fibonacci ${i}: ${fib}`)
}
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let myArray3 = [1,8,17,26,34,2,91,6,4]
let myArray4 = []
for(let valor of myArray3){
    if(valor >= 10){
        myArray4.push(valor)
    }
}
console.log(myArray4)