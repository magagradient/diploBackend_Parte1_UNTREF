// ------------------------------
// Trabajo con Directorios/Carpetas:
// el mismo modulo FilesSystem nos permite trabajar con carpetas o directorios del servidor.

// ////////////////////////////////////////////
// Crear un directorio: el metodo .mkdir() nos permite realizar esta tarea. 

// Importamos el módulo 'path' de Node.js, que proporciona utilidades para trabajar con rutas de archivos y directorios.
const path = require('path');

// Importamos el módulo 'fs' (File System) de Node.js, que proporciona métodos para interactuar con el sistema de archivos del sistema operativo.
const fs = require('fs');

// Definimos la ruta del directorio que queremos crear. __dirname es una variable global de Node.js que contiene la ruta del directorio actual del script en ejecución.

// const folderPath = path.join(__dirname, "prueba");

// Utilizamos el método mkdir de fs para crear el directorio. Recibe dos argumentos: la ruta del directorio a crear y una función de callback que se ejecutará una vez que se complete la operación.

// fs.mkdir(folderPath, (error) => {
//     // Verificamos si ocurrió algún error durante la creación del directorio.
//     if (error) {
//         // Si hay un error, lo mostramos en la consola.
//         return console.error(error);
//     }
//     // Si no hay errores, mostramos un mensaje indicando que la carpeta se ha creado exitosamente.
//     console.log("Carpeta creada");
// });

// En resumen, este código crea un directorio llamado "prueba" dentro del directorio actual del script en ejecución. Si la operación de creación es exitosa, imprime "Carpeta creada" en la consola. Si hay algún error durante la operación, muestra el error en la consola.

// ----------------------------------------------------
// el metodo .raddir() permite realizar una lectura del contenido especificado.
// como respuesta nos devuelve un array de nombres de archivos y directorios, a traves de la variable 'files'. Si ocurre un error al leer el directorio, se muestra un mensaje en la consola. 

// asincronico por el callback 
// fs.readdir(folderPath, (error, files) => {
//     if (error) {
//         return console.error(error);
//     }
//     console.log(files);
// });

// sincronicamente, la aplicacion se detiene hasta que termine este proceso: por eso es mejor usar la opcion de arriba. 

// const files = fs.readdirSync(folderPath);
// console.log(files);

// ------------------------------------------------------
// metodo .rename()

// fs.rename(folderPath, "nueva-prueba", (error) => {
//     if(error) {
//         return console.error(error);
//     };
//     console.log("nombre cambiado");
// });

// -----------------------------------------------------
// metodo .rmdir() -----> para borrar carpeta. 

const folderPath = path.join(__dirname, "nueva-prueba"); 

// metodo si la carpeta esta vacia:

// fs.rmdir(folderPath, (error) => {
//     if(error) {
//         return console.error(error);
//     }
//     console.log("carpeta borrada");
// });

// metodo si la carpeta tiene contenido:
// para usar el recursive es recomendable no usar .rmdir como en el ejemplo de arriba, si no que es preferible usar el .rm:

fs.rm(folderPath, { recursive: true}, (error) => {
    if(error) {
        return console.error(error);
    }
    console.log("carpeta borrada");
});

// ---------------------------------------------------------




















