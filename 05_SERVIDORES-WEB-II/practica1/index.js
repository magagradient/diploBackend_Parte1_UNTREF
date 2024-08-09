// el modulo path viene incluido dentro de node.js y proporciona un conjunto de metodos que permiten trabajar con rutas de archivos y directorios, de forma independienre al sistema operativo en el cual se ejecuta Node.js
// este modulo permite trabajar con rutas en formato de cadena y obtener informaccion sobre las mismas, como el nombre del directorio, el nombre de archivos, la extension del archivo entre otros.

// ruta para acceder al index.html a travez del metodo path:

const path = require('path');
const fs = require('fs');
const { isUtf8 } = require('buffer');
const filePath = path.join(__dirname, "public", "index.html");
// const ruta = path.join(__dirname, "public", "index.html");

// console.log(__dirname, ruta);

// el modulo fs corresponde al modulo FileSystem: este es un  modulo tambien integrado en Node.js, el cual proporciona un conjunto efectivo de metodos para trabajar con el sistema de archivos del sistema operativo en el que se ejecuta Node.js
//  su metodo .readFile() es clave cuando tenemos que leer un archivo especifico, por ejemplo, documento HTML y servirlo como respuesta.
// .readFile() toma dos argumentos: 1. el primero, corresponde a la ruta del archivo, 2. el seguno, es una funcion de devolucion que se ejecutara cuando se complete la lectura del archivo
// si ocurre algun error al leer el archivo, el primer argumento de la funcion de devolucion de llamada contendra un objeto error. 

fs.readFile(filePath, "utf-8", (err, content) => {
    if (err){
        console.error(err);
    } else {
        console.log(content);
    }
});

// manejo de errores: https://es.semrush.com/blog/codigos-de-estado-http/
// https://httpcats.com/

// __dirname es una variable la cual nos devuelve una ruta completa de carpetas y subcarpetas, partiendo como bae de la raiz del disco del sistema operativo donde node.js esta ejecutandose. Es parte de las variables de entorno de Node.js.




