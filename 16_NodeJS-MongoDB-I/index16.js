// Express JS y MongoDB: internamente en cada peticion que se busque obtener datos de MongoDB, debemos tambien definir una serie de pasos para dar con ellos:
// -> conectarnos al motor/cluster de MongoDB
// -> acceder a la base de datos
// -> acceder a la coleccion
// -> capturar la informacion de respuesta
// -> desconectarnos del motor/cluster

// la estructura base de nuestro servidor web Express es igual que siempre, con el agregado de que ahora debemos importar el archivo a conexion y desconexion al cluster de MongoDB. 

const express = require('express');
const app = express();

const { connectToMongoDB, disconnectToMongoDB} = require('./src/mongoDB');

//--///////////////////////////--//
// como trabajaremos con datos en formato JSON por doquier, definiremos un Middleware global para todos los endpoint de nuestra aplicacion, el cual se ocupara de establecr el charset en formato utf-8. De esta forma, garantizamos el soporte de caracteres extendidos de forma global para todos los datos a visualizar: 

app.use((req, res, next) => {
    res.header('Content-Type', 'application/json; charset=utf-8');
    next();
});

//--///////////////////////////--//
// la ruta principal de nuestra aplicacion de servidor sera como siempre la ruta de bienvenida, enviando un mensaje basico 
app.get('/', (req, res) => {
    res.status(200).end("Hola");
});

//--///////////////////////////--//
// definimos dos rutas en nuestro servidor web, dentro de ambas, estableceremos la estructura de conexio al cluster, base de datos, coleccion, para finalmente retornar los datos obtenidos:

// /frutas (trae todas las frutas)
// dentro de la primera ruta definimos la conexion al cluster el cual retorna un objeto clint. A traves de este definimos un objeto db para conectarnos a la base de datos correspondiente y dentro de esta a la coleccion frutas, con el cual deseamos interactuar:


// Se define una ruta GET en la aplicación Express para el endpoint /frutas. La función manejadora de esta ruta es asincrónica, lo que permite el uso de await dentro de ella.
app.get('/frutas', async (req, res) => {
    // Se conecta a la base de datos MongoDB
    const client = await connectToMongoDB();
    
    // Se selecciona la base de datos específica llamada 'sample_mflix'
    const db = client.db('sample_mflix');
    
    // Se obtiene la colección 'frutas' y se recuperan todos los documentos en un array
    const frutas = await db.collection('frutas').find().toArray();
    
    // Se desconecta de la base de datos MongoDB
    await disconnectToMongoDB();
    
    // Se envía la lista de frutas en formato JSON como respuesta al cliente
    res.json(frutas);
});

// /frutas/:id (trae una fruta en particular)
// la misma estructura aplicamos para buscar un documento a partir del parametro recibido por URL. En este caso, debemos almacenar el parametro recibido en na variable o constante, para luego aplicar el metodo de filtrado correspondiente. 

// Definición de una ruta GET para el endpoint '/frutas/:id'
app.get('/frutas/:id', async (req, res) => {
    // Se obtiene el parámetro 'id' de la URL y se convierte a un número entero
    const frutaId = parseInt(req.params.id) || 0;
    
    // Se conecta a la base de datos MongoDB
    const client = await connectToMongoDB();
    if (!client) { 
        res.status(500).send("error client"); //para manejo de error
        return;
    };
    
    // Se selecciona la base de datos específica llamada 'sample_mflix'
    const db = client.db('sample_mflix');
    
    // Se busca un documento en la colección 'frutas' que tenga el campo 'id' igual a frutaId
    const fruta = await db.collection('frutas').findOne({id: frutaId});

    // Se desconecta de la base de datos MongoDB
    await disconnectToMongoDB();
    
    // Se envía la fruta encontrada en formato JSON como respuesta al cliente
    
    !fruta ? res.status(404).send("no existe esa fruta") : res.json(fruta);
});

//--///////////////////////////--//

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));



