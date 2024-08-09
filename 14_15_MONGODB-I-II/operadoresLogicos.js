// Los operadores lógicos en MongoDB permiten combinar múltiples condiciones de consulta para crear consultas complejas. Los operadores lógicos más comunes son $and, $or y $not.

//--//////////////////////////////////--//
// 1. $and (Logical AND) (este y este otro(las dos se tienen que cumplir))
// El operador $and se utiliza para combinar varias condiciones y seleccionar los documentos que cumplen todas las condiciones especificadas.

// Ejemplo:

// Para encontrar todos los usuarios que tienen 25 años y viven en "New York":

db.users.find({
    $and: [
        { age: 25 },
        { city: "New York" }
    ]
})

// Descripción:
// $and toma una lista de expresiones de consulta.
// Solo selecciona los documentos que cumplen todas las expresiones de la lista.

//--//////////////////////////////////--//
// 2. $or (Logical OR)(o uno o el otro)
// El operador $or se utiliza para combinar varias condiciones y seleccionar los documentos que cumplen al menos una de las condiciones especificadas.

// Ejemplo:
// Para encontrar todos los usuarios que tienen 25 años o viven en "New York":

db.users.find({
    $or: [
        { age: 25 },
        { city: "New York" }
    ]
})

// Descripción:
// $or toma una lista de expresiones de consulta.
// Selecciona los documentos que cumplen al menos una de las expresiones de la lista.

//--//////////////////////////////////--//
// 3. $not (Logical NOT)(ni y ni(ninguno de los dos))
// El operador $not se utiliza para invertir el resultado de una expresión de consulta, seleccionando los documentos que no cumplen la condición especificada.

// Ejemplo:
// Para encontrar todos los usuarios que no viven en "New York":

db.users.find({
    city: { $not: { $eq: "New York" } }
})

// Descripción:
// $not toma una expresión de consulta.
// Selecciona los documentos que no cumplen la expresión especificada.
// Se suele usar en combinación con otros operadores.
// Ejemplo Combinado:
// Para encontrar usuarios que tienen 25 años y no viven en "New York", o usuarios que tienen una edad que no es 30:

db.users.find({
    $or: [
        {
            $and: [
                { age: 25 },
                { city: { $not: { $eq: "New York" } } }
            ]
        },
        { age: { $not: { $eq: 30 } } }
    ]
})

// Descripción:
// Usa $or para combinar dos condiciones.
// La primera condición usa $and para combinar dos sub - condiciones: age igual a 25 y city no igual a "New York".
// La segunda condición usa $not para seleccionar documentos donde age no sea igual a 30.

//--//////////////////////////////////--//
// Estos operadores lógicos permiten construir consultas avanzadas y detalladas en MongoDB, facilitando la recuperación de documentos que cumplan con criterios específicos y complejos.