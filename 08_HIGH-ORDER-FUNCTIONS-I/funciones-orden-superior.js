// las high order functions son funciones en javaScript que aceptan una o mas funciones como argumento y/o devuelven una funcion como resultao. Su principal tarea es operar facilmente sobre otras funciones, tratarlas como datos y/o transformarlas. 

// permmiten que el codigo sea mas modular y reutilizable, ya que las funciones pueden ser combinadas y anidadas para producir un comportamiento mas complejo. 

function alert(texto) {
    console.log("alert" + texto);
}

// --------------------------

// const sumarLog = function (num1, num2) {
//     console.log(num1 + num2);
// };

// const sumarAlert = function (num1, num2) {
//     console.log(num1 + num2);
// };

// const sumarAPI = function (num1, num2) {
//     api.method(num1 + num2);
// };

// Definición de la función sumar que toma dos números y una función de devolución de llamada
const sumar = function (num1, num2, callback) {
    if (typeof num1 != "number" || typeof num2 != "number") {
        throw Error("los parametros tiene que ser numeros");
    }
    // Se suma num1 y num2, y se pasa el resultado a la función de devolución de llamada
    callback(num1 + num2);
};

// Llamada a la función sumar con los números 2 y 4, y la función console.log como devolución de llamada
sumar(2, 4, console.log); // 6

// Llamada a la función sumar con los números 2 y 4, y la función alert como devolución de llamada
sumar(2, 4, alert); // alert6

// sumarLog(2, 4);
// sumarAlert(2, 4);
