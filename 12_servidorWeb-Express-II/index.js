// Hasta el momento venimos ejecutando nuestros proyectos basados en serviores web, utilizando la Terminal mediante los comandos Node.
// LLego el momento de  liberarnos de este proceso repetitivo, automatizando algunos pasos de la mano de diferentes herramientas que Node nos provee.

// 3 maneras de automatizar el servidor web:
// modificamos el script generado por defecto de nuestro package.json:

// viene por defecto:
//   "scripts": {
// "test": "echo \"Error: no test specified\" && exit 1"

// definimos un parametro llamado "start" y su valor sera node server.js, luego al momento de ejecutar el proyecto en la terminal, tipeamos npm start, y se iniciara el proyecto.

// cambianmos "test" por  "start" y agrego una vez instalado nodemon el script "dev"
// "scripts": {
//     "start": "node index.js"
// "dev": "nodemon index.js"
//   },

// nodemon se instala de una manera distinta para que no se instale en las dependecias del package.json porque en la parte de produccion no se utiliza. Entonces el comando que se usa para instalarlo es:

// node i nodemon --save--dev
// o: 
// node i nodemon -D

// "devDependencies": {
//     "nodemon": "^3.1.1"

// npm run dev para ejecutar el escript de nodemon

//////////////////////////////////////////
// ERRORES EN RUTA:

// en express es posible manejar solicitdes que no coinciden con ninguna de las rutas definidas. Esto se hace utilizando un middleware que se ejecuta despues de todas las rutas definidas.
// Para manejar rutas inexistentes podemos agregar una ruta predeterminada(catch-all) utilizando app.use() y definir el controlador para esta ruta. 

// la estructura de este middleware recibe como parametro la misma funcion creada para el resto de las rutas definidas en nuestro servidor web, pero sin esperar un path especifico. El controlador para esta ruta devuelve una respuesta con un codigo de estado 404 - (recurso no encontrado) y un mensaje para informar al usuario que el recurso solicitado no existe:

// este es el metodo mas recomendabe!

// app.use((req, res, next) => {
//     res.status(404).send('no esxiste esa ruta');
// });

// tambien es muy comun utilizar el metodo .get() seguido del path con el caracter comodin "*"para interceptar rutas inexistentes. 

app.get("*", (req, res) => {
    res.status(404).send('no esxiste esa ruta');
});

////////////////////////////////////////////////
//ESTADO DE LAS PETICIONES:
// ante determinadas peticiones solemos retornar en algunos casos, un codigo de estado, de acuerdo al tipo de peticion.
// ante la pericion de un recurso inexistente, devolvimos un mensaje de usuario junto al codido de estado 404.

// cuando express respode a una solicitu de una ruta que si existe no es necesario enviar un codigo de estado explicitamente, ya que este FRamework asume internamente que la respuesta exitosa y, junto a esta, envia un codigo de estado 200 - (OK) de forma predeerminada. 

// el framework tambien controla el estado de peticiones de un mismo cliente. Cuando este peticiona algo que ya habia aolicitado antes, y el recurso no cambio desde su ultima peticion. el status de la misma sera 304, en lugar de 200.
// de esta forma el cliente recuperara el recurso desde el cache en lugar de volver a descargarlo con el servidor. 

// cada peticion y/o respuesta y/o rechazo posee un codigo de estado y una descripcion para el mismo. A su vez se subdividen en categorias, para entnder mas rapido de donde proviene el error.

// https://http.cat/

// https://httpcats.com/



