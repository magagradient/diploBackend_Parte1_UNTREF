// el objeto Math en JavaScript proporciona propiedades y métodos para realizar operaciones matemáticas. Uno de sus métodos más utilizados es Math.random(), que genera un número pseudoaleatorio entre 0 (inclusive) y 1 (exclusive).

// Explicación de Math.random()
// Función: Math.random()
// Retorno: Un número decimal (de punto flotante) pseudoaleatorio en el rango [0, 1), lo que significa que puede ser 0 pero nunca 1.
// Uso: Comúnmente se utiliza para generar números aleatorios dentro de un rango específico al combinarlo con otros métodos de Math.

// Ejemplo Básico
// Generar un número aleatorio entre 0 y 1:

const randomNum = Math.random();
console.log(randomNum);  // Ejemplo de salida: 0.4567890123456789

// Generar un Número Aleatorio en un Rango Específico
// Para generar un número aleatorio en un rango específico, por ejemplo, entre min y max, puedes escalar y desplazar el resultado de Math.random().

const randomNum1 = Math.random() * 10;
console.log(randomNum1);  // Ejemplo de salida: 7.123456789012345

// Entre min y max
// Para generar un número aleatorio entre un valor mínimo (min) y un valor máximo (max), usa la siguiente fórmula:

function getRandomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

const randomNum2 = getRandomInRange(5, 15);
console.log(randomNum2);  // Ejemplo de salida: 9.234567890123456

// Generar un Número Entero Aleatorio en un Rango Específico
// Para obtener un número entero aleatorio dentro de un rango específico, por ejemplo, entre min y max (inclusive), puedes usar Math.floor() o Math.ceil() junto con Math.random().

// Entre min y max (inclusive)

function getRandomIntInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomInt = getRandomIntInRange(1, 100);
console.log(randomInt);  // Ejemplo de salida: 42

// Explicación de la Fórmula
// Math.random() * (max - min + 1): Genera un número decimal aleatorio en el rango [0, (max - min + 1)).
// Math.floor(...) + min: Ajusta el rango para empezar desde min y asegura que el valor final sea un número entero.

//*--/////////////////////////--*// 
// JSON WEB TOKEN:

// https://jwt.io/

// el cuerpo o estructura de un JWT esta compuesto por tres partes separadas por puntos ("."):
// 1. cabecera(header) (contine informacion sobre el tipo de token y el algoritmo de firma utilizado).
// 2. cuerpo (payload) (es la informacion adicional que se quiere transmitir, como ser: datos de usuario, permisos, o cualquier otro dato relevante).
// 3. firma(signature) (se utiliza para verificar que el mensaje no ha sido alterado durante la transimicion y para asegurar la autenticidad del remitente) ** (la firma se calcula utilizando la cabecera codificada en Base64Url, el cuerpo codificado en Base64Url, una clase secreta conocida solo por el servicio emisor y el algoritmo de firma especificado en la cabezera).

//*/--/////////////////////////--/*//
// DESCRIPCION POR LINEA DEL INDEX.JS ORIGINAL

require("dotenv").config(); // 1: Cargar las variables de entorno desde un archivo .env
const express = require('express'); // 2: Importar el módulo express
const app = express(); // 3: Crear una instancia de una aplicación express
const jwt = require('jsonwebtoken'); // 4: Importar el módulo jsonwebtoken para manejar tokens JWT
const secretKey = process.env.SECRET_KEY // 5: Obtener la clave secreta de las variables de entorno

const userToValidate = { // 6-10: Definir un objeto de usuario para validar las credenciales
    id: 6586, // 7: ID del usuario
    email: 'x@x.com', // 8: Correo electrónico del usuario
    password: 's5a4d4dda6' // 9: Contraseña del usuario
};

const { connectToMongoDB, disconnectToMongoDB } = require('./src/mongoDB'); // 11: Importar funciones para conectar y desconectar de MongoDB

app.use(express.json()); // 12: Middleware para parsear las solicitudes con JSON

app.use((req, res, next) => { // 13-17: Middleware para establecer el tipo de contenido en las respuestas
    res.header('Content-Type', 'application/json; charset=utf-8'); // 14: Establecer el encabezado Content-Type
    next(); // 15: Pasar al siguiente middleware
});

app.post('/login', (req, res) => { // 18: Definir la ruta POST /login
    const email = req.body.email; // 19: Obtener el email del cuerpo de la solicitud
    const password = req.body.password; // 20: Obtener la contraseña del cuerpo de la solicitud
    console.log(`Correo: ${email}, Contraseña: ${password}`); // 21: Imprimir las credenciales en la consola

    if (email === userToValidate.email && password === userToValidate.password) { // 22: Verificar las credenciales
        const token = jwt.sign({ id: userToValidate.id }, secretKey, { expiresIn: "1h" }); // 23: Firmar un token JWT si las credenciales son correctas

        res.json({ token }); // 24: Responder con el token
    } else { // 25: Si las credenciales son incorrectas
        res.status(401).json({ // 26: Responder con un estado 401 y un mensaje de error
            error: "Credenciales incorrectas" // 27: Mensaje de error
        });
    }
});

function verifyToken(req, res, next) { // 28: Definir una función middleware para verificar el token JWT
    const token = req.headers["authorization"] || null; // 29: Obtener el token de los encabezados de la solicitud

    if (token) { // 30: Si el token existe
        jwt.verify(token, secretKey, (error, decoded) => { // 31: Verificar el token
            if (error) { // 32: Si hay un error en la verificación
                res.status(401).json({ error: "Token invalido" }); // 33: Responder con un estado 401 y un mensaje de error
            } else { // 34: Si el token es válido
                req.decoded = decoded; // 35: Adjuntar los datos decodificados a la solicitud
                console.log(decoded); // 36: Imprimir los datos decodificados en la consola
                next(); // 37: Pasar al siguiente middleware
            }
        });
    } else { // 38: Si no se envió el token
        res.status(401).json({ error: "No se envio el token" }); // 39: Responder con un estado 401 y un mensaje de error
    }
};

app.get("/users/profile", verifyToken, (req, res) => { // 40: Definir la ruta GET /users/profile con verificación de token
    res.send("Perfil del usuario con el ID: " + req.decoded.id); // 41: Responder con el perfil del usuario
});

app.get('/', (req, res) => { // 42: Definir la ruta GET /
    res.status(200).end("Hola"); // 43: Responder con un mensaje de saludo
});

app.get('/frutas', async (req, res) => { // 44: Definir la ruta GET /frutas
    const client = await connectToMongoDB(); // 45: Conectar a la base de datos

    const db = client.db('sample_mflix'); // 46: Seleccionar la base de datos

    const frutas = await db.collection('frutas').find().toArray(); // 47: Obtener todos los documentos de la colección 'frutas'

    await disconnectToMongoDB(); // 48: Desconectar de la base de datos

    res.json(frutas); // 49: Responder con los datos obtenidos
});

app.get('/frutas/:id', async (req, res) => { // 50: Definir la ruta GET /frutas/:id
    const frutaId = parseInt(req.params.id) || 0; // 51: Obtener el ID de la fruta desde los parámetros de la ruta

    const client = await connectToMongoDB(); // 52: Conectar a la base de datos
    if (!client) { // 53: Si la conexión falla
        res.status(500).send("error client"); // 54: Responder con un estado 500 y un mensaje de error
        return; // 55: Terminar la ejecución de la función
    };

    const db = client.db('sample_mflix'); // 56: Seleccionar la base de datos

    const fruta = await db.collection('frutas').findOne({ id: frutaId }); // 57: Buscar una fruta por ID

    await disconnectToMongoDB(); // 58: Desconectar de la base de datos

    !fruta ? res.status(404).send("no existe esa fruta") : res.json(fruta); // 59: Responder con la fruta o un mensaje de error si no existe
});

app.post('/frutas', async (req, res) => { // 60: Definir la ruta POST /frutas
    const nuevaFruta = req.body; // 61: Obtener los datos de la nueva fruta del cuerpo de la solicitud
    if (Object.keys(nuevaFruta).length === 0) { // 62: Verificar que los datos no estén vacíos
        res.status(404).send("error en el formato de los datos"); // 63: Responder con un estado 404 y un mensaje de error
    }

    const client = await connectToMongoDB(); // 64: Conectar a la base de datos
    if (!client) { // 65: Si la conexión falla
        res.status(500).send("error client"); // 66: Responder con un estado 500 y un mensaje de error
        return; // 67: Terminar la ejecución de la función
    };

    const collection = client.db("sample_mflix").collection("frutas"); // 68: Seleccionar la colección 'frutas'
    collection.insertOne(nuevaFruta) // 69: Insertar la nueva fruta en la colección
        .then(response => res.status(201).json(nuevaFruta)) // 70: Responder con un estado 201 y los datos de la nueva fruta
        .catch(error => res.status(500).send("error al crear el registro")) // 71: Manejar errores y responder con un estado 500
        .finally(async () => { await disconnectToMongoDB() }); // 72: Desconectar de la base de datos
});

app.put("/frutas/:id", async (req, res) => { // 73: Definir la ruta PUT /frutas/:id
    const id = parseInt(req.params.id) || 0; // 74: Obtener el ID de la fruta desde los parámetros de la ruta
    const nuevosDatos = req.body; // 75: Obtener los nuevos datos del cuerpo de la solicitud
    console.log(id, nuevosDatos, !{}); // 76: Imprimir los datos en la consola

    if (Object.keys(nuevosDatos).length === 0) { // 77: Verificar que los datos no estén vacíos
        res.status(422).send("Error en el formato de los datos"); // 78: Responder con un estado 422 y un mensaje de error
        return; // 79: Terminar la ejecución de la función
    }

    const client = await connectToMongoDB(); // 80: Conectar a la base de datos
    if (!client) { // 81: Si la conexión falla
        res.status(500).send("Error client"); // 82: Responder con un estado 500 y un mensaje de error
        return; // 83: Terminar la ejecución de la función
    }

    const collection = client.db("sample_mflix").collection("frutas"); // 84: Seleccionar la colección 'frutas'
    collection
        .updateOne({ id }, { $set: nuevosDatos }) // 85: Actualizar la fruta con los nuevos datos
        .then((response) => res.status(200).json(nuevosDatos)) // 86: Responder con un estado 200 y los nuevos datos
        .catch((error) => res.status(500).send("Error al actualizar el registro")) // 87: Manejar errores y responder con un estado 500
        .finally(async () => { // 88: Finalmente, desconectar de la base de datos
            await disconnectToMongoDB();
        });
});

app.delete("/frutas/:id", async (req, res) => { // 89: Definir la ruta DELETE /frutas/:id
    const id = parseInt(req.params.id) || 0; // 90: Obtener el ID de la fruta desde los parámetros de la ruta

    if (!req.params.id) { // 91: Verificar que el ID esté presente
        res.status(422).send("Error en el formato de los datos"); // 92: Responder con un estado 422 y un mensaje de error
        return; // 93: Terminar la ejecución de la función
    }

    const client = await connectToMongoDB(); // 94: Conectar a la base de datos
    if (!client) { // 95: Si la conexión falla
        res.status(500).send("Error client"); // 96: Responder con un estado 500 y un mensaje de error
        return; // 97: Terminar la ejecución de la función
    }

    const collection = client.db("sample_mflix").collection("frutas"); // 98: Seleccionar la colección 'frutas'
    collection
        .deleteOne({ id }) // 99: Eliminar la fruta con el ID especificado
        .then((response) => { // 100: Manejar la respuesta de la base de datos
            if (response.deletedCount === 0) { // 101: Si no se eliminó ninguna fruta
                res.status(404).send(`No existe el registro con ID: ${id}`); // 102: Responder con un estado 404 y un mensaje de error
            } else { // 103: Si la fruta fue eliminada
                res.status(202).send("Registro eliminado"); // 104: Responder con un estado 202 y un mensaje de éxito
            }
        })
        .catch((error) => res.status(500).send("Error al borrar el registro")) // 105: Manejar errores y responder con un estado 500
        .finally(async () => { // 106: Finalmente, desconectar de la base de datos
            await disconnectToMongoDB();
        });
});

const PORT = process.env.PORT || 3000; // 107: Obtener el puerto de las variables de entorno o usar el puerto 3000 por defecto

app.listen(PORT, () => console.log(`http://localhost:${PORT}`)); // 108: Iniciar el servidor y escuchar en el puerto especificado
