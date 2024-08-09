let arrayCuentas = [
    {
        nroCuenta: 5486273622,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 27771,
        titularCuenta: "Abigael Natte",
    },
    {
        nroCuenta: 1183971869,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 8675,
        titularCuenta: "Ramon Connell",
    },
    {
        nroCuenta: 9582019689,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 27363,
        titularCuenta: "Jarret Lafuente",
    },
    {
        nroCuenta: 1761924656,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 32415,
        titularCuenta: "Ansel Ardley",
    },
    {
        nroCuenta: 7401971607,
        tipoDeCuenta: "Cuenta Unica",
        saldoEnPesos: 18789,
        titularCuenta: "Jacki Shurmer",
    },
];

let banco = {
    clientes: arrayCuentas,
    consultarCliente: function (titular) {
        // Buscar el cliente por el nombre (titular) en la lista de cuentas
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].titularCuenta === titular) {
                return this.clientes[i]; // Devolver el objeto cliente encontrado
            }
        }
        // Si no se encuentra al cliente, devolver null
        return null;
    },
    deposito: function (titular, cantidad) {
        let cliente = this.consultarCliente(titular);
        if (cliente) {
            cliente.saldoEnPesos += cantidad;
            console.log("Depósito realizado, su nuevo saldo es: " + cliente.saldoEnPesos);
        } else {
            console.log("El cliente no se encuentra en la lista de cuentas.");
        }
    },
    extraccion: function (titular, monto) {
        let cliente = this.consultarCliente(titular);
        if (cliente) {
            if (cliente.saldoEnPesos >= monto) {
                cliente.saldoEnPesos -= monto;
                console.log("Extracción realizada correctamente, su nuevo saldo es: " + cliente.saldoEnPesos);
            } else {
                console.log("Fondos insuficientes.");
            }
        } else {
            console.log("El cliente no se encuentra en la lista de cuentas.");
        }
    }
};

// Ejemplo de uso del método extraccion
banco.extraccion("Abigael Natte", 10000);


// Ejemplo de uso del método deposito
banco.deposito("Abigael Natte", 5000);

// Ejemplo de uso del método consultarCliente
let clienteEncontrado = banco.consultarCliente("Abigael Natte");
console.log(clienteEncontrado);
// console.log(banco);



