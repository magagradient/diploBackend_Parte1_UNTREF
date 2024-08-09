// FUNCIONES:
// se estructuran con la palabra reservada FUNCTION y luego son invocadas en la parte de nuestra aplicacion que necesite ser utilizarlas, es decir se puede reutilizar. 

let nombre = "maga"
let apellido = "guerzoni"

function saludar(){
    console.log("hola mundo");
}

// puedo llamar/ejecutar a la funcion las veces que necesite:
saludar();
saludar();
saludar();
saludar();
saludar();

// la funcion si puede tener acceso al scope global pero el scope global no puede tener acceso a la funcion, en este caso llamo a la variable dentro de mi funcion que esta en el scope global: (aunque no es lo mas recomendable porque depende de algo externo):

function saludar1(){
    console.log("hola " + nombre);
}

saludar1();

// lo que si se recomienda son las FUNCIONES CON PARAMETROS: Dentro de la funcion dentro de los parentesis le puedo pasar parametros osea valores para que la funcion lo utilice: 

// parametros: contenedores/variables que estan dentro del scope de la funcion, pertenecen a ella. 

function saludar2(parametroNombre, parametroApellido){
    console.log("Hola, " + parametroNombre + " " + parametroApellido);
};

// aca utilice la funcion saludar2: es una variable a la que le asigno valor cuando ejecuto la funcion. 
saludar2('victoria', 'legrand');

// aca utilice el scope global
saludar2(nombre, apellido);

// /////////////////////////////////////////////////
// otro ejemplo:

let nombreCompleto = "alex scally"; 

function mostrarMiNombre(nombre) {
    console.log("me llamo, ", nombre);
}
mostrarMiNombre(nombreCompleto); 

// 1.Declara una variable llamada nombreCompleto y le asigna el valor "alex scally". Esta variable almacena el nombre completo de una persona.

// 2.Define una función llamada mostrarMiNombre que toma un parámetro llamado nombre. Dentro de la función, se imprime en la consola el mensaje "me llamo, " seguido del nombre pasado como argumento.

// 3.Llama a la función mostrarMiNombre pasando como argumento la variable nombreCompleto, lo que imprimirá "me llamo, alex scally" en la consola.

// el codigo interpreta que el parametro nombre es alex scally de la siguiente forma:

// En el código, cuando se llama a la función mostrarMiNombre con mostrarMiNombre(nombreCompleto);, la variable nombreCompleto se pasa como argumento al parámetro nombre de la función mostrarMiNombre. Entonces, dentro de la función, nombre contendrá el valor de "alex scally", que es el valor de la variable nombreCompleto.

// La función mostrarMiNombre imprime en la consola el mensaje "me llamo, " seguido del valor del parámetro nombre, que en este caso es "alex scally". Por lo tanto, cuando la función se ejecuta con nombreCompleto como argumento, imprime "me llamo, alex scally".

// ///////////////////////////////////////

//  La variable nombreCompleto no "sabe" que el parámetro nombre será "alex scally". En JavaScript, cuando se llama a una función con un argumento, ese argumento se pasa como valor al parámetro correspondiente de la función.

// En este caso específico:

// La variable nombreCompleto tiene el valor "alex scally".

// Cuando se llama a la función mostrarMiNombre(nombreCompleto);, el valor de nombreCompleto se pasa como argumento al parámetro nombre de la función mostrarMiNombre.

// Dentro de la función mostrarMiNombre, el parámetro nombre tendrá el valor que se le haya pasado como argumento cuando se llamó a la función. En este caso, nombre tendrá el valor "alex scally".

// Entonces, no es que la variable nombreCompleto "sepa" que el parámetro nombre será "alex scally", sino que al llamar a la función mostrarMiNombre con nombreCompleto como argumento, el valor de nombreCompleto se pasa como el valor del parámetro nombre dentro de la función.

// ///////////////////////////////////////////////////////////////////////////////////////

// Funciones con parametros y retornos: tambien podemos utilizar las funciones con retorno y/o parametros: para ello la palabra reserveda sera RETURN.

// EJEMPLO 1:

function obtenerMaximo(num1, num2, num3){
    return console.log(Math.max(1, 4, 10));
};
obtenerMaximo();
// devuelve 10.


// EJEMPLO 2:

function sumar(num1, num2, num3){
    let resultado = num1 + num2 + num3
    return resultado;
}

let resultadoSumar = sumar(10, 20, 30);
console.log("la suma es:  " + resultadoSumar);

resultadoSumar = sumar(20, 40, 80);
console.log("la suma es:  " + resultadoSumar);

// ////////////////////////////////////////////////////////////////////////

// FUNCIONES ANONIMAS: funciones que no tienen nombre: para utilizarla generalmente se le asigan una constante:

const restar = function (num1, num2, num3){
    let resultadoResta = num1 - num2 - num3;
    return resultadoResta;
}; 

let resultadoRestar = (600, 200, 200);
console.log("la resta es:  " + resultadoRestar);

// /////////////////////////////////////////////////////////////////////////

// ARROW FUNCTIONS = FUNCIONES FLECHAS:

// EJEMPLO 1:
const suma = (num1, num2, num3) =>  num1 + num2 + num3

let resultadoSuma = suma(80, 10, 30);
console.log("la suma es:  " + resultadoSuma);

// EJEMPLO 2: 

//  funcion normal:
// function saluda(nombre) {
//     return 'Hola ' + nombre;
// }

// funcion flecha: si es un solo parametro se le puede sacar los parentesis:
const saluda = nombre => 'Hola ' + nombre;

const mensaje = saluda("lucia")
console.log(mensaje);





