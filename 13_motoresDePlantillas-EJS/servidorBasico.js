const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("hola express");
});

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));