require('dotenv').config();

const { MongoClient } = require('mongodb'); 

const URI = process.env.MONGODB_URI;

const client = new MongoClient(URI);

// dos funciones asincronas. Una para conectarnos a la bb.dd. y otra para desconectarnos:

const connectToMongoDB = async () => {
    try {
        await client.connect();
        console.log("conectado");
        return client;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const disconnectToMongoDB = async () => {
    try {
        await client.close();
        console.log("desconectado");
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    connectToMongoDB,
    disconnectToMongoDB,
}; 

