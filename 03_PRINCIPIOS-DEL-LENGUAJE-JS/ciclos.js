// ciclos de iteracion: estos ciclos nos permiten repetir una tarea N cantidad de veces. Esta repeticion se realiza de manera controlada (de principio a fin) o de forma indefinida (hasta que alguien indique cuando terminar).

// ciclo for: tiene 3 partes separados por ; (punto y coma)

// for (let i = 0; i <= 3; i++) {
//     console.log(i);
// }

// ;; = bucle infinito, con dos puntos y comas se declara un ciclo infinito.

// const paises = ["Argentina", "Uruguay", "Francia", "Chile", "Canada"];

// for (let i = 0; i < paises.length; i++) {
//     console.log (paises[i]);
// }

// ciclo while se suele utilizar cuando no se sabe cuantas veces se va a ejecutar. En este caso el ciclo while ejecutara una tarea determinada, nunca, o repetidas veces.
// evalua una expresion la cual debe dar como resultado un valor booleano del tipo true, alli el ciclo while comienza a iterar y seguira haciendolo hasta tanto ese valor booleano cambie a false. Si no cambia su valor, lleva este ciclo a lo que se conoce como loop infinito. 

let i = 1;

while (i <= 10) {
    console.log(i);
    i++;

    if (i == 6) {
        break;
    }
}

// en la terminal apretando la flecha para arriba repite la linea que usuaste la ultima vez. 

const paises = ["Argentina", "Uruguay", "Francia", "Chile", "Canada"];

for (let i = 0; i < paises.length; i++) {
    if (paises[i] == "Chile"); {
    console.log("Pais encontrado");
    break;
    }
}

console.log(paises.indexOf("Chile"));

// ciclo continue

// funcion para que me muestre solo los numeros pares

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 1) {
        continue;
    }
    console.log(numeros[i]);
}




