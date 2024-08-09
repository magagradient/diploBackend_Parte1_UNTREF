// los arrays de objetos son la estructura elegida por las aplicaciones cackend para intercambiar informacion con otras aplicaciones.

// cada datos de un array ocupa una posicion numerada conocida como indice. La primera posicion de un array siempre es 0.

// aca un array de elementos:
const nombres = ["Juan", "Maria", "Pedro", "Camila"];

// Para acceder a un elemento puntual de un array, nombramos al array y, dentro de los corchetes, escribimos el indice al cual queremos acceder:

// console.log(nombres[2]);

// ----------------------------------------------------------
// aca un array de objetos, tambien llamado array de objetos JSON:
// const datos = [1, 'a', true, "palabra", -23, 12.5];

// Metodos de arrays: para JS los arrays son un tipo especial de objetos. Por esta razon disponemos de muchos metodos muy utiles a la hora de trabajar con la informacion que hay adentro.
// Una funcion es un bloque de codigo que nos permite agrupar funcionalidad para usarla muchas veces. Cuando una funcion le pertenece a un objeto, en este caso nuestro array, la llamamos METODO:

// EL METODO .PUSH():
// 1. Recibe uno o mas elementos como parametros. 2. Retorna la nueva logintud del array. 

// nombres[4] = "violeta"; // Aquí se agrega el string "violeta" en la posición 4 del arreglo nombres. Esto expande el tamaño del arreglo y asigna "violeta" en esa posición.

// nombres[nombres.length] = "violeta"; // Este es un enfoque dinámico para agregar un elemento al final del arreglo nombres. nombres.length devuelve la longitud actual del arreglo (que es 4 en este caso), por lo que esto es equivalente a nombres[4] = "violeta". Se utiliza esta sintaxis para asegurar que se añada al final del arreglo sin importar cuántos elementos haya.

// console.log(nombres.push("violeta")); // Este código imprimirá en la consola el nuevo tamaño del arreglo nombres después de agregar el string "violeta" al final del arreglo utilizando el método push(). La función push() devuelve la nueva longitud del arreglo después de que se agregan los elementos. Por lo tanto, console.log(nombres.push("violeta")) imprimirá el número de elementos en el arreglo nombres después de agregar "violeta".

// nombres.push("violeta", "Roxana"); // El método push() se utiliza para agregar uno o más elementos al final de un arreglo. En este caso, se añaden los strings "violeta" y "Roxana" al final del arreglo nombres, aumentando la longitud del arreglo en 2. 

// ------------------------------------------------------------
// EL METODO .POP(): No recibe parametos y devuelve el elemento eliminado.
// tanto pop como el push agregan o sacan del final del array. 

// let nombre = nombres.pop(); // Este código elimina el último elemento del arreglo nombres y lo asigna a la variable nombre. El método pop() es utilizado para eliminar y retornar el último elemento de un arreglo. Por lo tanto, después de esta línea de código, la variable nombre contendrá el último elemento del arreglo nombres, y este elemento será eliminado del arreglo nombres.

// ------------------------------------------------------------
// shift lo opuesto al pop:

// let nombre = nombres.shift(); // Este código elimina el primer elemento del arreglo nombres y lo asigna a la variable nombre. El método shift() es utilizado para eliminar y retornar el primer elemento de un arreglo. Por lo tanto, después de esta línea de código, la variable nombre contendrá el primer elemento del arreglo nombres, y este elemento será eliminado del arreglo nombres.

// unshift opuesto al push: agrega uno o varios elementos al principio de un array. 1. Recibe uno o mas elementos como parametros. 2. Retorna la nueva longitud del array:

// nombres.unshift("violeta"); // Este código agrega el string "violeta" al principio del arreglo nombres utilizando el método unshift(). Después de esta línea de código, "violeta" será el primer elemento del arreglo nombres, y los elementos anteriores se moverán hacia la derecha en una posición.


// -------------------------------------------------
// -------------------------------------------------
// console.log(nombres.indexOf("Maria")); 
// console.log(nombres.indexOf("Mario")); // no esta devuelve -1
// Este código busca el índice del elemento "Maria" en el arreglo nombres utilizando el método indexOf(). Si "Maria" está presente en el arreglo, el método devuelve su índice (la posición donde se encuentra "Maria" en el arreglo). Si "Maria" no está presente en el arreglo, el método devuelve -1. Entonces, console.log(nombres.indexOf("Maria")) imprimirá el índice de "Maria" en el arreglo nombres si está presente, de lo contrario, imprimirá -1.

// .lastIndexOf() similar al .indexOf() con la salvedad de que empieza buscando el elemento por el final del array(de atras hacia adelante). En caso de haber elemntos repetidos, devuelve la posicion del primero que encuentre(o sea el ultimo si miramos desde el principio).

// console.log(nombre);
// console.log(nombres);

// const numeros = [3, 1, 4, 6, 8, 4, 9];

// Busca el índice del primer elemento "4" en el arreglo.
// console.log(numeros.indexOf(4)); // Imprimirá: 2
// Busca el índice del último elemento "6" en el arreglo.
// console.log(numeros.lastIndexOf(6)); // Imprimirá: 3

// indexOf(4): Devuelve el índice de la primera ocurrencia del elemento "4" en el arreglo numeros. Como "4" se encuentra en la posición 2 del arreglo (la primera ocurrencia), el resultado impreso será 2.
// lastIndexOf(6): Devuelve el índice de la última ocurrencia del elemento "6" en el arreglo numeros. Como "6" se encuentra en la posición 3 del arreglo (la última ocurrencia), el resultado impreso será 3.


// -----------------------------------------------
// -----------------------------------------------
// .INCLUDES() retorna un booleano. 1.RECIBE un elemento a buscar en el array. 2. RETORNA true si encontro lo que buscabamos, false en caso contrario.

// console.log(nombres.includes("Pedro")); // true
// console.log(nombres.includes("Magali")); // false


// .JOIN() une los elementos de un array utilizando el separador que le especifiquemos. Si no lo especificamos, utiliza comas. 1. RECIBE un separados (string), es opcional. 2 RETORNA un string con los elemntos unidos:

// console.log(nombres.join()); // Este código une todos los elementos del arreglo nombres en una cadena de texto, separando cada elemento por una coma por defecto y luego imprime esa cadena en la consola. Si nombres contiene, por ejemplo, ["Juan", "María", "Pedro"], la salida será: "Juan,María,Pedro".

// console.log(typeof nombres.join()); // Esta línea hace lo mismo que la primera, pero luego de unir los elementos en una cadena, evalúa y muestra el tipo de dato de esa cadena. En este caso, la salida sería: "string", ya que join() devuelve una cadena.

// console.log(nombres.join('|')); // Similar al primer ejemplo, pero en lugar de separar los elementos por coma, los separa por el carácter "|". Por lo tanto, si nombres contiene ["Juan", "María", "Pedro"], la salida sería: "Juan|María|Pedro".

// console.log(nombres.join(',  ')); //  Aquí, los elementos del arreglo nombres se unen en una cadena, pero esta vez se separan por una coma seguida de dos espacios. Por lo tanto, si nombres contiene ["Juan", "María", "Pedro"], la salida sería: "Juan, María, Pedro".

// -----------------------------------------------
// ----------------------------------------------- 
// METODO SLICE: devuelve una copia superficial de una porcion del array, especificada mediante el indice de inicio y fin:

// const mesa1 = nombres.slice(1, 3); // Este código crea una nueva variable llamada mesa1 que contiene una porción del arreglo nombres. El método slice() se utiliza para extraer una parte del arreglo, comenzando desde el índice especificado en el primer argumento (1 en este caso, que es el segundo elemento del arreglo) hasta el índice justo antes del segundo argumento (3 en este caso, que es el cuarto elemento del arreglo). Entonces, mesa1 contendría los elementos del arreglo nombres desde el segundo hasta el tercer elemento (indices 1 y 2), pero no incluyendo el cuarto elemento.

// console.log(mesa1); //  Aquí se imprime en la consola el contenido de la variable mesa1, que ahora es un nuevo arreglo que contiene los elementos seleccionados con el método slice(). Dependiendo de los elementos del arreglo nombres, mesa1 contendrá una porción de esos elementos según los índices especificados.

// console.log(nombres);

// -----------------------------------------
// ----------------------------------------------------

// https://javascript.info/array-methods#transform-an-array 
// splice parecido al push.
// recomendable sobre todo para cuando hay que agregar elementos en el medio del array. 

// const dias = ['Martes', 'Miercoles', 'Jueves', 'Viernes'];

// // Agrega 'Domingo' y 'Osvaldo' en la posición 4 del arreglo 'dias':
// dias.splice(4, 0, 'Domingo', 'Osvaldo');  // push

// // Imprime el elemento removido en la posición 2 del arreglo 'dias' y luego lo remueve:
// console.log(dias.splice(2, 1));  // delete

// // Agrega 'Lunes' al inicio del arreglo 'dias':
// dias.splice(0, 0, "Lunes"); // unshift

// // Remueve el elemento en la posición 2 del arreglo 'dias' y luego agrega 'Osvaldo' y 'Lunes' en esa posición:
// // dias.splice(2, 1, "Osvaldo", "Lunes"); // remplazar

// const indexFriday = dias.indexOf("Viernes"); // Busca el índice de la cadena "Friday" en el arreglo 'dias'
// // Comprueba si se encontró la cadena "Friday" en el arreglo 'dias':
// if (indexFriday != -1) {
//     // Si "Friday" se encuentra en el arreglo, se ejecuta esta parte del código
//     // Remueve el elemento en la posición 2 ('Viernes') y agrega 'Osvaldo' y 'Lunes' en esa posición
//     dias.splice(2, 1, "Osvaldo", "Lunes"); // remplazar
// };

// console.log(dias);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// ------------------------------------------
// ------------------------------------------
// METODO CONCAT: este metodo se utiliza para combinar dos o mas arrays, creando un nuevo array resultante. No modifica los arrays originales. 

const letras = ["a", "b", "c"];
const otrasLetras = ["d", "e"];

// Se utiliza el método concat() para concatenar los arreglos 'letras', 'otrasLetras' y un nuevo arreglo ["f", "j"]
const alfabeto = letras.concat(otrasLetras, ["f", "j"]); 

console.log(alfabeto);

// Se tienen dos arreglos, 'letras' y 'otrasLetras'.
// Se utiliza el método concat() para concatenar estos dos arreglos junto con otro arreglo que contiene las letras "f" y "j".
// El resultado de la concatenación se guarda en el arreglo 'alfabeto'.
// Finalmente, se imprime el arreglo 'alfabeto' en la consola, que contendrá todos los elementos de 'letras', 'otrasLetras', "f" y "j", en ese orden.

// ----------------------------------------------
// ----------------------------------------------
// METODO SORT: ordena de manera alfabetica, se basa en el codigo ASCII:

// https://elcodigoascii.com.ar/

// Este código tiene dos partes importantes. Primero, se define una función llamada compareFn que compara dos valores a y b. Luego, se usa el método sort() para ordenar el arreglo numeros de forma descendente utilizando una función de comparación que compara los valores a y b:

const numeros = [4, 10, 2, 100, 60, 6, 1, 9, 15]; // Se define un arreglo de números

// Se define una función de comparación llamada 'compareFn'
function compareFn(a, b) {
    if (a < b) {
        return -1; // Si 'a' es menor que 'b', devuelve -1
    } else if (a > b) {
        return 1; // Si 'a' es mayor que 'b', devuelve 1
    }
    return 0; // Si son iguales, devuelve 0
}

// funcion para reemplazar la funcion de arriba de una manera mas simple(osea cumple la misma funcion):
// Se utiliza el método 'sort()' para ordenar el arreglo 'numeros' de forma descendente
// Se utiliza una función de comparación que resta 'b' de 'a' para ordenar en forma descendente.
console.log(numeros.sort((a, b) => b - a));

// metodo REVERSE que invierte el valor (se invierte el array)
console.log(numeros.sort((a, b) => b - a).reverse()); 

// Se tiene un arreglo de números llamado numeros.
// Se define una función de comparación llamada compareFn, pero no se utiliza en este código.
// Se utiliza el método sort() para ordenar el arreglo numeros de forma descendente. Se proporciona una función de comparación que resta b de a, lo que ordena los números de mayor a menor.
// El arreglo ordenado se imprime en la consola.

// BUSCAR METODOS DE ORDENACION YA OPTIMIZADOS PARA USARLOS. 


