const multiplicar = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return Promise.reject("los valores de los parametros no son numeros"); 
    }
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

const tabla = async () => {
    try {
        let resultado = await multiplicar(1, 2);
        console.log(`${response.num1} * ${response.num2} = ${response.result}`);
        
        resultado = await multiplicar(2, 2);
        console.log(`${response.num1} * ${response.num2} = ${response.result}`);
        
        resultado = await multiplicar(3, 2);
        console.log(`${response.num1} * ${response.num2} = ${response.result}`);

    } catch (error) {
        console.log(error);
    }
    
};

//  try - catch y async - await, siempre es lo mas recomendable usar para cuando usamos promesas. 


// Este código en JavaScript define una función multiplicar(num1, num2) que devuelve una Promesa y una función tabla() que utiliza la palabra clave async para ejecutar tareas asíncronas de multiplicación y manejar los resultados con await. Aquí tienes una explicación paso a paso:

// Definición de la función multiplicar(num1, num2): Esta función toma dos parámetros, num1 y num2, y comprueba si ambos son números. Si alguno de los parámetros no es un número, la función devuelve una Promesa rechazada con el mensaje "los valores de los parámetros no son números". Si ambos son números, la función devuelve una Promesa que se resuelve después de un tiempo aleatorio (entre 0 y 2000 milisegundos) con un objeto que contiene los números de entrada y el resultado de la multiplicación.

// Definición de la función tabla(): Esta función utiliza la palabra clave async, lo que indica que contendrá código asíncrono que utiliza await para manejar Promesas. Dentro de esta función, se utilizan bloques try...catch para manejar errores.

// Llamadas a la función multiplicar con await: Dentro de la función tabla(), se realizan tres llamadas a la función multiplicar, una para cada par de números de la tabla de multiplicar (1x2, 2x2 y 3x2). Se utiliza la palabra clave await para esperar a que cada Promesa devuelta por multiplicar se resuelva.

// Manejo de resultados: Después de cada llamada a multiplicar, se captura el resultado utilizando la variable resultado. Luego, se imprime en la consola el resultado de la multiplicación utilizando los datos proporcionados por resultado.

// Manejo de errores: Si ocurre algún error durante la ejecución de las Promesas, se captura mediante el bloque catch y se imprime en la consola.

// En resumen, este código utiliza Promesas con async/await para ejecutar tareas asíncronas de multiplicación y manejar los resultados de manera secuencial, mientras que también maneja posibles errores que puedan ocurrir durante la ejecución.

