// METODOS AVANZADOS EN ARRAYS
// los arrays tanto de elementos como tambien de objetos, incluyen una serie de metodos, que basicamente son funciones de orden superior. Estos reciben una funcion como parametro y nos retornan en casi todos los casos, un resultado ya procesado sobre los datos del array en cuestion.

// METODO .MAP() : este metodo recibe una funcion como parametro (callback). Recorre el array y devuelve un nuevo array modificado. Las modificaciones seran aquellas que programemos en nuestra funcion de callback. 

// Se declara un array llamado 'numeros' con elementos del 1 al 5.
// const numeros = [1, 2, 3, 4, 5];

// // Se imprime en la consola el array 'numeros'.
// console.log(numeros);

// // Se define una función llamada 'multiplicar' que toma un parámetro 'numero' y devuelve 'numero' multiplicado por 3.
// function multiplicar(numero) {
//     return numero * 3;
// };

// // Se utiliza el método 'map' en el array 'numeros' para aplicar la función 'multiplicar' a cada elemento del array.
// // El resultado de cada llamada a la función 'multiplicar' se almacena en un nuevo array llamado 'otrosNumeros'.
// const otrosNumeros = numeros.map(multiplicar);

// // Se imprime en la consola el array 'otrosNumeros', que contiene los elementos de 'numeros' multiplicados por 3.
// console.log(otrosNumeros);


// -------------------------------------------------

// Se declara un array llamado 'numeros' que contiene los números 1, 2 y 3.
// const numeros = [1, 2, 3];

// // Se asigna el array 'numeros' a otra variable llamada 'otrosNumeros'.
// const otrosNumeros = numeros;

// // Se agrega el número 4 al array 'otrosNumeros' usando el método 'push'.
// otrosNumeros.push(4);

// // Se imprime en la consola tanto el array 'numeros' como 'otrosNumeros'.
// console.log(numeros, otrosNumeros);

// El resultado impreso en la consola será [1, 2, 3, 4] para ambos numeros y otrosNumeros. Esto sucede porque cuando asignas un array a otra variable en JavaScript, no estás creando una copia independiente del array original. Más bien, estás creando una nueva referencia a la misma ubicación de memoria donde se almacena el array original. Por lo tanto, cuando modificas otrosNumeros con push(4), también estás modificando el array original numeros, ya que ambos hacen referencia al mismo objeto en la memoria.El resultado impreso en la consola será [1, 2, 3, 4] para ambos numeros y otrosNumeros. Esto sucede porque cuando asignas un array a otra variable en JavaScript, no estás creando una copia independiente del array original. Más bien, estás creando una nueva referencia a la misma ubicación de memoria donde se almacena el array original. Por lo tanto, cuando modificas otrosNumeros con push(4), también estás modificando el array original numeros, ya que ambos hacen referencia al mismo objeto en la memoria.

// ----------------------------------------

// console.log("Hola".map((letra) => console.log(letra))); //no funciona
// console.log("Hola"[0]); //  H

// ----------------------------------------
// METODO .FILTER() Este metodo tambien recibe una funcion como parametro. Recorre el array y filtra los elementos segunf una condicion que exista en el callback.
//  devuelve un nuevo array que contiene unicamente los elementos que hayan cumplido con esa condicion. Es decir, que nuestro array puede contener menos elementos que el original.

// Se declara un array llamado 'numeros' que contiene los números del 1 al 5.
// const numeros = [1, 2, 3, 4, 5];

// // Se define una función llamada 'filtrar' que toma un número como argumento y devuelve 'true' si el número es mayor que 0, de lo contrario devuelve 'false'.
// function filtrar(numero) {
//     if (numero > 0) {
//         return true;
//     } else {
//         return false;
//     };
// };

// // Se utiliza el método 'filter' en el array 'numeros' para filtrar los elementos que cumplen con la condición definida en la función 'filtrar'.
// // Los elementos que devuelven 'true' son incluidos en un nuevo array llamado 'numerosFiltrados'.
// const numerosFiltrados = numeros.filter(filtrar);

// // Se imprime en la consola el array 'numerosFiltrados', que contiene los elementos del array 'numeros' que son mayores que 0.
// console.log(numerosFiltrados);

// version cada vez mas simplificada del ejemplo de arriba:

// const numeros = [1, 2, 3, 4, 5];

// function filtrar(numero) {
//     return numero >= 3;
// };


// const filtrar = function (numero) {
//     return numero >= 3;
// };


// const filtrar = numero => numero >= 3;


// const numerosFiltrados = numeros.filter(numero => numero >= 3);
// console.log(numerosFiltrados);

// const numerosFiltrados = numeros.filter(filtrar);
// console.log(numerosFiltrados);

// --------------------------------------------
// ---------------------------------------------
// metodo reduce:  este metodo recorre el array y devuelve un unico valor.
// recibe un callback que se va a ejecutar sobre cada elemento del array. Etse, a su vez, recibe cuatro argumentos: un acumulador, elemento actual, indece actual y array que esta recorriendo.

// Se declara un array llamado 'numeros' que contiene los números 1, 2 y 3.
// const numeros = [1, 2, 3];

// Se utiliza el método 'reduce' en el array 'numeros' para reducir sus elementos a un solo valor.
// El método 'reduce' toma una función de reducción como argumento, que se ejecuta en cada elemento del array.
// La función de reducción toma dos parámetros: 'previous' (el valor acumulado hasta el momento) y 'current' (el valor actual del elemento).
// En este caso, se inicializa el valor acumulado 'previous' en 0.
// En cada iteración, la función suma el valor actual 'current' al valor acumulado 'previous'.
// El resultado final es el total de la suma de todos los elementos del array 'numeros'.

// const total = numeros.reduce((previous, current) => {
//     return previous + current;
// }, 0);

// Se imprime en la consola el resultado de la suma de todos los elementos del array 'numeros'.
// console.log(total);


// ---------------------------------------
// ---------------------------------------
// metodo foreach: la finalidad de este metodo es iterar sobre un array. Recibe un callback como parametro y a diferencia de los metodos anteriores, este no retorna nada. 

// Se declara un array llamado 'nombres' que contiene una lista de nombres.
// const nombres = ["Juan", "Maria", "Pedro", "Camila"];

// Se define una función llamada 'mostrarNombre' que toma un parámetro 'nombre' e imprime un mensaje en la consola con dicho nombre.
// function mostrarNombre(nombre) {
//     console.log(`el nombre es: ${nombre}`);
// };

// Se utiliza el método 'forEach' en el array 'nombres' para iterar sobre cada elemento del array.
// En cada iteración, se llama a la función 'mostrarNombre' con el nombre actual como argumento.
// nombres.forEach(mostrarNombre);

// Se utiliza el método 'forEach' en el array 'nombres' para iterar sobre cada elemento del array.
// En cada iteración, se imprime el nombre actual en la consola utilizando una función de flecha.
// nombres.forEach(nombre => console.log(nombre));

// En la primera parte, se declara una función llamada mostrarNombre que imprime el nombre pasado como argumento a través de una plantilla de cadena.
// Luego, se usa el método forEach en el array nombres para iterar sobre cada elemento del array y llamar a la función mostrarNombre con cada nombre.
// En la segunda parte, se utiliza nuevamente el método forEach en el array nombres, pero esta vez se utiliza una función de flecha para imprimir cada nombre directamente en la consola.
// En resumen, el código muestra dos formas de utilizar el método forEach para iterar sobre un array y realizar una acción para cada elemento.

// -------------------------------------
// metodo findindex: se utiliza para encontrar el indice del primer elemento de un array que cumpla con una condicion especifica. Devuelve el indice del elemento encontrado, o -1 si no se encuentra ningun elemento que cumpla la condicion.

const productos = [{ id: 1, nombre: "producto 1", cantidad: 3, precio: 100 },
{ id: 5, nombre: "producto 5", cantidad: 1, precio: 150 },
{ id: 9, nombre: "producto 9", cantidad: 4, precio: 60 },
];

function buscar(producto) {
    if (producto.id == 9) {
        return true;
    } else {
        return false;
    }
};

// version simplificada del codigo de arriba:
const index = productos.findIndex(producto => producto.id == 91);
// const index = productos.findIndex(producto => producto.id == 9);
// const index = productos.findIndex(buscar);

console.log(index);












