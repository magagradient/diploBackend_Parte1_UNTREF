// Se crea una nueva promesa utilizando new Promise((resolve, reject) => {...}). Este constructor de promesas toma una función que a su vez toma dos argumentos: resolve y reject. resolve se llama cuando la promesa se cumple exitosamente, mientras que reject se llama cuando la promesa es rechazada debido a un error.
// Dentro de la función pasada al constructor de la promesa, se genera un número aleatorio utilizando Math.random(). Este número aleatorio está entre 0 (inclusive) y 1 (exclusivo).
// Se evalúa si el número aleatorio generado es menor que 0.5 utilizando una declaración if. Si es menor que 0.5, la promesa se resuelve llamando a resolve, y se pasa como argumento una cadena que indica que el número es menor a 0.5, junto con el valor del número aleatorio.
// Si el número aleatorio es mayor o igual a 0.5, la promesa se rechaza llamando a reject, y se pasa como argumento una cadena que indica que el número es menor o igual a 0.5, junto con el valor del número aleatorio.
// Después de crear la promesa, se imprime en la consola el objeto promesa utilizando console.log(promesa). Esto simplemente mostrará [object Promise] en la consola, ya que imprimir el objeto promesa directamente no muestra su estado o valor.


// const promesa = new Promise((resolve, reject) => {
//     const numeroAleatorio = Math.random();
//     if (numeroAleatorio < 0.5) {
//         resolve('El numero es menor a 0.5' + numeroAleatorio);
//     } else {
//         reject('El numero es mayor o igual a 0.5: ' + numeroAleatorio);
//     }
// });

// A su vez, si la promesa devuelve resolve, entonces se invocara al metodo .then() Mientras que, si devuelve reject, el metodo invocado sera .catch()

// promesa
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error))
//     .finally(() => console.log("se ejecuta siempre"));

// Una Promesa en JavaScript tiene tres posibles estados:
// 1.PENDING: Este es el estado inicial de una promesa, cuando se crea pero aun no se ha resuelto ni rechazado.
// 2.FULLFILLED: Una promesa para a este estado cuando se ha resuelto correctamente. Cuando una promesa esta en este estado, se puede acceder al valor de resultado proporcionado po la funcion RESOLVE.
// 3.REJECTED: Una promesa pasa a este estado cuando se ha producido un error durante la ejecucion de la operacion asincrona que representa. Con la promesa en este estado se puede acceder al motivo de rechazo proporcionado por la funcion REJECT.

// RESULTADO DE UNA PROMESA: existe una tercera posible funcion, la cual se ejecutara siempre, indistintivamente del resultado de la promesa: .finally();

// El método .finally() en una promesa de JavaScript se utiliza para especificar una función que se ejecutará siempre que la promesa se resuelva o se rechace, independientemente de su resultado. En otras palabras, la función proporcionada al método .finally() se ejecutará sin importar si la promesa se cumple o se rechaza.
// Esto es útil cuando necesitas realizar alguna acción de limpieza o de finalización, independientemente del resultado de la promesa. Por ejemplo, puedes usar .finally() para cerrar una conexión a una base de datos, cerrar un archivo, o limpiar recursos que ya no se necesiten, sin importar si la operación fue exitosa o no.

// ----------------------------------------------------
// FETCH, en si ya es una promesa , entonces no hay que generarla. 

// Este código utiliza la función fetch() para realizar una solicitud HTTP GET a la URL "https://fakestoreapi.com/products", que devuelve una lista de productos en formato JSON. Luego, encadena una serie de métodos .then() para procesar la respuesta de la solicitud:

// El primer .then() convierte la respuesta HTTP en formato JSON utilizando el método json().
// El segundo .then() recibe los datos JSON resultantes y los imprime en la consola utilizando console.log().
// El .catch() maneja cualquier error que ocurra durante la solicitud, imprimiendo el error en la consola con console.log().
// En resumen, este código realiza una solicitud GET a una API falsa de tienda en línea, procesa los datos JSON resultantes e imprime la lista de productos en la consola. Si ocurre algún error durante la solicitud, este se maneja e imprime en la consola también.

// console.log('inicio');

// fetch("https://fakestoreapi.com/products")
//     .then((res) => res.json())
//     .then((json) => console.log(json))
//     .catch((error) => console.log(error));

// console.log('fin');

// MANEJO CONTROLADO DE LA RESPUESTA DE UNA PROMESA:
// .then(result) mediante este metodo podemos ir controlando cada tarea que se ejecuta, posterior a la respuesta de la promesa, podemos encadenar tantos .then() como consideremos. El parametro (result) corresponde al valor o resultado entregado por la promesa, mediante el objeto resolve().
// .catch(error) cualquier error que surja, o el mismo rechazo de la promesa, mediante el objeto reject(), sera controlado por el metodo .catch() El error resultante lo podemos ver mediante el parametro err o error y asi tomar acciones apropiadas
// .finally() este metodo es opcional y se ejecutara siempre, si lo agregamos, independientemente de cual haya sido el estado resultante de la promesa resolve() o reject().


// ---------------------------------------------------
// try - catch - finally: corresponde a un bloque de codigo que ejecuta una tarea espedifica en el codigo de js, y ante cualquier error inesperado, atrapa el mismo y lo podemos controlar de foma efectiva: 

// try {
//     let num1 = 4;
//     let num2 = 5;
//     let resultado = num1 + num2;
//     console.log(`la suma es: ${resultado}`);
// } catch(error) {
//     console.log("error");
// } finally {
//     console.log("siempre se ejecuta");
// };

// console.log("fin");

// ASINCRONISMO 
// para trabajar con asincronismos en JavaScript, se utilizan funciones asincronas y callbacks. Las funciones asincronas son aquellas que pueden ejecutar tareas de forma asincrona, mientras que los callbacks son funciones que se ejecutan una vez que se haya completado alguna tarea definida como asincrona. 

// CALLBACK
// function tareaAsincronica(callback){
//     setTimeout(() => {
//         callback('pasaron 1500 milisegundos'); 
//     }, 1500);
// }

// console.log("inicio");

// tareaAsincronica((texto) => console.log(texto)); 

// console.log("fin");

// 1. Definición de la función tareaAsincronica(callback): Esta función toma un argumento, callback, que se espera que sea una función. Dentro de esta función, se utiliza setTimeout para simular una tarea que toma un tiempo para completarse. setTimeout espera un tiempo determinado (en este caso, 1500 milisegundos o 1.5 segundos) antes de ejecutar la función proporcionada.
// 2. console.log("inicio"): Esto imprime "inicio" en la consola.
// 3. Llamada a tareaAsincronica(): Se llama a tareaAsincronica pasando una función anónima como argumento. Esta función anónima se ejecutará como un callback cuando setTimeout haya completado su cuenta regresiva.
// 4. Dentro de tareaAsincronica(): Después de 1500 milisegundos, la función callback que se pasó como argumento se ejecutará. En este caso, la función simplemente imprime el texto "pasaron 1500 milisegundos".
// 5. console.log("fin"): Esto imprime "fin" en la consola.

// Esto demuestra que, aunque la función tareaAsincronica se llama primero, su ejecución toma un tiempo, por lo que el programa continúa ejecutando el código que le sigue. Una vez que tareaAsincronica ha completado su tarea, se llama al callback proporcionado, imprimiendo "pasaron 1500 milisegundos" en la consola.

// -----------------
// ASYNC - AWAIT 
// son dos palabras clave que se utilizan para trabajar con funciones asincronas de manera mas sencilla. Las mismas se combinan dentro de una funcion convencional, la cual se convierte en asincrona, cuando anteponemos la palabra async.

// async se utiliza para declarar una funcion asincrona. una funcion asincrona siempre devuelve una promesa, aunque no se indique explicitamente. Dentro de una funcion asincrona, se pueden utilizar palabras clave como await para indicar que se debe esperar la respuesta de una tarea asincronica antes de continuar con la ejecucion del codigo. 

// await se utiliza dentro de una funcion asincrona para indicar que se debe esperar la repuesta de una tarea asincrona antes de continuar con la ejecucion del codigo. Cuando se utiliza await, la funcion se detiene en ese punto hasta que la tarea asincrona se haya completado y se haya devuelto el resultado. El resultado de la tarea asincrona se asigna a la variable/constante que se encuentra a la izquierda del operador await. 

// y si deseamos tener un control total de la situacion, podemos sumar al universo asincronico el uso de try - catch para asi tener todo el control ante algun posible error no previsto, sea nuestro o por parte de la peticion de datos realizadas.


async function getProductos() {
try {
    const response = await fetch(("https://fakestoreapi.com/products"));
    const json = await response.json();
    console.log(json);
} catch (error) {
    console.log(error);
}
}

// fetch("https://fakestoreapi.com/products")
//     .then((res) => res.json())
//     .then((json) => console.log(json))
//     .catch((error) => console.log(error));









