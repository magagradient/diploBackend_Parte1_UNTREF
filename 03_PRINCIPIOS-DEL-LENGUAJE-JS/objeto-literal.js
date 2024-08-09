// objeto literal: sirve mucho para guardar informacion

const usuario = {
    nombre: 'Magali',
    apellido: 'Guerzoni',
    edad: 33,
    admin: true,
    nombreCompleto() {
        console.log(`${this.nombre} ${this.apellido}`);
    },
};

// ejecuto la funcion de nombreCompleto:
usuario.nombreCompleto();


// javaScript permite  agregar propiedades dinamicamente:

// se puede modificar el valor del dato por fuera del objeto:
// usuario.nombre = "Victoria"
// se puede agregar un dato por fuera del objeto:
// usuario.dni = 987655153

// el uso del objeto es directo. No requiere que lo instanciemos previo a su utilizacion.

// te imprime toda la informacion del objeto
console.log(usuario);
console.table(usuario);
// te imprime solo el nombre del objeto
// console.log(usuario.nombre);
// cuando no encuentra lo que le solicitas porque no esta te imprime un undefined
console.log(usuario.dni);
// otra anotacion valida para la busqueda de un dato dentro del objeto
console.log(usuario["edad"]);

//  en los objetos literales tambien se le puede definir metodos, una funcion asociada a un objeto. 

// ARRAY DE OBJETOS LITERALES:

const productos = [
    { id: 1, nombre: "producto 1", precio: 100},
    { id: 3, nombre: "producto 3", precio: 500, stock: 10},
    { id: 6, nombre: "producto 6", precio: 2500},
];

for (let i = 0; i < productos.length; i++) {
    console.log(`${productos[i].nombre}, stock: ${productos[i].stock || 0}`);
}

const agregarProducto = (id, nombre) => {
    productos.push({ id: id, nombre: nombre});
    console.clear();
    console.table(productos);
}; 

agregarProducto(20, 'producto por parametro');
