//Objects

//Sintasis

let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

//Acceder a las propiedades de un objeto
console.log(persona.nombre);
console.log(persona["edad"]);

//Agregar una nueva propiedad a un objeto
persona.profesion = "Desarrollador";
console.log(persona);

//Eliminar una propiedad de un objeto
delete persona.ciudad;
console.log(persona);

//Metodos de un objeto
let persona2 = {
    nombre: "Maria",
    edad: 25,
    saludar: function() {
        console.log("Hola, mi nombre es " + this.nombre);
    }
}

persona2.saludar();

let persona3 = {
    nombre: "Juancho",
    edad: 18,
    saludar: function() {
        console.log("Hola, mi nombre es " + this.nombre);
    },
    job: {
        name: "Developer",
        years: 5,
        work: function() {
        console.log("La persona trabaja");
        }
    }
}
persona3.job.work();

//Igualdad de objetos
let obj1 = {a: 1, b: 2};
let obj2 = {a: 1, b: 2};
console.log(obj1 === obj2); // false

console.log(obj1.a === obj2.a); // true

//Iteracion sobre objetos
for (let key in persona) {
    console.log(key + ": " + persona[key]);
}

//functions como objetos
function person(name, age) { // Definición de la función constructora, deberia ser una clase
    this.name = name;
    this.age = age;
}
let person5 = new person("Carlos", 40);
console.log(person5)