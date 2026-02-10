//Funciones

function myFunction(){
    console.log("Hola Mundo")
}

myFunction()
for(let i = 0; i < 5; i++){
    myFunction()
}

//con parametros
function myFunctionWithParams(name){
    console.log("Hola " + name)
}
myFunctionWithParams("Juan")

//Funciones anonimas
const myAnonymousFunction = function(name){
    console.log("Hola " + name)
}
myAnonymousFunction("Chanti")

//Funciones flecha
const myArrowFunction = (name) => {
    console.log("Hola " + name)
}
myArrowFunction("West")

//Parametros

function sum(a, b){
    console.log(a + b)
}
sum(5, 10)
sum() // Forma erronea de llamar la funcion, da NaN

function sumWithDefault(a = 0, b = 0){
    console.log(a + b)
}
sumWithDefault(5, 10)
sumWithDefault(5) // Al tener un valor por defecto, no da NaN

//Retorno de valores

function sumWithReturn(a, b){
    return a + b
}
let result = sumWithReturn(5, 10)
console.log(result)

//Funciones anidadas

function extern(){
    console.log("Soy la funcion externa")
    function intern(){
        console.log("Soy la funcion interna")
    }
    intern() // Se puede llamar a la funcion interna desde la funcion externa
}
extern()
//intern() // No se puede llamar a la funcion interna desde fuera de la funcion externa

//Funciones de orden superior

function applyFunc(func, param) {
    func(param)
}

applyFunc(myFunctionWithParams, "funcion de orden superiror")

//ForEach
const array = [1, 2, 3, 4, 5]
array.forEach((element) => {
    console.log(element)
})