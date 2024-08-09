console.log("Hola mundo");

// Variables: Un contenedor en el que yo le voy a poner un nombre para guardar algo ahi adentro, como si fuera una caja que le voy a poner un rotulo y guardo una sola cosa, solo se puede guardar una sola cosa. Como es una Variable puedo cambiarle el valor cuando lo necesite.

// Creo una variable para contener algo: un dato, UN VALOR. Las variables se realizan a traves de la palabra LET. 

// Dos formas de escribir la variable:

// 1.Creo la variable y despues le asigno un valor:
// let nombreCurso;
// nombreCurso = "Diplomatura Backend";

// 2.Creo la variable y al mismo tiempo que la creo le agrego un valor. 
let nombreCurso = "Diplomatura Backend";

// los tipos de datos que mas utilizamos al crear variables son:

// string: cadena de texto:
let nombreCompleto = "Magalí";
let apellidoCompleto = "Guerzoni";

// number: enteros o decimales:
let edad = 36;

// boolean: devuelve un verdadero o falso:
let inicioSesion = false;
let esMenor = (44 > 50); 
// 44 es mayor a 50: False }

// Cuando ejecuto en la consola lo que esta entre comillas me aparece el texto porque es un string y cuando pongo solo el nombre de la variable sin comillas me ejecutara el valor de esa variable:
console.log("edad");
console.log(edad);
//  ejecuto en la terminal escribiendo node seguido del nombre del archivo: en este caso: app.js Quedaria: node app.js 

// CONSTANTES: Son un tipo de variable pero su valor no puede cambiar "es constante a lo largo del ciclo de la aplicacion"
// a las constantes a diferencias de las variables es obligatorio asignarles un valor al crearlas.

const PI = 3.1416;
console.log(PI);

// Declarar las variables necesarias para guardar nombre, apellido, edad. Luego mostrar por consola la información en este formato: Mi nombre es Juan Pérez y tengo 33 años.

// ejemplo 1: no se pueden usar comillas simples o dobles para concatenar de esta forma, solo comillas invertidas:
console.log(`Mi nombre y mi apellido es ${nombreCompleto} ${apellidoCompleto} y tengo ${edad} años`);

// ejemplo 2: 
console.log('Mi nombre es', nombreCompleto, apellidoCompleto, 'y tengo', edad, 'años');

// ejemplo 3:
let respuestaFinal = "mi nombre es " + nombreCompleto + " " + apellidoCompleto + " y tengo " + edad + " años"; 
console.log(respuestaFinal);

