function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function calculadora(num1, num2, operacion) {
    if (operacion == "+") {
        return num1 + num2;
    } else if (operacion == "-") {
        return num1 - num2;
    } else if (operacion == "*") {
        return num1 * num2;
    } else if (operacion == "/") {
        return num1 / num2;
    }

    return operacion(num1, num2);
};

let result = calculadora(2, 3, sumar);
console.log(result); // 5

result = calculadora(7, 4, restar);
console.log(result); // 3

result = calculadora(2, 4, "*");
console.log(result); // 8

result = calculadora(8, 2, "/");
console.log(result); // 4

// funcion de orden superior que retorna una funcion (tambien puede recibir otra funcion como parametro). 

// Declaración de una función llamada "saludar" que toma un parámetro "nombre"
function saludar(nombre) {
    // Declara una constante "apellido" y la inicializa con el valor "Garcia"
    const apellido = "Garcia";
    // Retorna una función anónima que, cuando se llame, retornará un string combinando el nombre y el apellido
    return function () {
        return `${nombre} ${apellido}`;
    };
}

// Llama a la función "saludar" con el argumento "Juan" y asigna la función retornada a la constante "mensaje"
const mensaje = saludar("Juan");

// Llama a la función almacenada en "mensaje" y asigna el resultado a la constante "texto"
const texto = mensaje();

// Imprime el valor de "texto" en la consola
console.log(texto);