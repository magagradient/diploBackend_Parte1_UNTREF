// Asincronismo, gracias a este generamos un codigo mas funcional, rapido  y eficiente, sin necesidad de recargar la pagina para actualizar información. JavaScript es un lenguaje de programacion asincrono porque es capaz de ejecutar un hilo de tareas o peticiones en las cuales, si la respuesta demora, el hilo de ejecucion de JavaScript continuara con las demas tareas del codigo. 

// PROMESA es un objeto que representa el resultado de una operacion asincronica. Esta operacion puede ser cualquier cosa, desde hacer una solicitud a un servidor hasta leer un archivo del disco. 

// Ejemplo basico del uso de promesas a partir de la clase PROMISE:

// Las promesas se crean instanciando la clase PROMISE, que acepta una funcion callback la cual se ejecutara asincronicamente, esta funcion acepta dos parametros: resolve para resolver, reject para rechazar

// todo lo que esta bien va por el resolve y todo lo que esta mal va por el reject

return new Promise((resolve, reject) => {
    // controlar estados de la promesa y, resolverla o rechazarla
});

// ESTADOS DE UNA PROMESA, apenas creo la promesa comienza el estado "pendiente"(pending): significa que la operacion asincronica asociada aun no se ha completado ni se ha rechazado. La promesa esta en espera de un resultado.
// Durante este estado, la promesa puede eventualmente cambiar a uno de los otros dos estados: "resuelta" o "rechazada". 


