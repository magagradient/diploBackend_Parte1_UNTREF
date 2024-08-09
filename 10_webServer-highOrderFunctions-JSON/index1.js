// trabajo practico:
// DESARROLLO DE UNA APLICACION BACKEND:
// 1.creacion de un servidor(modulo HHTTP)
// 2.integracion de un archivo JSON(lectura)
// 3.contenido JSON a un array de objetos.
// 4.crear un controlador de rutas. 
// 5.servir contenido especifico a cada ruta.

// las rutas, o URL, esperadas deben ser las siguientes:
// / (1)
// /frutas/all
// /frutas/id:123
// /frutas/nombre/:nombre parcial o completo
// /frutas/existe/:nombre

// implementar el modulo HTTP y su metodo .createServer() para manejar las peticiones entrantes.
// el parametro request o req es esencial para procesar y responder las solicitudes entrantes en un servidor HTTP. Al acceder a sus propiedades y metodos, podemos obtener informacion sobre la solicitud y tomar decisiones en funcion a esa informacion. 

// 1:
// ESTO ES LO MINIMO QUE TIENE QUE TENER UN SERVIDOR WEB:

const http = require('http'); // Importa el módulo 'http' de Node.js, que permite crear un servidor HTTP.

// Crea un servidor HTTP utilizando el método 'createServer' del módulo 'http'.
// Este método recibe una función de callback que se ejecuta cada vez que el servidor recibe una solicitud (request).
const server = http.createServer((req, res) => {
    console.log(req.url); // Registra la URL de la solicitud entrante en la consola.
// Al añadir console.log(req.url);, logras que cada vez que el servidor reciba una solicitud, se registre la URL de esa solicitud en la consola. Esto te ayuda a entender qué rutas están siendo accedidas, lo cual es útil para la depuración y para obtener información sobre cómo se está utilizando tu servidor.

res.end("hola"); // Envía la respuesta "hola" al cliente que hizo la solicitud y finaliza la respuesta.
});

const PORT = 3000; // Define el puerto en el cual el servidor escuchará las solicitudes HTTP.

// Hace que el servidor empiece a escuchar en el puerto especificado (3000).
// Una vez que el servidor está listo para recibir solicitudes, ejecuta el callback que imprime la URL del servidor.
server.listen(PORT, () => console.log(`http://localhost:${PORT}`)); // Muestra en la consola la dirección URL del servidor.

/////////////////////////////////////////////////////





