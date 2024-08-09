const path = require('path');

// resolve:
const ruta = path.resolve(__dirname, '../public', 'index.html');

// parse:
const info = path.parse(ruta); 

// console.log(ruta);
// console.log(info);


// __dirname te trae la carpeta donde se esta ejecutando el script:
console.log(__dirname);

// el resolve devuelve una ruta absoluta

// el join devuelve una ruta relativa

// cada vez que aparezca una ruta con dos puntos ej:'../public', vamos a necesitar usar un resolve porque el join no lo va poder resolver

