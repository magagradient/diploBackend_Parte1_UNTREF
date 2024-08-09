// FileSystem API: el modulo fs integrado en Node.js proporciona una API para interactuar con el sistema de archivos del servidor. Dentro de todas sus prestaciones, podemos destacar la creacion, escritura, modificacion y eliminacion de archivos dentro de un S.O. Nuestras pruebas y ejemplos se enfocaran integramente dentro de un proyecto Node.js.  
// Una vez declarado este modulo cuenta con un monton de metodos JS, los cuales nos facilitan realizar todo tipo de interaccion sobre un archivo, o varios, integrados mayormente en nuestro proyecto.

// readFile() nos permite leer el contenido de un archivo
// writeFile() nos permite escribir dentro de un archivo plano, el contenido que necesitamos volcar
// appendFile() nos permite agregar contenido dentro de un archivo ya creado, respetando lo que este tenga previamente almacenado.
// unlink() Elimina el archivo que le indiquemos. Debemos tener precaucion siempre que utilicemos este metodo, porque es irrecuperable la accion en cuestion.

const { error } = require('console');
const fs = require('fs');
const path = require('path');

// este metodo fs recibe tres parametros en cuestion: 1.El nombre del archivo a crear. 2.El texto que deseamos agregar y 3.un callback que controla el exito de la operacion y cualquier posible error:

const filePath = path.join(__dirname, 'archivo.txt');

// fs.writeFile(filePath, "Hola mundo File", (error) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("Archivo file creado");
//     }
// });

// Ejemplo 2 modificado con return:

// fs.writeFile(filePath, "Hola mundo File", (error) => {
//     if (error) {
//         return console.log(error);
//     }
//     console.log("Archivo file creado");
// }
// );

// La diferencia entre los dos bloques de código radica en el uso del `return`. Ambos bloques realizan la misma tarea: escribir "Hola mundo File" en un archivo especificado por `filePath` utilizando la función `fs.writeFile()` de Node.js. Sin embargo, la diferencia está en cómo manejan el control de flujo después de completar la operación de escritura.

// En el primer bloque de código, el `console.log("Archivo file creado");` se encuentra fuera del bloque `else`. Esto significa que se ejecutará independientemente de si hay un error o no. Si no hay errores, se imprimirá "Archivo file creado", pero si hay un error, se imprimirá el mensaje de error y luego "Archivo file creado".

// En el segundo bloque de código, se usa `return` dentro del bloque de manejo de errores. Esto tiene un efecto sutil pero importante. Cuando se ejecuta `return` dentro de un bloque de función de devolución de llamada, la ejecución de esa función de devolución de llamada se detiene inmediatamente y se devuelve el control al llamador, en este caso, a la función `fs.writeFile()`. Esto significa que si hay un error, se imprimirá el mensaje de error y la ejecución de la función de devolución de llamada se detendrá inmediatamente, evitando que se ejecute `console.log("Archivo file creado");`. Si no hay errores, se ejecutará `console.log("Archivo file creado");` después de que `fs.writeFile()` haya completado con éxito la escritura del archivo.

// En resumen, el uso del `return` en el segundo bloque de código permite un control más preciso del flujo de ejecución, asegurándose de que el código posterior solo se ejecute cuando no haya errores.

// ---------------------------------------------------
// Cear un archivo: 
// el metodo .existsSync() nos permite validar, retornando un valor booleano, si un archivo existe o no.

// function fileExists(filePath) {
//     const existe = fs.existsSync(filePath);
//     console.log("fn", existe);
//     return existe ? true : false;
// }

// resumen de la funcion de arriba: (funcion para saber si el archivo existe o no)

function fileExists(filePath) {
    return fs.existsSync(filePath);
};

function crearArchivo(filePath, content) {
    if (fileExists(filePath)) {
        console.log("el archivo existe");
    } else {
        fs.writeFile(filePath, content, (error) => {
            if (error) {
                return console.log(error);
            }
            console.log("Archivo file creado");
        });
    };
};

crearArchivo(filePath, "Hola mundo");

console.log('script', fileExists(filePath));

// Este código consiste en dos funciones:

// 1. **`fileExists(filePath)`**: Esta función toma una ruta de archivo (`filePath`) como argumento y utiliza `fs.existsSync(filePath)` para verificar si el archivo existe en esa ruta. Retorna `true` si el archivo existe y `false` si no.

// 2. **`crearArchivo(filePath, content)`**: Esta función toma dos argumentos: la ruta del archivo (`filePath`) y el contenido que se desea escribir en el archivo (`content`). La función primero verifica si el archivo especificado por `filePath` ya existe utilizando la función `fileExists(filePath)`. Si el archivo existe, imprime "el archivo existe". Si el archivo no existe, utiliza `fs.writeFile(filePath, content, callback)` para crear el archivo y escribir el contenido en él. Si ocurre un error durante la escritura del archivo, se imprime el error en la consola. Si la escritura es exitosa, imprime "Archivo file creado".

// Luego, se llama a `crearArchivo(filePath, "Hola mundo")` con una ruta de archivo (`filePath`) y un contenido ("Hola mundo") como argumentos. Dependiendo de si el archivo ya existe o no, se imprimirá el mensaje correspondiente en la consola, o se creará el archivo con el contenido proporcionado.


// ----------------------------------------
// leer el archivo:

function leerArchivo(filePath) {
    fs.readFile(filePath, "utf-8", (error, content) => {
        if (error) {
            return console.error(error);
        }
        console.log(content);
    });
};

leerArchivo(filePath);

// --------------------------------------
// agregar contenido al archivo:

function agregarContenido(filePath, content) {
    fs.appendFile(filePath, content, (error) => {
        if (error) {
            return console.error(error);
        }
        console.log("contenido agregado");
    });
};

// agregarContenido(filePath, "\nalgo mas...") 

//   \ n es como un enter 

// ----------------------------------
// borrar el archivo:

function borrarArchivo(filePath) {
    fs.unlink(filePath, (error) => {
        if (error) {
            return console.error(error);
        }
        console.log("archivo borrado");
    });
}; 

// borrarArchivo(filePath);

// ------------------------
// FileSystem API en Node.js es muy util para realizar tareas de administracion de archivos y directorios en aplicaciones backend. 









