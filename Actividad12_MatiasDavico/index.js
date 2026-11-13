// Punto 1.a

console.log("--- Punto 1.a ---");

let numeros = [];

for (let i = 0; i < 5; i++) {
    let numero = Number(prompt("Punto 1.a - Ingrese un numero:"));
    numeros.push(numero);
}

console.log(numeros);


// Punto 1.b

console.log("--- Punto 1.b ---");

let impares = [];

for (let i = 0; i < 5; i++) {
    let numero = Number(prompt("Punto 1.b - Ingrese un numero:"));

    if (numero % 2 !== 0) {
        impares.push(numero);
    }
}

console.log(impares);


// Punto 1.c

console.log("--- Punto 1.c ---");

let frutas = ["pera", "manzana", "banana", "durazno"];

frutas.forEach(function (fruta, posicion) {
    frutas[posicion] = fruta.toUpperCase();
});

console.log(frutas);


// Punto 1.d

console.log("--- Punto 1.d ---");

let frutas2 = ["pera", "manzana", "banana", "durazno"];

let frutasMayusculas = frutas2.map(function (fruta) {
    return fruta.toUpperCase();
});

console.log(frutasMayusculas);


// Punto 1.e

console.log("--- Punto 1.e ---");

let frutas3 = ["pera", "manzana", "banana", "durazno"];

let frutasConNa = frutas3.filter(function (fruta) {
    if (fruta.includes("na")) {
        return true;
    } else {
        return false;
    }
});

console.log(frutasConNa);


// Punto 2.a

console.log("--- Punto 2.a ---");

let producto = {
    nombre: "Remera lisa",
    precio: 15000,
    stock: 20,
    talles: ["s", "m", "l"]
};

console.log(producto);


// Punto 2.b

console.log("--- Punto 2.b ---");

let productos = [
    {
        nombre: "Remera lisa",
        precio: 15000,
        stock: 20,
        talles: ["s", "m", "l"]
    },
    {
        nombre: "Pantalon de jean",
        precio: 45000,
        stock: 3,
        talles: ["s", "m", "l"]
    },
    {
        nombre: "Buzo con capucha",
        precio: 38000,
        stock: 12,
        talles: ["s", "m", "l"]
    },
    {
        nombre: "Campera de abrigo",
        precio: 90000,
        stock: 1,
        talles: ["s", "m", "l"]
    }
];

productos.forEach(function (prod) {
    if (prod.stock < 5) {
        console.log(prod);
    }
});


// Punto 2.c

console.log("--- Punto 2.c ---");

let productosConDescuento = productos.map(function (prod) {
    return {
        nombre: prod.nombre,
        precio: prod.precio - (prod.precio * 10 / 100),
        stock: prod.stock,
        talles: prod.talles
    };
});

console.log(productosConDescuento);


// Punto 2.d

console.log("--- Punto 2.d ---");

let productosConStock = productos.filter(function (prod) {
    if (prod.stock > 10) {
        return true;
    } else {
        return false;
    }
});

console.log(productosConStock);
