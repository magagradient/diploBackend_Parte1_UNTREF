// Ejemplo 1:

// let edad = 11;

// if (edad > 13) {
//     console.log("se puede registrar");
// }

// Ejemplo 2:

// let edad = 13;

// if (edad >= 13) {
//     console.log("se puede registrar");
// }

// Ejemplo 3:

// let edad = 10;

// if (edad >= 13) {
//     console.log("se puede registrar");
// } else {
//     console.log("no se puede registrar");
// }


// Ejemplo 4:

// let edad = 10;
// let autorizacion = true;

// if (edad >= 13 || autorizacion === true) {
//     console.log("se puede registrar");
// } else {
//     console.log("no se puede registrar");
// }

// Ejemplo 5:

// let login = true;
// let role = "user";

// if (login == true && role == 'admin'){
//     console.log("ingresar al panel admin");
// }

// Ejemplo 6:

let num = "1";

if (num == "1") {
    console.log("es el 1");
};

// comparacion estricta representada con === te devuelve si el valor es igual y si el tipo de datos es igual

// Ejemplo 7:

// let tarjeta = "Mastercard";
let tarjeta = "Visa";
let mensaje;

// if (tarjeta == "Visa"){
//     mensaje = "10% de descuento";
// } else {
//     mensaje = "no tiene descuento";
// }

// OPERADOR TERNARIO: pasar el bloque de codigo de arriba del ejemplo 7 a una sola linea.

mensaje = tarjeta == "Visa" ? "10% descuento" : "no tiene descuento";

console.log(mensaje);

// EL OPERADOR SWITCH: Nos permite evaluar una expresion, puediendo compararla con multiples posibles condiciones, cuando se cumple la ejecucion, ejecutamos el codigo asociado y cortamos la comparacion utilizando un breack. Si ninguna se cumple,, podemos deifinir un mensaje estandar de la mano del default. Evalua una variable. 

// ejemplo del codigo sin break
// let semaforo = "Verde"

// switch(semaforo){
//     case "Verde":
//         console.log("Avanzar");

//     case "Amarillo":
//         console.log("Precaucion");

//     case "Rojo":
//         console.log("Detener");

//     default:
//         console.log("Semaforo Roto");
// }


// ejemplo del codigo con break
let semaforo = "Verde"

switch (semaforo) {
    case "Verde":
        console.log("Avanzar");
        break;

    case "Amarillo":
        console.log("Precaucion");
        break;

    case "Rojo":
        console.log("Detener");
        break;

    default:
        console.log("Semaforo Roto");
}

// ///////////////////////////////////////////////

let nota = 6;
// let nota = 5;

switch (nota) {
    case 1:
    case 2:
    case 3:
    case 4:
        console.log("desaprobado");
        break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
        console.log("Aprobado");
        break;
    case 10:
        console.log("Sobresaliente");
    default:
        console.log("Nota incorrecta");
}

// Este ejemplo si se hace con un if es mmucho mas simple, el switch no se usa tanto.// Esto si se hace con un if es mmucho mas simple, el switch no se usa tanto.

if (nota >= 5 && nota <= 9) {
    console.log("Aprobado");
}

