require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

// Importar y usar el router
app.use('/auth', require("./routes/auth.router"));

const PORT = process.env.PORT || 3001;

// Middleware para manejar rutas no encontradas
app.use((req, res, next) => {
    res.status(404).json({ error: "Not Found" });
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
