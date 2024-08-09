// pagina principal del sitio, lo primero que se pide: http://localhost:3000/ (esa barra (/) final que aparece en la ulr es la primera que debemos solicitar) (en el navegador no aparece pero cuando lo copiamos y lo pegamos si)
// y por segundo aparece el /favicon.ico, siempre va a pedir esas dos cosas el navegador. 

const http = require("http"); // Importa el módulo 'http' para crear un servidor HTTP.
const url = require("url"); // Importa el módulo 'url' para analizar las URL de las solicitudes.
const fs = require("fs"); // Importa el módulo 'fs' para interactuar con el sistema de archivos.
const path = require("path"); // Importa el módulo 'path' para trabajar con rutas de archivos.

// http://localhost:3000/

const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url, true); // Analiza la URL de la solicitud y la convierte en un objeto.

    //   console.log(req.url, parseUrl.pathname, parseUrl.query, req.method);

    // /frutas/all

    // /frutas/id/1
    // /frutas/id/5
    //   console.log(parseUrl.pathname.match(/^\/frutas\/id\/(\d+)$/i));

    if (parseUrl.pathname === "/") { // Verifica si la ruta es la raíz ("/").
        try {
            const pathFile = path.join(__dirname, "public", "index.html"); // Construye la ruta completa del archivo 'index.html'.
            const html = fs.readFileSync(pathFile); // Lee el archivo 'index.html' de forma síncrona.

            res.writeHead(200, { "Content-Type": "text/html" }); // Establece el código de estado 200 (OK) y el tipo de contenido a 'text/html'.
            res.end(html); // Envía el contenido del archivo 'index.html' como respuesta.
        } catch (error) {
            res.writeHead(500, { "Content-Type": "text/plain" }); // Establece el código de estado 500 (Internal Server Error) y el tipo de contenido a 'text/plain'.
            res.end("Error en el servidor"); // Envía un mensaje de error como respuesta.
        }
    } else if (parseUrl.pathname === "/frutas/all") { // Verifica si la ruta es '/frutas/all'.

        // const frutas = require("./frutas.json");

        const pathFile = path.join(__dirname, "frutas.json"); // Construye la ruta completa del archivo 'frutas.json'.
        const JSONFrutas = fs.readFileSync(pathFile, "utf-8"); // Lee el archivo 'frutas.json' de forma síncrona.

        // console.log(frutas);

        res.writeHead(200, { "Content-Type": "application/json" }); // Establece el código de estado 200 (OK) y el tipo de contenido a 'application/json'.
        res.end(JSONFrutas); // Envía el contenido del archivo 'frutas.json' como respuesta.
    } else if (parseUrl.pathname.match(/^\/frutas\/id\/(\d+)$/i)) { // Verifica si la ruta coincide con el patrón '/frutas/id/[número]'.

        const pathArray = parseUrl.pathname.split("/"); // Divide la ruta en partes usando '/' como delimitador.
        const id = parseInt(pathArray[3]); // Convierte la parte correspondiente al ID en un número entero.
        console.log(id); // Imprime el ID en la consola para depuración.

        const pathFile = path.join(__dirname, "frutas.json"); // Construye la ruta completa del archivo 'frutas.json'.
        const jsonFrutas = fs.readFileSync(pathFile, "utf-8"); // Lee el archivo 'frutas.json' de forma síncrona.

        const arrayFrutas = JSON.parse(jsonFrutas); // Convierte el contenido del archivo 'frutas.json' en un objeto JavaScript.
        const fruta = arrayFrutas.find((arrayFruta) => arrayFruta.id == id); // Busca en el array de frutas el objeto que tiene el ID especificado.

        res.writeHead(200, { "Content-Type": "application/json" }); // Establece el código de estado 200 (OK) y el tipo de contenido a 'application/json'.
        res.end(JSON.stringify(fruta)); // Envía el objeto de la fruta encontrada como respuesta en formato JSON.
    } else { // Si la ruta no coincide con ninguna de las anteriores.

        res.writeHead(404, { "Content-Type": "text/plain" }); // Establece el código de estado 404 (Not Found) y el tipo de contenido a 'text/plain'.
        res.end("La pagina no existe"); // Envía un mensaje indicando que la página no existe.
    }
});

const PORT = 3000; // Define el puerto en el cual el servidor escuchará las solicitudes HTTP.

server.listen(PORT, () => console.log(`http://localhost:${PORT}`)); // Hace que el servidor empiece a escuchar en el puerto especificado (3000) y muestra en la consola la dirección URL del servidor.
