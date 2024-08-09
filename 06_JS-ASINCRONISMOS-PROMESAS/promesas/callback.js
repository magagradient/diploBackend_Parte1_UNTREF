// funcion de multiplicar

const multiplicar = (num1, num2) => {
    setTimeout(() => {
        callback(num1, num2, num1 * num2)
    }, Math.floor(Math.random() * 2000));
};

multiplicar(1, 2, (n1, n2, result) => {
    console.log(`${n1} * ${n2} = ${result}`);
    multiplicar(2, 2, (n1, n2, result) => {
        console.log(`${n1} * ${n2} = ${result}`);
        multiplicar(3, 2, (n1, n2, result) =>
            console.log(`${n1} * ${n2} = ${result}`)
        );
    });
});

// Este código JavaScript también se trata de ejecución asíncrona utilizando `setTimeout`, pero con una estructura de callback anidado. Aquí tienes una explicación paso a paso:

// 1. **Definición de la función `multiplicar(num1, num2, callback)`:** Esta función toma dos números como argumentos, `num1` y `num2`, y una función de callback. Dentro de esta función, se utiliza `setTimeout` para simular una tarea que toma un tiempo aleatorio (entre 0 y 2000 milisegundos) para completarse. Una vez que haya pasado el tiempo aleatorio, se llama al callback proporcionándole los números de entrada y el resultado de la multiplicación de los dos números.

// 2. **Llamada a `multiplicar(1, 2, callback)`:** Se llama a `multiplicar` con los números 1 y 2 como argumentos, junto con una función de callback. Esta función de callback imprime en la consola el resultado de la multiplicación de los dos números.

// 3. **Dentro del primer callback:** Cuando se completa la primera multiplicación, se llama a `multiplicar(2, 2, callback)` para multiplicar 2 por 2. Esto está anidado dentro del primer callback. Nuevamente, se proporciona una función de callback que imprimirá el resultado de la multiplicación en la consola.

// 4. **Dentro del segundo callback:** Cuando se completa la segunda multiplicación, se llama a `multiplicar(3, 2, callback)` para multiplicar 3 por 2. Esto está anidado dentro del segundo callback. Se proporciona una función de callback que imprimirá el resultado de la multiplicación en la consola.

// 5. **Salida en la consola:** Finalmente, cada vez que se completa una multiplicación, se imprime el resultado en la consola. Como las funciones `multiplicar` tienen tiempos de espera aleatorios, el orden exacto en que se imprimen los resultados puede variar.

// En resumen, este código muestra cómo se pueden ejecutar múltiples tareas asíncronas secuencialmente utilizando callbacks anidados en JavaScript.


// -------------------------------------------------




