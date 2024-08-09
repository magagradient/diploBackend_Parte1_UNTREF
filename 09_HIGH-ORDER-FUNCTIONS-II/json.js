// archivos JSON es un formato de texto utilizado para almacenar y transmitir datos estructurados.
// el nombr JSON es una sigla proveniente de JavaScript Object Notation. Se utiliza en muchos otros lenguajes de programacion. 
// esta formado por una coleccion de pares de clave/valor. Los datos se almacenan en un formato similar al de un objeto JavaScript, con propiedades y valores separados por dos putos (:) y cada par clave/valor por una coma (,).
// los datos tabien pueden estar anidados, permitiendo la creacion de estructuras de datos complejas. 

// objeto JavaScript (no objeto json): 
// const user = {
//     nombre: "Juan",
//     apellido: "Perez",
//     dni: 98765432,
//     admin: false,
//     info() {
//         return `Nombre: ${this.nombre} Apellido: ${this.apellido}`;
//     },
// };

// console.log(user);

// pasar el objeto de arriba a objeto JSON:

// const json = JSON.stringify(user);
// console.log(json); // devuelve: {"nombre":"Juan","apellido":"Perez","dni":98765432,"admin":false}

// volver a transformar el objeto json de arriba a un objeto de javascript: 

// const obj = JSON.parse(json);
// console.log(obj);

// en el formato JSON se utiliza la misma estructura de objetos y arrays que en javascript pero con la diferencia de que las claves y los valores se escriben entre comillas dobles y que no se permite el uso de comillas simples. Ademas el ultimo elemento de un objeto o array no debe tener una coma despues de el. 

// son ampliamente utilizados en aplicacions web para intercambiar datos entre el servidor y el cliente, ya que son faciles de leer y escribir, y son compatibles con la mayoria de los lenguajes de programacion. 

// ¿podemos editar archivos JSON desde Node.js?
// es posible su edicion, utilizando el modulo FileSystem de Node.js. Debemos trabajarlo combinando su lectura, conversion al formato de array de objetos, y luego de agregar o modificar sus elementos, volver a escribir el contenido actualizado en el archivo en cuestion. 

const fs = require('fs');

const json = fs.readFileSync('./data.json', "utf-8");

const users = JSON.parse(json);

console.log(users);

// devuelve: [
//   { nombre: 'Pedro', apellido: 'Garcia', dni: 98765432 },
//   { nombre: 'Maria', apellido: 'Perez', dni: 34567890 }
// ]

// es importante tener en cuenta que esta forma de utilizar un archivo JSON  como base de datos en una aplicacion Node.js puede no ser adecuada para aplicaciones de produccion con grandes cantidades de datos y multiples usuarios. En ese caso, se recomienda utilizar una base de datos real como MongoDB, MySQL o PostgreSQL.


