// MOTORES DE PLANTILLAS: estas herramientas estan enfocadas en el desarrollo Frontend pero implementando las mismas desde el backend
// EJS: Embedded JavaScript es un motor de plantillas para crear HTML dinamico. Las plantillas de EJS se parecen a las paginas HTML normales, pero incluyen codigo JavaScript entre etiquetas <% %> para acceder a los datos. 
require("dotenv").config();

const express = requiere("express");
const app = express();

const path = require("path");

app.set('view engine', "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.send("hola express");
});

app.get('/products', (req, res) => {
    res.render('listado', { title: 'Productos'});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

