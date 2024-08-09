const dotenv = require('dotenv'); // Importa el módulo 'dotenv' para cargar variables de entorno desde un archivo .env

dotenv.config(); // Carga las variables de entorno definidas en un archivo .env en `process.env`

const express = require('express'); // Importa el módulo 'express' para crear una aplicación web con Node.js
const app = express(); // Crea una instancia de una aplicación Express

const path = require('path'); // Importa el módulo 'path' para manejar y transformar rutas de archivos

app.use(express.static(path.join(__dirname, "public"))); // Configura middleware para servir archivos estáticos desde el directorio "public"

app.get('/', (req, res) => { // Define una ruta GET para la raíz del sitio ('/')
    res.send("Hola Node.js"); // Envía una respuesta de texto cuando se accede a la raíz
});

app.get('/contacto', (req, res) => { // Define una ruta GET para '/contacto'
    res.send("Pagina de contacto"); // Envía una respuesta de texto cuando se accede a '/contacto'
});

const PORT = process.env.PORT || 3000; // Define el puerto en el cual la aplicación escuchará, usando la variable de entorno PORT o 3000 por defecto

app.listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT}`)); // Inicia el servidor y hace que escuche en el puerto definido, luego imprime la URL del servidor en la consola

// En resumen, este código configura una aplicación web básica con Node.js y Express, que sirve archivos estáticos desde un directorio "public" y define dos rutas: una para la raíz del sitio y otra para "/contacto". El puerto en el que escucha se define mediante una variable de entorno o por defecto en 3000.