// los métodos .post(), .put(), y .delete() en una aplicación que interactúa con MongoDB 

// Método .post()
// El método .post() se utiliza para crear un nuevo recurso en la base de datos. 

// Método .put()
// El método .put() se utiliza para actualizar un recurso existente en la base de datos. 

// Método .delete()
// El método .delete() se utiliza para eliminar un recurso de la base de datos. 

//--/////////////////////////////////////--//

// aplicacion para hacer peticiones con distintos metodos o simular los metodos, puedo probar datos para ver si funcionan o  no.
// Diseñar APIs: Ayuda a definir cómo deben comportarse los diferentes endpoints de una API.
// Probar APIs: Permite realizar solicitudes HTTP y ver las respuestas para verificar la funcionalidad de una API.
// Documentar APIs: Genera documentación que describe cómo interactuar con una API.
// Automatizar pruebas: Facilita la creación de suites de pruebas automatizadas para asegurar que una API se comporte correctamente.
// Colaborar en equipo: Permite a los equipos trabajar juntos en el diseño, prueba y documentación de APIs.
// Monitorizar APIs: Ayuda a asegurar que una API esté disponible y funcionando correctamente en todo momento.

// https://www.postman.com/

// En resumen, Postman es una herramienta poderosa para cualquier desarrollador que trabaje con APIs, proporcionando una plataforma unificada para diseñar, probar, documentar, y colaborar en el desarrollo de APIs.

//--/////////////////////////////////////--//

// aplicaciones similares:

// https://apidog.com/

// https://insomnia.rest/

/*/--////////////////////////////--/*/

// Importa el módulo Express, que es un framework web para Node.js
const express = require('express');
// Crea una instancia de la aplicación Express
const app = express();

// Importa las funciones para conectar y desconectar de MongoDB desde un archivo externo
const { connectToMongoDB, disconnectToMongoDB } = require('./src/mongoDB');

// Middleware para interpretar cuerpos de solicitudes como JSON
app.use(express.json());

// Middleware para establecer el encabezado Content-Type de las respuestas a 'application/json; charset=utf-8'
app.use((req, res, next) => {
    res.header('Content-Type', 'application/json; charset=utf-8');
    next();
});

// Define una ruta para la raíz del sitio ('/')
// Esta ruta responde con un mensaje de "Hola"
app.get('/', (req, res) => {
    res.status(200).end("Hola");
});

// Define una ruta para obtener todas las frutas ('/frutas')
// Esta ruta maneja solicitudes GET
app.get('/frutas', async (req, res) => {
    // Conecta a la base de datos MongoDB
    const client = await connectToMongoDB();
    // Selecciona la base de datos 'sample_mflix'
    const db = client.db('sample_mflix');
    // Obtiene todos los documentos de la colección 'frutas' y los convierte a un array
    const frutas = await db.collection('frutas').find().toArray();
    // Desconecta de la base de datos
    await disconnectToMongoDB();
    // Envía la lista de frutas como respuesta en formato JSON
    res.json(frutas);
});

// Define una ruta para obtener una fruta por ID ('/frutas/:id')
// Esta ruta maneja solicitudes GET
app.get('/frutas/:id', async (req, res) => {
    // Obtiene el ID de la fruta desde los parámetros de la ruta y lo convierte a entero
    const frutaId = parseInt(req.params.id) || 0;
    // Conecta a la base de datos MongoDB
    const client = await connectToMongoDB();
    // Maneja el caso en que la conexión falle
    if (!client) {
        res.status(500).send("error client");
        return;
    }
    // Selecciona la base de datos 'sample_mflix'
    const db = client.db('sample_mflix');
    // Busca un documento en la colección 'frutas' que tenga el ID especificado
    const fruta = await db.collection('frutas').findOne({ id: frutaId });
    // Desconecta de la base de datos
    await disconnectToMongoDB();
    // Envía un mensaje de error si no se encuentra la fruta, o la fruta como respuesta en formato JSON
    !fruta ? res.status(404).send("no existe esa fruta") : res.json(fruta);
});

// Define una ruta para crear una nueva fruta ('/frutas')
// Esta ruta maneja solicitudes POST
app.post('/frutas', async (req, res) => {
    // Obtiene la nueva fruta desde el cuerpo de la solicitud
    const nuevaFruta = req.body;
    // Verifica si el cuerpo de la solicitud está vacío
    if (Object.keys(nuevaFruta).length === 0) {
        res.status(404).send("error en el formato de los datos");
        return;
    }
    // Conecta a la base de datos MongoDB
    const client = await connectToMongoDB();
    // Maneja el caso en que la conexión falle
    if (!client) {
        res.status(500).send("error client");
        return;
    }
    // Selecciona la colección 'frutas' en la base de datos 'sample_mflix'
    const collection = client.db("sample_mflix").collection("frutas");
    // Inserta la nueva fruta en la colección
    collection.insertOne(nuevaFruta)
        .then(response => res.status(201).json(nuevaFruta))  // Responde con la fruta creada y un código 201
        .catch(error => res.status(500).send("error al crear el registro"))  // Maneja errores de inserción
        .finally(async () => { await disconnectToMongoDB() });  // Desconecta de la base de datos al finalizar
});

// Define una ruta para modificar una fruta existente ('/frutas/:id')
// Esta ruta maneja solicitudes PUT
app.put("/frutas/:id", async (req, res) => {
    // Obtiene el ID de la fruta y los nuevos datos desde los parámetros de la ruta y el cuerpo de la solicitud
    const id = parseInt(req.params.id) || 0;
    const nuevosDatos = req.body;
    // Verifica si los nuevos datos están vacíos
    if (Object.keys(nuevosDatos).length === 0) {
        res.status(422).send("Error en el formato de los datos");
        return;
    }
    // Conecta a la base de datos MongoDB
    const client = await connectToMongoDB();
    // Maneja el caso en que la conexión falle
    if (!client) {
        res.status(500).send("Error client");
        return;
    }
    // Selecciona la colección 'frutas' en la base de datos 'sample_mflix'
    const collection = client.db("sample_mflix").collection("frutas");
    // Actualiza el documento en la colección con los nuevos datos
    collection.updateOne({ id }, { $set: nuevosDatos })
        .then((response) => res.status(200).json(nuevosDatos))  // Responde con los nuevos datos y un código 200
        .catch((error) => res.status(500).send("Error al actualizar el registro"))  // Maneja errores de actualización
        .finally(async () => { await disconnectToMongoDB(); });  // Desconecta de la base de datos al finalizar
});

// Define una ruta para eliminar una fruta existente ('/frutas/:id')
// Esta ruta maneja solicitudes DELETE
app.delete("/frutas/:id", async (req, res) => {
    // Obtiene el ID de la fruta desde los parámetros de la ruta
    const id = parseInt(req.params.id) || 0;
    // Verifica si el ID está presente en los parámetros
    if (!req.params.id) {
        res.status(422).send("Error en el formato de los datos");
        return;
    }
    // Conecta a la base de datos MongoDB
    const client = await connectToMongoDB();
    // Maneja el caso en que la conexión falle
    if (!client) {
        res.status(500).send("Error client");
        return;
    }
    // Selecciona la colección 'frutas' en la base de datos 'sample_mflix'
    const collection = client.db("sample_mflix").collection("frutas");
    // Elimina el documento de la colección por ID
    collection.deleteOne({ id })
        .then((response) => {
            // Responde con un mensaje adecuado dependiendo de si se eliminó algún documento
            if (response.deletedCount === 0) {
                res.status(404).send(`No existe el registro con ID: ${id}`);
            } else {
                res.status(202).send("Registro eliminado");
            }
        })
        .catch((error) => res.status(500).send("Error al borrar el registro"))  // Maneja errores de eliminación
        .finally(async () => { await disconnectToMongoDB(); });  // Desconecta de la base de datos al finalizar
});

// Define el puerto en el que la aplicación escuchará las solicitudes
const PORT = process.env.PORT || 3000;

// Inicia el servidor en el puerto definido y muestra un mensaje en la consola
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));


// Desglose del Código:

// Importaciones y Configuraciones Iniciales:
// Se importa express para crear la aplicación web.
// Se importan funciones personalizadas para conectar y desconectar de MongoDB.

// Middlewares:
// express.json(): Middleware que convierte el cuerpo de las solicitudes en JSON.
// Un middleware personalizado para establecer el encabezado Content-Type de todas las respuestas.

// Rutas:
// GET /: Responde con "Hola".
// GET /frutas: Conecta a MongoDB, obtiene todas las frutas de la colección frutas, desconecta y envía las frutas como JSON.
// GET /frutas/:id: Conecta a MongoDB, busca una fruta por ID, desconecta y envía la fruta encontrada o un mensaje de error si no se encuentra.
// POST /frutas: Conecta a MongoDB, inserta una nueva fruta, desconecta y envía la fruta creada o un mensaje de error si falla.
// PUT /frutas/:id: Conecta a MongoDB, actualiza una fruta existente por ID, desconecta y envía los nuevos datos o un mensaje de error si falla.
// DELETE /frutas/:id: Conecta a MongoDB, elimina una fruta por ID, desconecta y envía un mensaje adecuado dependiendo del resultado.

// Inicio del Servidor:
// Define el puerto en el que la aplicación escuchará y lanza el servidor mostrando un mensaje en la consola con la URL.

// Este código implementa un servidor API RESTful utilizando Express.js y MongoDB, con operaciones CRUD para gestionar


