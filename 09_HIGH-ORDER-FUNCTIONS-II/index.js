// funciones de orden superior segunda parte 

// metodo .every(): se utiliza para comprobar si todos los elementos de un array cumplen una determinada condion, devuelve un verdadero o falso. Realiza una iteracion sobre el total de elementos u objetos del array. Si al menos uno de los elementos no cumple la condicion, el valor sera false. 


// Realiza una solicitud HTTP GET a la URL proporcionada (API que devuelve productos)
fetch('https://fakestoreapi.com/products')
    // El método fetch devuelve una promesa que se resuelve cuando se obtiene una respuesta.
    // Convertimos esa respuesta en un objeto JSON con el método .json()
    .then(res => res.json())
    // El método .then() toma el JSON de los productos y ejecuta la función que le pasamos.
    .then((products) => {
        // Utiliza el método .every() para comprobar si todos los productos tienen un precio mayor a 1000
        const todos = products.every((product) => product.price > 1000);
        // Imprime el resultado en la consola. En este caso, será false, ya que no todos los productos tienen un precio mayor a 1000
        console.log(todos); // false

        // Utiliza el método .some() para comprobar si al menos un producto tiene un precio mayor a 100
        const algunos = products.some((product) => product.price > 100);
        // Imprime el resultado en la consola. En este caso, será true, ya que al menos un producto tiene un precio mayor a 100
        console.log(algunos); // true
    });

///////////////////////////////////////////////////////

// Utilizamos el método .map() para crear una nueva lista de objetos que contienen el título y el precio de cada producto,
// y redondeamos el precio a dos decimales.
const listaPrecios = products.map((product) => {
    const precio = {
        title: product.title,
        price: product.price.toFixed(2), // Redondeamos el precio a dos decimales
    };
    return precio; // Devolvemos un objeto con el título y el precio
});

// Imprimimos la lista de precios en forma de tabla en la consola
console.table(listaPrecios);

// Utilizamos el método .reduce() para calcular la suma de las calificaciones de los productos de la categoría "jewelery"
const suma = products.reduce((acumulador, current) => {
    // Si el producto pertenece a la categoría "jewelery", agregamos su calificación a la suma
    if (current.category == "jewelery") {
        return acumulador + current.rating.rate; // Sumamos la calificación al acumulador
    }
    return acumulador; // Si el producto no es de la categoría "jewelery", devolvemos el acumulador sin cambios
}, 0); // Inicializamos el acumulador en 0

// Filtramos los productos que pertenecen a la categoría "jewelery"
const productosCategoriaJewerly = products.filter((product) => product.category == "jewelery");

// Imprimimos la suma de las calificaciones en la consola
console.log(suma);

// Calculamos el promedio de calificaciones para los productos de la categoría "jewelery"
const rating = suma / productosCategoriaJewerly.length;

// Imprimimos el promedio de calificaciones en la consola
console.log(rating);

///////////////////////////////////////////////////////

// Utilizamos el método .sort() para ordenar los productos según sus precios.
const nombres = products.sort((a, b) => {
    if (a.price < b.price) { // Si el precio de 'a' es menor que el precio de 'b'
        return -1; // Devolvemos -1 para indicar que 'a' debe estar antes que 'b' en la lista ordenada
    } else if (a.price > b.price) { // Si el precio de 'a' es mayor que el precio de 'b'
        return 1; // Devolvemos 1 para indicar que 'b' debe estar antes que 'a' en la lista ordenada
    }
    return 0; // Si los precios son iguales, no se cambia el orden de 'a' y 'b'
});

// Invertimos el orden de los productos ordenados, de modo que el producto más caro esté primero.
console.log(nombres.reverse());


///////////////////////////////////////////////////////

// Definimos un nuevo array llamado newProducts que contiene dos objetos representando nuevos productos.
const newProducts = [
    {
        id: 30,
        title: "Producto 1",
        price: 7.95,
        description: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        rating: {
            rate: 4.5,
            count: 146,
        },
    },
    {
        id: 32,
        title: "Producto 3",
        price: 9.55,
        description: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        rating: {
            rate: 4.5,
            count: 146,
        },
    },
];

// Utilizamos el método .flat() para aplanar el array de productos original (products) y el nuevo array de productos (newProducts) en un solo array.
const productosAplanados = [products, newProducts].flat();

// Imprimimos el array resultante en la consola.
console.log(productosAplanados);

////////////////////////////////////////////////////

// metodo .map() se utiliza para crear un nuevo array con los resultados definidos sobre cada elemento del array original. Su funcion es basicamente "transformar" cada elemento del array original en un nuevo elemento del array resultante.

// metodo .reduce() se utiliza para reducir un array a un unico valor, aplicando una funcion acumuladora a cada elemento del array. En otras palabras, se encarga de acumular los valores del array (o de la propidad de un objeto del array) y devolver un resultado final.

// metodo .sort() se utilia para ordenar los elementos de un array de acuerdo a algun criterio espcifico. el funcionamiento de este metodo co un array de elementos es directo, o sea, no requiere parametros dentro del metodo.

// .reverse() se utilza para revertir el orden actual de los elementos

// .flat() se utila para "aplanar" sub-arrays dentro del array principal. Si el array principal contiene uno o mas sub-arrays .flat() los extrae y los coloca en una sola dimension

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/flat





