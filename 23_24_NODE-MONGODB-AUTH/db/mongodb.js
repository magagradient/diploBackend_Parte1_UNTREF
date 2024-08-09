const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGODB_URI);

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
