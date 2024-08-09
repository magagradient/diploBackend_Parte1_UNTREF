// En MongoDB, hay varios tipos de búsquedas que puedes realizar para consultar y manipular datos.A continuación se describen algunos de los tipos más comunes:

// 1. ** Búsqueda Simple **
//     Se utiliza para encontrar documentos que coinciden con un criterio específico.Se usa el método`find`.

db.collection.find({ campo: valor })

// Ejemplo:

db.users.find({ age: 25 })

// 2. ** Búsqueda con Operadores de Comparación **
// MongoDB proporciona varios operadores para realizar búsquedas más complejas.

//- $eq: Igual a (equal to)
//- $ne: No igual a  (not equal to)
//- $gt: Mayor que (greater than = mayor a)
//- $gte: Mayor o igual que (greater than or equal to)
//- $lt: Menor que (less than)
//- $lte: Menor o igual que (less than or equal to)


db.collection.find({ campo: { $gt: valor } })

db.users.find({ age: { $gte: 18 } })


////////////////////////////////////////////////
// 3. ** Búsqueda con Operadores Lógicos **
// Para combinar múltiples condiciones.

//- $and: Y lógico
//- $or: O lógico
//- $not: No lógico
//- $nor: Ninguno lógico


db.collection.find({ $or: [{ campo1: valor1 }, { campo2: valor2 }] })


db.users.find({ $or: [{ age: { $lt: 18 } }, { age: { $gt: 60 } }] })

////////////////////////////////////////////////
// 4. ** Búsqueda con Operadores de Elementos **
// Para buscar documentos en función de la existencia o el tipo de un campo.

// - $exists: Verifica si el campo existe.
// - $type : Verifica el tipo de campo.

db.collection.find({ campo: { $exists: true } })

// Ejemplo:

db.users.find({ phone: { $exists: true } })

// 5. ** Búsqueda con Expresiones Regulares **
// Para buscar patrones en cadenas de texto.

db.collection.find({ campo: /expresión_regular/ })

db.users.find({ name: /^J/ })

////////////////////////////////////////////////
// 6. ** Búsqueda en Arrays **
// Para buscar elementos dentro de arrays.

//- $all: Coincide con todos los valores especificados en el array.
//- $elemMatch: Coincide con documentos en los arrays que cumplen con ciertos criterios.
//- $size: Coincide con el tamaño del array.


db.collection.find({ array_campo: { $all: [valor1, valor2] } })

db.products.find({ tags: { $all: ["electronics", "sale"] } })

/////////////////////////////////////////////////
// 7. ** Búsqueda con Operadores de Evaluación **
// Para realizar búsquedas que requieren una evaluación más compleja, como expresiones de JavaScript o texto completo.

//- $expr: Permite usar agregaciones en las consultas.
//- $mod: Calcula el módulo de un campo.
//- $regex: Usa expresiones regulares.
//- $text: Busca texto en índices de texto.


db.collection.find({ $expr: { $gt: ["$campo1", "$campo2"] } })


// Ejemplo:

db.articles.find({ $text: { $search: "MongoDB" } })

/////////////////////////////////////////////////
// 8. ** Búsqueda Geoespacial **
// Para datos geoespaciales:

//- $geoWithin: Selecciona documentos con un punto dentro de un área geoespacial.
//- $near: Selecciona documentos cercanos a un punto geoespacial.


db.collection.find({
    location: {
        $geoWithin: {
            $centerSphere: [[longitud, latitud], radio_en_radianes]
        }
    }
})

// Ejemplo:

db.places.find({
    location: {
        $near: {
            $geometry: {
                type: "Point",
                coordinates: [-73.9667, 40.78]
            },
            $minDistance: 1000,
            $maxDistance: 5000
        }
    }
})

/////////////////////////////////////////////////
// 9. ** Proyección **
// Para incluir o excluir campos específicos en los resultados.

db.collection.find({ campo: valor }, { campo_incluido: 1, campo_excluido: 0 })


// Ejemplo:

db.users.find({ age: { $gte: 18 } }, { name: 1, age: 1 })

/////////////////////////////////////////////////
// 10. ** Ordenación **
//     Para ordenar los resultados:

db.collection.find().sort({ campo: 1 })  // 1 para ascendente, -1 para descendente

// Ejemplo:

db.users.find().sort({ age: -1 })

/////////////////////////////////////////////////
// 11. ** Límite y Salto(Limit & Skip) **
// Para limitar el número de documentos devueltos y saltar un número específico de documentos:


db.collection.find().limit(número).skip(número)


//    Ejemplo:

db.users.find().limit(10).skip(5)

////////////////////////////////////////////////

// Estos son algunos de los tipos de búsqueda más comunes en MongoDB. La combinación de estos métodos y operadores te permitirá realizar consultas complejas y obtener los datos que necesitas de manera eficiente.

//////////////////////////////////////////////////

// El operador $in en MongoDB se utiliza para seleccionar documentos donde el valor de un campo está dentro de un conjunto de valores especificados en una lista(array). Es una forma conveniente de buscar múltiples valores en un campo específico sin tener que usar múltiples condiciones $or.

// Sintaxis de $in

db.collection.find({ campo: { $in: [valor1, valor2] } })

// Ejemplos de Uso de $in
// Búsqueda Simple con $in

// Supongamos que tienes una colección de usuarios y quieres encontrar todos los usuarios que tengan una edad específica entre un conjunto de valores.

db.users.find({ age: { $in: [25, 30, 35] } })
// Esto seleccionará todos los documentos en los que el campo age sea 25, 30 o 35.

// Uso de $in con Cadenas de Texto

// Si tienes una colección de productos y quieres encontrar todos los productos que pertenezcan a ciertas categorías.

db.products.find({ category: { $in: ["electronics", "books", "clothing"] } })
// Esto seleccionará todos los documentos donde el campo category sea "electronics", "books" o "clothing".

// Uso de $in con Arrays

// Supongamos que tienes una colección de pedidos y quieres encontrar todos los pedidos que contienen ciertos elementos.

db.orders.find({ items: { $in: ["apple", "banana", "orange"] } })
// Esto seleccionará todos los documentos donde el array items contiene al menos uno de los elementos especificados ("apple", "banana" o "orange").

// Combinación de $in con Otros Operadores

// Puedes combinar $in con otros operadores para realizar búsquedas más complejas. Por ejemplo, para encontrar usuarios que tengan una edad específica y vivan en una cierta ciudad.

db.users.find({
    age: { $in: [25, 30, 35] },
    city: "New York"
})
// Esto seleccionará todos los documentos donde el campo age sea 25, 30 o 35 y el campo city sea "New York".

// Ventajas de Usar $in:
// Simplicidad: Permite simplificar consultas que de otro modo requerirían múltiples condiciones $or.

// Eficiencia: Puede ser más eficiente que usar múltiples condiciones $or en términos de rendimiento de consulta.

// Consideraciones:
// $in puede ser utilizado en combinación con otros operadores para crear consultas más complejas y específicas.

// Al igual que otros operadores de MongoDB, el uso adecuado de índices en los campos que se están consultando puede mejorar significativamente el rendimiento de las consultas con $in.

// Utilizar $in en tus consultas de MongoDB puede ayudarte a simplificar y optimizar la búsqueda de documentos que coinciden con múltiples valores posibles en un campo específico.