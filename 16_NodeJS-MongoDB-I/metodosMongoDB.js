// MongoDB cuenta con una serie de metodos que nos facilitaran acceder a la base de datos y sus colecciones. Algunos de ellos son:

// 3. .db()
// El método .db() se utiliza para seleccionar una base de datos.

// Ejemplo:

async function getDatabase() {
    // Seleccionar la base de datos 'mi_base_de_datos'
    const db = client.db('mi_base_de_datos');
    console.log('Base de datos seleccionada:', db.databaseName);
    return db;
};

//--///////////////////////////////--//
// 4. .collection()
// El método .collection() se utiliza para seleccionar una colección dentro de una base de datos.

// Ejemplo:

async function getCollection() {
    const db = await getDatabase();
    // Seleccionar la colección 'mi_coleccion'
    const collection = db.collection('mi_coleccion');
    console.log('Colección seleccionada:', collection.collectionName);
    return collection;
}

//--///////////////////////////////--//
// 5..find()
// El método .find() se utiliza para recuperar múltiples documentos de una colección que coincidan con una consulta.

// Ejemplo:

async function findDocuments() {
    const collection = await getCollection();
    // Buscar todos los documentos en la colección
    const resultados = await collection.find().toArray();
    console.log('Documentos encontrados:', resultados);
    return resultados;
}

// Buscar documentos con una condición específica
async function findDocumentsWithCondition() {
    const collection = await getCollection();
    const query = { edad: { $gt: 25 } };
    const resultados = await collection.find(query).toArray();
    console.log('Documentos encontrados con la condición:', resultados);
    return resultados;
}

//--///////////////////////////////--//
// 6. .findOne()
// El método .findOne() se utiliza para recuperar un solo documento de una colección que coincida con una consulta.

// Ejemplo:

async function findOneDocument() {
    const collection = await getCollection();
    // Buscar un solo documento en la colección
    const documento = await collection.findOne();
    console.log('Documento encontrado:', documento);
    return documento;
}

// Buscar un solo documento con una condición específica
async function findOneDocumentWithCondition() {
    const collection = await getCollection();
    const query = { nombre: 'Juan' };
    const documento = await collection.findOne(query);
    console.log('Documento encontrado con la condición:', documento);
    return documento;
}


// Resumen de todos los pasos en un solo ejemplo

// A continuación se muestra un ejemplo completo que incluye la conexión, selección de base de datos, selección de colección, búsqueda de documentos y cierre de conexión utilizando el driver de MongoDB para Node.js:

// const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function main() {
    try {
        // 1. Conectar al servidor MongoDB
        await client.connect();
        console.log('Conectado a MongoDB');

        // 2. Seleccionar la base de datos
        const db = client.db('mi_base_de_datos');
        console.log('Base de datos seleccionada:', db.databaseName);

        // 3. Seleccionar la colección
        const collection = db.collection('mi_coleccion');
        console.log('Colección seleccionada:', collection.collectionName);

        // 4. Encontrar múltiples documentos
        const query = { edad: { $gt: 25 } };
        const resultados = await collection.find(query).toArray();
        console.log('Documentos encontrados:', resultados);

        // 5. Encontrar un solo documento
        const documento = await collection.findOne({ nombre: 'Juan' });
        console.log('Documento encontrado:', documento);

    } catch (err) {
        console.error('Error:', err);
    } finally {
        // 6. Cerrar la conexión
        await client.close();
        console.log('Conexión cerrada');
    }
}

// Ejecutar la función principal
main();

// Este ejemplo muestra cómo establecer una conexión con MongoDB, seleccionar una base de datos y una colección, realizar búsquedas de documentos y cerrar la conexión utilizando el driver oficial de MongoDB para Node.js.