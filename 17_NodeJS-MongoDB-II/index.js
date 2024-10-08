const express = require('express');
const app = express();

const { connectToMongoDB, disconnectToMongoDB } = require('./src/mongoDB');

app.use(express.json());

app.use((req, res, next) => {
    res.header('Content-Type', 'application/json; charset=utf-8');
    next();
});

app.get('/', (req, res) => {
    res.status(200).end("Hola");
});

app.get('/frutas', async (req, res) => {
    const client = await connectToMongoDB();

    const db = client.db('sample_mflix');

    const frutas = await db.collection('frutas').find().toArray();

    await disconnectToMongoDB();

    res.json(frutas);
});

app.get('/frutas/:id', async (req, res) => {

    const frutaId = parseInt(req.params.id) || 0;

    const client = await connectToMongoDB();
    if (!client) {
        res.status(500).send("error client");
        return;
    };

    const db = client.db('sample_mflix');

    const fruta = await db.collection('frutas').findOne({ id: frutaId });

    await disconnectToMongoDB();

    !fruta ? res.status(404).send("no existe esa fruta") : res.json(fruta);
});

// crear un nuevo recurso:
app.post('/frutas', async (req, res) => {
    const nuevaFruta = req.body;
    // console.log(req.body, nuevaFruta);

    if (Object.keys(nuevaFruta).length === 0) {
        res.status(404).send("error en el formato de los datos")
    }

    const client = await connectToMongoDB();
    if (!client) {
        res.status(500).send("error client");
        return;
    };

    const collection = client.db("sample_mflix").collection("frutas");
    collection.insertOne(nuevaFruta)
        .then(response => res.status(201).json(nuevaFruta))
        .catch(error => res.status(500).send("error al crear el registro"))
        .finally(async () => { await disconnectToMongoDB() });

});

// modificar un recurso:
app.put("/frutas/:id", async (req, res) => {
    const id = parseInt(req.params.id) || 0;
    const nuevosDatos = req.body;
    console.log(id, nuevosDatos, !{});

    if (Object.keys(nuevosDatos).length === 0) {
        res.status(422).send("Error en el formato de los datos");
        return;
    }

    const client = await connectToMongoDB();
    if (!client) {
        res.status(500).send("Error client");
        return;
    }

    const collection = client.db("sample_mflix").collection("frutas");
    collection
        .updateOne({ id }, { $set: nuevosDatos })
        .then((response) => res.status(200).json(nuevosDatos))
        .catch((error) => res.status(500).send("Error al actualizar el registro"))
        .finally(async () => {
            await disconnectToMongoDB();
        });
});

// eliminar un recurso:
app.delete("/frutas/:id", async (req, res) => {
    const id = parseInt(req.params.id) || 0;

    if (!req.params.id) {
        res.status(422).send("Error en el formato de los datos");
        return;
    }

    const client = await connectToMongoDB();
    if (!client) {
        res.status(500).send("Error client");
        return;
    }

    const collection = client.db("sample_mflix").collection("frutas");
    collection
        .deleteOne({ id })
        .then((response) => {
            if (response.deletedCount === 0) {
                res.status(404).send(`No existe el registro con ID: ${id}`);
            } else {
                res.status(202).send("Registro eliminado");
            }
        })
        .catch((error) => res.status(500).send("Error al borrar el registro"))
        .finally(async () => {
            await disconnectToMongoDB();
        });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));



