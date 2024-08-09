const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, "public")));

// ruta principal:
app.get('/', (req, res) => {
    res.send("Hola Node.js")
});

// ruta de contacto:
app.get('/contacto', (req, res) => {
    res.send("Pagina de contacto")
});

// manejo de error de rutas: 
app.use((req, res, next) => {
    res.status(404).send('no esxiste esa ruta');
});

// valor predeterminado que se le puede poner al codigo:
//si esto no esta definido  usa  esto
const PORT = process.env.PORT || 3000;

app.listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT}`));
