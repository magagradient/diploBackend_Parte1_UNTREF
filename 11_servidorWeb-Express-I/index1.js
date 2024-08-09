// administracion de paquetes y dependencias:
// esto s reiere al proceso de gestionar e instalar paquetes de software y sus dependencias en una aplicacion Node.js
// los paquetes de software se distribuyen a traves de npm que es una herramieta de linea de comandos que permite a los desarrolladores descragar, instalar y actualizar paquetes de software desde un repositorio centraliado de paquetes.
// el termino dependencias viene justamente de las librerias y/o framework de los cuales Node.js depende para agregar nuevas caracteristicas a la tarea de programar. 
// npm gestor de paquetes y dependencias, cuenta con los siguientes componentes :
// repositorio: mantiene un repositorio web y descarga desde alli los paquets de software que utilizaremos.
// package.json: utiliza este archivo para describir las caracteristicas tecnicas de la aplicacion, y de sus dependencias.
// linea de comandos: utiliza la terminal para ejecutar comandos que permiten instalar, actualizar y desintalar paquetes de software. 
// cada dependencia que instalamos con NPM descarga una serie de archivos y carpetas a nuesro proyecto. Esta se almacenan en la subcarpeta node_modules.
// la carpeta node_modules no se sube a github. 
/////////////////////////////////////////////////

// En el archivo package.json de un proyecto Node.js, npm utiliza varios símbolos para controlar las versiones de los paquetes. Aquí hay una explicación de los más comunes:

// Caret (^):
// Permite actualizaciones compatibles con la versión especificada.
// Ejemplo: "^1.2.3" permite versiones desde 1.2.3 hasta menos de 2.0.0.

// Tilde (~):
// Permite actualizaciones de parches, pero no de versiones mayores ni menores.
// Ejemplo: "~1.2.3" permite versiones desde 1.2.3 hasta menos de 1.3.0.

// Asterisco (*):
// Permite cualquier versión.
// Ejemplo: "*" permite cualquier versión.
// Rango (>=, <=, <, >):

// Permite definir rangos específicos.
// Ejemplo: ">=1.2.3 <2.0.0" permite versiones desde 1.2.3 hasta menos de 2.0.0.

// Versiones exactas:
// Especifica una versión exacta.
// Ejemplo: "1.2.3" solo permite la versión 1.2.3.

// {
//     "dependencies": {
//     "express": "^4.17.1",
//     "lodash": "~4.17.20",
//     "react": "16.13.1",
//     "jquery": ">=3.5.0 <4.0.0"
//     }
// }

// En este ejemplo:

// "express": "^4.17.1" permite actualizaciones compatibles de Express dentro de la versión 4.x.x.
// "lodash": "~4.17.20" permite actualizaciones de parches de Lodash dentro de la versión 4.17.x.
// "react": "16.13.1" fija React exactamente en la versión 16.13.1.
// "jquery": ">=3.5.0 <4.0.0" permite cualquier versión de jQuery desde la 3.5.0 hasta menos de la 4.0.0.
// Estos símbolos y notaciones ayudan a garantizar que las dependencias del proyecto se mantengan compatibles y funcionales al tiempo que permiten ciertas actualizaciones.

////////////////////////////////////////////////
// EL FRAMEWORK: es un conjunto de herramentas, librerias y estructuras de codigo predefinidas que se utilizan para desarrollar aplicaciones web o moviles
// Los frameworks proporcionan una base solida para el desarrollo de aplicaciones al ofrecer una arquitecura predefinida y una serie de herramientas y componentes para construir rapidamente aplicaciones web. 

////////////////////////////////////////////////
// EL FRAMEWORK EXPRESS: Proporciona una amplia gama de funcionalidades como el manejo de rutas, la gestion de peticiones y respuestas HTTP, la integracion con bases de datos y middleware para la validacion de datos, auntenticacion y seguridad.
// express es una Clase JS basada en objetos.

const express = require('express');
const app = express();
// crear una instancia de express: 
// express: Aquí express es una función que actúa como un constructor.
// app: Es una instancia creada por la llamada a express(). Esta instancia (app) es un objeto que contiene todas las propiedades y métodos necesarios para configurar y ejecutar una aplicación web con Express.
// ¿Por Qué Son Importantes las Instancias?
// Las instancias son fundamentales en la programación orientada a objetos y en muchos paradigmas de programación porque permiten:

// Encapsulación: Cada instancia puede mantener su propio estado independiente. Esto significa que diferentes instancias del mismo tipo pueden tener datos diferentes y operar independientemente.
// Reusabilidad: Las clases y constructores definen un modelo genérico que puede ser reutilizado para crear múltiples objetos con la misma estructura y comportamiento, pero con diferentes datos.
// Organización: Ayudan a organizar el código, agrupando datos y comportamientos relacionados en objetos cohesivos.
// Resumen
// Una instancia es un objeto individual creado a partir de una clase o constructor que define su estructura y comportamiento.

const path = require('path');

// archivos estaticos: el css, js del front, imagens, videos, etc.  
app.use(express.static(path.join(__dirname, "public")))

//////////////////////////////////////////
// paso siguiente: utilizando desde aqui la constante app, podemos definir la ruta principal de nuestro servidor web express. la misma, como en todo sitio web, esta referenciada por la ruta '/' raiz.
// el metodo .get() se ocupa de estar atento a las peticiones entrantes, recibe dos parametros req, res.

// ruta principal:
app.get('/', (req, res) => {
    res.send("Hola Node.js")
});

// ruta de contacto:
app.get('/contacto', (req, res) => {
    res.send("Pagina de contacto")
});

const PORT = process.env.PORT || 3000;

//////////////////////////////////////////
// y el paso siguiente tenemos que hacer que escuche:

app.listen(process.env.PORT, () => console.log(`http://localhost:3000`));

// en express debemos definir cada una de las rutas que utilizaremos y un mensaje de error personalizado para todas aquellas rutas inexistentes en este servidor.

//////////////////////////////////////////
// VARIABLES DE ENTORNO Y EL ARCHIVO .ENV:

// los diferentes entornos de trabajo con aplicaciones software que posee una empresa mediana/grande:

// DEV - TESTING - STAGING - PRODUCTION

// en las aplicacions backend existen muchas variables denominadas variables de entorno. Estas se definen en el sistema operativo y se utilizan para configurar diferentes aspectos del entorno de desarollo, como por ej la URL de la base de datos, la clave secreta para autenticacion de usuarios, la direccion IP del srvidor, etc. 

// por ello, en todo proyecto web, debemos contemplar el uso de variables de entorno, e incorporar esta practica en el desarrollo de nuestras aplicaciones de software. Y, en Node.js, el archivo .env es quien cumple perfectamente el rol de poder definir variables de este tipo.
// .env es un archivo de configuracion que se utiliza para almacenar estas variables de entorno. 

// este archivo debemos definirlo en la raiz de nuestro proyectos Node.js
// el punto antes de la palabra env, lo convierte en un archivo invisible. podemos verlo a traves de un editor de codigo pero no sera visible en una carpeta o subcarpeta de un servidor.

// su estrucutura es basicamente un archivo de texto plano y contiene las variables de entorno que necesita tu aplicacion.
// cada variable de entorno se define como una linea en el archivo en el formato NOMBRE=VALOR, donde NOMBRE hace referencia a la variable y, VALOR, al valor que almacenado en esta. 

///////////////////////////////////////////
// IMPLEMENTAR LAS VARIABLES DE ENTORNO:

// creado el archivo y declaradas las variables pertinenetes, nos queda instalar la dependencia dotenv con npm y luego referenciarla en nuestra aplicacion. Finalmente, el metodo .config() agrega las variables de entorno definidas en este archivo, dentro del objeto JS process.env

// siempre se ubicaen la primer linea de todo el codigo:

// const dotenv = require('dotenv');
// dotenv.config();

// quede en el minuto 1:39 de la clase.

// a traves del objeto process.env. 'ENV_VARIABLE' accedemos al valor definido en esta variable. Ahora, el servidor web, esuchara en el puerto definido PORT(variable de entorno). Si no existe dicha variable, entonces asumira el puerto 3000 como predeterminado. 


