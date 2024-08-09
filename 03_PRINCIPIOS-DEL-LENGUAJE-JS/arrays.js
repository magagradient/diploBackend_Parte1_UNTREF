// Array es una estructura de datos donde yo puedo tener varios valores con un mimsmo nombre:

// en una array se pueden mezclar tipos de datos.

const paises = ["Argentina", "Uruguay", "Francia"];

// console.log(paises);
// console.log(paises[0]);
// console.table(paises)


const usuario = ["Juan", 33, true];
// console.log(usuario[1], usuario.length);

// usuario[usuario.length] = "Perez";
// usuario[3] = "Perez";

// El push agerega un elemento al final del array.
usuario.push("Perez");

console.log(usuario, usuario.length);

// quede en el minuto 52 de la clase


// El pop saca un elemento al final.

let apellido = usuario.pop();

console.log(usuario, usuario.length, apellido);

// no se usa tanto el shift y el unshift, se una mas el push y el pop para quitar o agregar elementos. 

// funciones de orden superior es una funcion que recibe como parametro otra funcion o devuelve una funcion. 




