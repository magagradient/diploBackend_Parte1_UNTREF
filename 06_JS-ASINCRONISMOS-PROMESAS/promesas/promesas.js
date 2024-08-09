// la solucion para no usar callback es usar promesas:

const multiplicar = (num1, num2) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            num1: num1,
            num2:num2, 
            result: num1 * num2, 
        });
    }, Math.floor(Math.random() * 2000));
    })
};

multiplicar(1, 2).then((response) => {
    console.log(`${response.num1} * ${response.num2} = ${response.result}`); 
    return multiplicar(2, 2)
})
.then((response) => {
    console.log(`${response.num1} * ${response.num2} = ${response.result}`); 
return multiplicar(3, 2);
})
.then((response) => {
    console.log(`${response.num1} * ${response.num2} = ${response.result}`); 
}).catch((error) => console.log(error)); 


// Este código en JavaScript utiliza Promesas para realizar operaciones de multiplicación de manera asíncrona y manejar los resultados de manera secuencial. Aquí tienes un resumen paso a paso:

// Definición de la función multiplicar(num1, num2): Esta función toma dos números como argumentos y devuelve una nueva Promise. Dentro de esta Promise, se utiliza setTimeout para simular una tarea que toma un tiempo aleatorio (entre 0 y 2000 milisegundos) para completarse. Una vez que haya pasado el tiempo aleatorio, la Promise se resuelve con un objeto que contiene los números de entrada y el resultado de la multiplicación.
// Llamadas encadenadas a la función multiplicar: Se realizan tres llamadas encadenadas a la función multiplicar, cada una con diferentes pares de números. Después de cada llamada a multiplicar, se llama al método .then() para manejar el resultado de la Promise.
// Dentro de cada bloque .then(): Dentro de cada bloque .then(), se imprime en la consola el resultado de la multiplicación obtenido del objeto response que se pasa como argumento.
// Manejo de errores con .catch(): Se utiliza el método .catch() al final de la cadena de promesas encadenadas para capturar cualquier error que pueda ocurrir durante la ejecución de las promesas. En caso de error, se imprime el error en la consola.
// En resumen, este código utiliza Promesas para ejecutar tareas asíncronas de multiplicación y manejar los resultados de manera secuencial. Cada multiplicación se realiza después de que la anterior haya completado su ejecución, garantizando un flujo de control claro y una gestión adecuada de errores.

