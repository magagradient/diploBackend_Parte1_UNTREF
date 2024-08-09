// operadores de búsqueda de MongoDB: $ne, $nin, $regex, $exists y $type.

//--/////////////////////////////////--//
// 1. $ne (Not Equal to)
// El operador $ne selecciona los documentos donde el valor de un campo no es igual al valor especificado.

// Ejemplo:
// Para encontrar todos los usuarios que no tienen 25 años:

db.users.find({ age: { $ne: 25 } })

// Descripción:
// Selecciona documentos donde el campo age no es igual a 25.
// Puede combinarse con otros operadores para consultas más complejas.

//--/////////////////////////////////////--//
// 2. $nin (Not In) (not into = no esten estre estos valores)
// El operador $nin selecciona los documentos donde el valor de un campo no está en un conjunto de valores especificados.

// Ejemplo:

// Para encontrar todos los usuarios cuya edad no es 25, 30 ni 35:

db.users.find({ age: { $nin: [25, 30, 35] } })

// Descripción:
// Selecciona documentos donde el campo age no está en la lista [25, 30, 35].

// Similar a $ne, pero para múltiples valores.

//--////////////////////////////////////////////--//
// 3. $regex (Regular Expression)(expresiones regulares)
// El operador $regex selecciona documentos donde el valor de un campo coincide con una expresión regular especificada.

// Ejemplo:

// Para encontrar todos los usuarios cuyo nombre empieza con "John":

db.users.find({ name: { $regex: /^John/ } })

// Descripción:
// Usa expresiones regulares de JavaScript.
// Permite coincidencias complejas de patrones de texto.
// Se puede combinar con el modificador i para coincidencias insensibles a mayúsculas/minúsculas.

//--////////////////////////////////////////--//
// 4. $exists (Field Existence)
// El operador $exists selecciona documentos donde un campo especificado existe o no existe.

// Ejemplo:

// Para encontrar todos los documentos que tienen el campo email:

db.users.find({ email: { $exists: true } })

// Descripción:
// Selecciona documentos basados en la existencia de un campo.
// { $exists: true } verifica que el campo exista.
// { $exists: false } verifica que el campo no exista.

//--////////////////////////////////////////////--//
// 5. $type (Field Type)
// El operador $type selecciona documentos donde el valor de un campo es de un tipo BSON especificado.

// Ejemplo:

// Para encontrar todos los documentos donde el campo age es un número entero (int):

db.users.find({ age: { $type: "int" } })

// Descripción:
// Permite buscar documentos por tipo de dato del campo.
// Los tipos pueden ser especificados por nombre o número de tipo BSON.
// Tipos Comunes:

// "double" o 1
// "string" o 2
// "object" o 3
// "array" o 4
// "binData" o 5
// "undefined" o 6
// "objectId" o 7
// "bool" o 8
// "date" o 9
// "null" o 10
// "regex" o 11
// "int" o 16
// "timestamp" o 17
// "long" o 18
// "decimal" o 19

// Ejemplo Combinado
// Para encontrar usuarios cuyo nombre comienza con "A" y tienen el campo email que no existe, y su edad es un número entero no igual a 25, y no están en la lista de edades [30, 35]:

db.users.find({
    name: { $regex: /^A/ },
    email: { $exists: false },
    age: { $type: "int", $ne: 25, $nin: [30, 35] }
})

// Estos operadores son poderosas herramientas en MongoDB que permiten crear consultas avanzadas y específicas, ayudándote a encontrar exactamente los documentos que necesitas.