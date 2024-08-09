// gestion de cookies

// nombre: es el identificador unico de la cookie. Se utiliza para acceder y manipular la cookie desde el lado del servidor

// valor: es la informacion o datos que se almacenan en la cookie. Puede ser cualquier tipo de dato, como una cadena de txto, un numero o incluso una structura de dato en formato JSON.

// dominio: es el dominio del sitio web que creo la cookie. la cookie solo se enviara al servidor cuando se aga una solicitud al dominio especifico.

// ruta: es la ruta dentro del dominio en la que la cookie es valida. Por ejemplo, si la ruta es "/admin", la cookie solo se enviara cuando la URL comience con "/admin"

// expiracion: es la fea y hora en la que la cookie caduca y deja de ser valida. despues de la expiracion, el navegador ya no enviara la cookie al servidor.

// segura: es un valor booleano que indicia si la cookie debe enviarse solo a traves de conciones HTTPS (no http sin la (S))seguras. Esto proporciona una capa adicional de seguridad para proteger la informacion sensible.

// HttpOnly: valor booleano que indica si la cookie solo deb ser accesible a traves del protocolo HTTP y no a traves de scripts en el lado del cliente, como javaScript. Esto ayuda a mitigar ataques de secuestro de cookies. 


//*/--/////////////////////////////--/*//
// npm audit fix 

// El comando npm audit fix se utiliza en el entorno de desarrollo Node.js para analizar el proyecto en busca de vulnerabilidades conocidas en las dependencias y luego intentar corregirlas automáticamente.

// Descripción de npm audit fix

// 1. **Análisis de Vulnerabilidades**:
// - npm audit examina las dependencias del proyecto y busca vulnerabilidades conocidas utilizando una base de datos mantenida por npm.
// - Proporciona un informe detallado de las vulnerabilidades encontradas, clasificadas por su severidad (baja, moderada, alta, crítica).

// 2. **Corrección Automática**:
// - npm audit fix intenta actualizar automáticamente las dependencias a versiones que no contengan las vulnerabilidades reportadas.
// - En muchos casos, npm audit fix puede resolver las vulnerabilidades actualizando las dependencias de parche o de versión menor, que no suelen introducir cambios incompatibles.

