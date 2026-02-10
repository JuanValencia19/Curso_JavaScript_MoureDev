// 1. Crea una función que reciba dos números y devuelva su suma
function sum(a, b){
    return a + b
}
const resultado = sum(3, 3)
console.log(resultado)
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
const mayorDelArray = (array) => {
    if (!Array.isArray(array) || array.length === 0) return undefined;
      let max = 0;
      for(let i = 0; i < array.length; i++) {
        const n = Number(array[i]);
        if (n > max) max = n;
      }
      return max;
    }
console.log(mayorDelArray([1,2,3,4,5,6])) // 6
console.log(mayorDelArray([5,1,2,6,17,24,76,15])) // 76
console.log(mayorDelArray([])) // undefined
// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function vocalesString(cadena) {
    if (typeof cadena !== 'string' || cadena.length === 0) return undefined;
    let vocales = 0;
    for (const valor of cadena.toLowerCase()) {
        if ('aeiou'.includes(valor)) vocales++;
    }
    return vocales;
}
console.log(vocalesString('Hola mundo JavaScript'));
console.log(vocalesString('Juan Jose'));

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function convertirAMayusculas(cadena1){
    if (!Array.isArray(cadena1) || cadena1.length === 0) return undefined;
    let strings = cadena1.toString()
    let cadena2 = strings.toUpperCase()
    return cadena2
}
console.log(convertirAMayusculas(['Hola mundo', 'juanjodev', 'este es mi string']));

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
const esPrimo = (num) => {
    if (num == 2) return true;
    if (num % 2 == 0) return false;
    if (num == 0) return false;
    if (num % 2 == 1) return true;
};
console.log(esPrimo(7)); // true
console.log(esPrimo(12)); // false

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
const elementosComunes = (arr1, arr2) => {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return undefined;
    const set2 = new Set(arr2)
    const comunes = Array.from(new Set(arr1.filter((x) => set2.has(x))));
    return comunes
};
console.log(elementosComunes(['a', 'b', 'c'], ['b', 'd', 'a'])); // ['a','b']

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumaParesArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return undefined;
    let sumaPares = 0
    for (const valor of arr) {
        if (valor % 2 == 0) sumaPares += valor
    }
    return sumaPares;
}
console.log(sumaParesArray([1, 3, 5, 6, 4, 10, 8])); // 28

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function elevarCuadrado(array) {
    if (!Array.isArray(array) || array.length === 0) return undefined;
    let arrayCuadrado = []
    for (const valor of array) {
        let cuadrado = valor **2
        arrayCuadrado.push(cuadrado)
    }
    return arrayCuadrado
}
console.log(elevarCuadrado([2, 4, 6, 8])); // [4,16,36,64]

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function cadenaInversa(cadena) {
    let nuevaCadena = ""
    for (let i = cadena.length - 1; i >= 0; i--) {
    nuevaCadena += cadena[i]
}
return nuevaCadena;
}
console.log(cadenaInversa('Pool Party'));

// 10. Crea una función que calcule el factorial de un número dado
const calcularFactorial = (num) => {
    if (typeof num !== 'number' || !Number.isInteger(num) || num < 0) return undefined;
    let total = 1;
    for (let i = 2; i <= num; i++) {
        total *= i;
    }
    return total;
};
console.log(calcularFactorial(5));