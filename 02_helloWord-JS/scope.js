// SCOPE: es el ambito de esa variable, es decir donde existe esa variable.
// Se definde como SCOPE el alcance o ambito de una variable.

// ejemplo 1:
// el global
let num = 1;

// este es el local de esta funcion, el scope. 
// Cuando hay una llave lo que pasa ahi adentro pertenece a ese scope, como en el caso de esta funcion:
function mostrar() {
    let num = 2;
    console.log("linea 11", num);
}
mostrar();

console.log("linea 15", num);

// la ejecucion devuelve: 
// linea 11 2
// linea 15 1

// ejemplo 2: sin el global:

function mostrar2() {
    let nume = 4;
console.log("linea 25", nume);
}
mostrar2();

console.log("linea 29", nume);

// la ejecucion devuelve: 
// linea 25 4 pero el log fuera de la funcion me devuelve error. Osea solo devuelve el nume que esta adentro de la funcion, funciona solo en su propio ambito, no en el global.

// por lo que entiendo se puede usar variable con el mismo nombre mientras que estas esten ubicadas en distintos ambitos, lugares. En este caso una pertenece al ambito global (el scope global)y la otra a la funcion mostrar (scope mostrar). 

