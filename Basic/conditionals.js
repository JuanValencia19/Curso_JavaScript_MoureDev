// if, else if, else

//if (si)
let age = 18;


if (age == 18) {
    //bloque de código si se cumple la condición
    console.log("Tienes 18 años")
}

//else (si no)
if (age == 18) {
    console.log("Tienes 18 años")
}
else {
    //bloque de código si no se cumple la condición
    console.log("No tienes 18 años")
}

//else if (si no, si)
if (age == 37) {
    console.log("Tienes 37 años")
}
else if (age < 18) {
    console.log("Eres menor de edad")
}
else {
    console.log("Eres mayor de edad")
}

//operador ternario
let resultado = (age >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(resultado);

//switch
let dia = 3;
let diaSemana;

switch (dia) {
    case 1:
        diaSemana = "Lunes";
        break;
    case 2:
        diaSemana = "Martes";
        break;
    case 3:
        diaSemana = "Miércoles";
        break;
    case 4:
        diaSemana = "Jueves";
        break;
    case 5:
        diaSemana = "Viernes";
        break;
    case 6:
        diaSemana = "Sábado";
        break;
    case 7:
        diaSemana = "Domingo";
        break;
    default:
        diaSemana = "Día inválido";
}

console.log("Hoy es", diaSemana);