// el entrepoint(archivo de entrada) es el que se va a encargar de hacer funcionar todo nuestro servidor 

// el nombre del archivo del js que es recomendable usar index.js tiene que coincidir con el nombre del "main" del json 

// pasos a seguir para inciar un proyecto con node.js, con los siguientes pasos ya tendriamos creada la base de cada proyecto Node.js que deseemos realizar:
// 1.Instalar node.js
// 2.Crear una carpeta para tu proyecto
// 3.Inicializar el proyecto con npm (npm init en la terminal)
// 4.Verificar/Configurar el archivo package.json
// 5.Crear un archivo de entrada (index.js)

// SERVIDOR WEB: son programas o sistemas informaticos que proveen contenido y servicios web, usualmente, a traves de internet. Un servidor web recibe y procesa las solicitudes de los usuarios y luego responde con los datos solicitados, como paginas web, imagenes, videos y otros archivos.

// Tambien alojan y sirven archivos y datos a traves de un protocolo de transferencia de hipertexto (HTTP) o su version segura (HTTPS). Los sitios web se crean y se cargan en un servidor web, y los usuarios acceden a ellos mediante un navegador web, que solicita estos archivos al servidor, para mosrarlos en el browser. 

// Los servidores web mas populares son Apache, Nginx, ISS(es de microsoft)(Internet Information Services) y LiteSpeed. 

// En una aplicacion de backend, el servidor web es responsable de recibir y responder a las solicitudes de los clientes y de coordinar la interaccion entre los diferentes componentes de la aplicacion. Estas solicitudes son recibidas a traves de HTTP y las enruta a la aplicacion adecuada para su procesamiento. 

// Tambien puede ser responsbale de autenticar y autorizar usuarios, manejar la seguridad de la aplicacon y la encriptacion de datos, y gestionar las sesiones de usuarios.
// Ademas puede ser utilizado para acelerar el rendimiento de la aplicacion, manejar los resultados de base de datos u otras fuentes, distribuir las solicitudes entrantes a otros servidores, para balancear la carga de uso cuando hablamos de aplicaciones backend de grandes empresas. 

// En resumen, el servidor web es una parte esencial de las aplicaciones backend, ya que proporciona la insfraestructura necesaria para que la aplicacion se comunique con los clientes y gestione la complejidad de la interaccion de la aplicacion. 

// El papel que cumple Node.js en un servidor: En nuestro caso no necesitamos un servidor web como los mencionados anteriormente. Contamos con las herramientas necesarias para crear uno de acuerdo a nuestra necesidad. Para lograrlo combinaresmos Node.js con el lenguaje JavaScript y asi crear nuestro propio webserver.

// Node.js no es un lenguaje, es un entorno de ejecucion.

// El modulo HTTP es lo que nos va a permitir crear ese servidor, es un modulo que ya viene dentro de node osea que no hay que instalarlo
// HTTP hace referencia a un protocolo el cual nos permite, entre otras cosas, navegar por internet. Todos los sitios web a los cuales accedemos como usuarios, utilizan el termino HTTP O HTTPS delante del resto de la url. 

// el entorno de ejecucion de Node.js cuenta con un modulo interno (el cual forma parte del Core, o núcleo, de Node.js), llamado modulo u objeto HTTP. Este sera nuestro aliado para que podamos crear nuestro primer servidor web y ponerlo en funcionamiento.

// este modulo es una parte integral del nucleo de Node.js y proporciona un conjunto de funcionalidades en todo lo que respecta, no solo a crear, sino tambien gestionar servidores web y aplicaciones cliente HTTP.

// Pasos a seguir para crearlo:
// 1.Sumar a nuestro proyecto Node, el servidor HTTP que necesitamos utilizar.
// 2.Luego, definiremos un puerto donde el servidor "escuchara" peticiones.
// 3.Crearemos el servidor web e iniciaremos su escucha.
// 4.Ante una peticion, devolveremos una respuesta simple basada en texto plano.



// el metodo requiere() se ocupa de sumar el modulo HTTP a nuestro proyecto:
const http = require('http');

// El puerto que utilizaremos es el 3000:
const PORT = 3000

// el metodo createServer(), crea el servidor, recibe una funcion como parametro y a su vez esta recibe dos objetos como parametros: request y response, REQUEST: es el cual canaliza (recibe) las peticciones en cuestiond de cada cliente(navegadores web, apps, etc), RESPONSE: es quien se ocupara de brindar las respuestas a el o los clientes que le realizan peticiones:
const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/HTML");
    // response.setHeader("Content-Type", "text/plain");
    response.end('<h1>Hola de Node.js con HTTP</h1>');
    // response.end('Hola de Node.js con HTTP')
});

// por ultimo el metodo listen() comienza a escuchar peticiones en el puerto que le definimos:
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

// Ctrl + c en la terminal para reiniciar la carga(cerrarlo y volverlo a abrir):
// En la mayoría de los sistemas operativos y terminales, el comando Ctrl + C se utiliza para interrumpir o detener la ejecución de un programa o proceso que se está ejecutando en la terminal. Este comando envía una señal de interrupción (comúnmente conocida como SIGINT) al proceso activo, lo que generalmente hace que el programa detenga su ejecución de manera controlada.
// Por ejemplo, si estás ejecutando un programa en la terminal y quieres detenerlo abruptamente, puedes presionar Ctrl + C para enviar la señal de interrupción y detener la ejecución del programa.



