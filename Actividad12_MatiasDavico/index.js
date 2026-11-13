// 1.a

const numeros = []

for (let i = 0; i < 5; i++) {
    const numero = Number(prompt('Ingrese un numero'))
    numeros.push(numero)
}

console.log(numeros)


// 1.b

const impares = []

for (let i = 0; i < 5; i++) {
    const numero = Number(prompt('Ingrese un numero'))

    if (numero % 2 !== 0) {
        impares.push(numero)
    }
}

console.log(impares)


// 1.c

const frutas = ['pera', 'manzana', 'banana', 'durazno']

frutas.forEach((fruta, indice) => {
    frutas[indice] = fruta.toUpperCase()
})

console.log(frutas)


// 1.d

const frutas2 = ['pera', 'manzana', 'banana', 'durazno']

const frutasMayusculas = frutas2.map((fruta) => {
    return fruta.toUpperCase()
})

console.log(frutasMayusculas)


// 1.e

const frutas3 = ['pera', 'manzana', 'banana', 'durazno']

const frutasConNa = frutas3.filter((fruta) => {
    if (fruta.includes('na')) {
        return true
    }
})

console.log(frutasConNa)


// 2.a

const producto = {
    nombre: 'Remera lisa',
    precio: 15000,
    stock: 20,
    talles: ['s', 'm', 'l']
}

console.log(producto)


// 2.b

const productos = [
    {
        nombre: 'Remera lisa',
        precio: 15000,
        stock: 20,
        talles: ['s', 'm', 'l']
    },
    {
        nombre: 'Pantalon de jean',
        precio: 45000,
        stock: 3,
        talles: ['s', 'm', 'l']
    },
    {
        nombre: 'Buzo con capucha',
        precio: 38000,
        stock: 12,
        talles: ['s', 'm', 'l']
    },
    {
        nombre: 'Campera de abrigo',
        precio: 90000,
        stock: 1,
        talles: ['s', 'm', 'l']
    }
]

productos.forEach((prod) => {
    if (prod.stock < 5) {
        console.log(prod)
    }
})


// 2.c

const productosConDescuento = productos.map((prod) => {
    return {
        nombre: prod.nombre,
        precio: prod.precio * 0.9,
        stock: prod.stock,
        talles: prod.talles
    }
})

console.log(productosConDescuento)


// 2.d

const productosConStock = productos.filter((prod) => {
    return prod.stock > 10
})

console.log(productosConStock)
