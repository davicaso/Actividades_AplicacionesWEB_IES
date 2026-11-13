// 1.a
function saludar(){
    console.log('¡Hola, bienvenido!')
}

saludar()

// 1.b
function saludarPersona(nombre){
    console.log(`¡Hola ${nombre}, bienvenido!`)
}

saludarPersona('Matías')

// 1.c
function esMayorDeEdad(edad){
    if(edad >= 18){
        return true
    } else {
        return false
    }
}

const resultadoEdad = esMayorDeEdad(20)
console.log(resultadoEdad)

// 2.a
const esMayorDeEdadFlecha = (edad)=>{
    if(edad >= 18){
        return true
    } else {
        return false
    }
}

const resultadoEdadFlecha = esMayorDeEdadFlecha(15)
console.log(resultadoEdadFlecha)

// 2.b
const compararNumeros = (numero1, numero2)=>{
    if(numero1 < numero2){
        console.log(`El número ${numero1} es menor que ${numero2}`)
    } else if(numero1 == numero2){
        console.log(`El número ${numero1} es igual que ${numero2}`)
    } else {
        console.log(`El número ${numero1} es mayor que ${numero2}`)
    }
}

for(let i = 0; i <= 10; i++){
    compararNumeros(i, 5)
}

// 3.a / 3.b
const operacion = (numero1, numero2, cb)=>{
    if(typeof numero1 != 'number' || typeof numero2 != 'number'){
        console.log('Debe ingresar solo números.')
    } else {
        cb(numero1, numero2)
    }
}

const suma = (a, b)=>{
    const resultado = a + b
    console.log(`El resultado de la suma es ${resultado}`)
}

const resta = (a, b)=>{
    const resultado = a - b
    console.log(`El resultado de la resta es ${resultado}`)
}

operacion(10, 5, suma)
operacion(10, 5, resta)
operacion('hola', 5, suma)
