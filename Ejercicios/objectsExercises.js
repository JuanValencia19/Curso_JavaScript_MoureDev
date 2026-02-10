// 1. Crea un objeto con 3 propiedades
let myObject = {
    nombre: "Juan Jose",
    edad: 22,
    profesion: "Analista de datos y dev"
}
// 2. Accede y muestra su valor
console.log(myObject)
// 3. Agrega una nueva propiedad
myObject.pasatiempo = "Futbol, escuchar musica"
console.log(myObject)
// 4. Elimina una de las 3 primeras propiedades
delete myObject.profesion
console.log(myObject)
// 5. Agrega una función e invócala
let myObject2 = {
    nombre: "Juancho",
    edad: 22,
    profesion: "Analista de datos y dev",
    work: function(){
        console.log(`El inge trabaja como: ${this.profesion}`)
    }
}
console.log(myObject2.work())
// 6. Itera las propiedades del objeto
for(let key in myObject2){
    console.log(key + ": " + myObject2[key]);
}
// 7. Crea un objeto anidado
let myObject3 = {
    nombre: "Timmy",
    edad: 23,
    saludar: function() {
        console.log("Hola, mi nombre es " + this.nombre);
    },
    job: {
        name: "Developer",
        years: 5,
        work: function() {
        console.log(`La persona trabaja como ${this.name}`);
        }
    }
}
// 8. Accede y muestra el valor de las propiedades anidadas
console.log(myObject3.job)
console.log(myObject3.job.work())
// 9. Comprueba si los dos objetos creados son iguales
console.log(myObject2 === myObject3);
// 10. Comprueba si dos propiedades diferentes son iguales
console.log(myObject.nombre === myObject2.nombre)