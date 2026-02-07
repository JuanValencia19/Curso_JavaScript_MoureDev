//loops o bucles

//for
for(let i = 0; i < 5; i++){
    console.log("Hola mundo");
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < numbers.length; i++){
    console.log("Elemento: " + numbers[i]);
}

//while
let count = 0;
while(count < 5){
    console.log("Contador: " + count);
    count++;
}

//do while
let num = 0;
do {
    console.log("Número: " + num);
    num++;
} while(num < 5);

//for...of

myArray = ["Juan", "moure", 3, true]
mySet = new Set([1, "Dev", 3, 4, 5])
myMap = new Map([
  ["nombre", "Juan"],
  ["edad", 22],
  ["profesion", "Desarrollador"],
])

for(let valor of myArray){
    console.log(valor)
}

for(let valor of mySet){
    console.log(valor)
}

for(let [clave, valor] of myMap){
    console.log(clave + ": " + valor)
}

MyString = "Hola JavaScript"
for(let char of MyString){
    console.log(char)
}

//Buenas practicas
//break y continue

for(let i = 0; i < 10; i++){
    if(i === 5){
        continue // salta la iteracion cuando i es igual a 5
    }
    else if(i === 8){
        break // rompe el bucle cuando i es igual a 8
    }
    console.log(i);
}