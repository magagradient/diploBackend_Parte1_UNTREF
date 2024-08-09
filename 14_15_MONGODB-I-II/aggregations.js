// Las agregaciones en MongoDB permiten realizar operaciones complejas de procesamiento de datos y transformación en una colección de documentos. Las agregaciones se definen mediante "pipelines" que constan de una secuencia de etapas, cada una de las cuales aplica una operación específica a los documentos.
// json de frutas de clase15 utilizado para el ejemplo

// Ejemplo de Operaciones de Agregación

//--//////////////////////////////////--//
// 1. $match
// Filtra los documentos según una condición específica.

// Ejemplo:
// Filtrar los productos cuyo importe es mayor a 500.

// db.products.aggregate([
//   {
//     $match: { importe: { $gt: 500 } }
//   }
// ])

//--//////////////////////////////////--//
// 2. $group
// Agrupa documentos por un campo específico y realiza operaciones agregadas (como contar, sumar, etc.) sobre los documentos en cada grupo.

// Ejemplo:
// Agrupar los productos por stock y sumar el importe de cada grupo.

db.products.aggregate([
    {
        $group: {
            _id: "$stock",
            totalImporte: { $sum: "$importe" }
        }
    }
])

//--//////////////////////////////////--//
// 3. $project
// Selecciona campos específicos para incluir o excluir en los documentos de salida.

// Ejemplo:
// Mostrar solo el nombre y importe de cada producto, y calcular un nuevo campo importeConImpuesto que es el importe con un 10% de impuesto.

db.products.aggregate([
    {
        $project: {
            nombre: 1,
            importe: 1,
            importeConImpuesto: { $multiply: ["$importe", 1.10] }
        }
    }
])

// 
// 4. $sort
// Ordena los documentos por un campo específico.

// Ejemplo:
// Ordenar los productos por importe en orden descendente.

db.products.aggregate([
    {
        $sort: { importe: -1 }
    }
])

//--//////////////////////////////////--//
// 5. $limit
// Limita el número de documentos en la salida.

// Ejemplo:
// Mostrar los 5 productos con el importe más alto.

db.products.aggregate([
    {
        $sort: { importe: -1 }
    },
    {
        $limit: 5
    }
])

// Ejemplo Completo de un Pipeline de Agregación
// Vamos a combinar varias etapas de agregación en un pipeline completo.Por ejemplo, queremos encontrar los 5 productos más caros, calcular su precio con impuesto(10 %) y proyectar solo el nombre, el importe original y el importe con impuesto.

db.products.aggregate([
    {
        $sort: { importe: -1 } // Ordenar por importe descendente
    },
    {
        $limit: 5 // Limitar a los 5 productos más caros
    },
    {
        $project: {
            _id: 0, // Excluir el campo _id
            nombre: 1,
            importe: 1,
            importeConImpuesto: { $multiply: ["$importe", 1.10] } // Calcular el importe con impuesto
        }
    }
])

// Descripción de las Operaciones de Agregación:

// $match: Filtra los documentos según una condición.
// Uso: Seleccionar documentos con un importe mayor a 500.
// Ventajas: Reduce el conjunto de documentos a procesar en etapas posteriores.

// $group: Agrupa documentos por un campo y realiza operaciones agregadas.
// Uso: Agrupar productos por stock y sumar importe.
// Ventajas: Útil para calcular estadísticas, como totales y promedios.


// $project: Selecciona y transforma campos en los documentos.
// Uso: Mostrar nombre, importe, y calcular importeConImpuesto.
// Ventajas: Permite modificar la estructura de los documentos.

// $sort: Ordena documentos por un campo.
// Uso: Ordenar productos por importe de manera descendente.
// Ventajas: Organiza los documentos según criterios específicos.

// $limit: Limita el número de documentos en la salida.
// Uso: Mostrar solo los 5 productos más caros.
// Ventajas: Controla el tamaño del conjunto de resultados.

// Estos operadores de agregación permiten realizar consultas y transformaciones avanzadas sobre los datos, haciendo de MongoDB una herramienta muy poderosa para el análisis y procesamiento de información.