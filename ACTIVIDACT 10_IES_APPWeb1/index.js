//Estructuras de control CONDICIONALES

//Utilizando la estructura de control if, else if o else
//Escriba un programa que verifique si la variable edad, definida con un número entero, es mayor o igual a 18. Si lo es, imprime "Es mayor de edad", de lo contrario, imprime "Es menor de edad"
//let edad = 15;
//if (edad >= 18) {
    //console.log("Es mayor de edad");
//} else {
    //console.log("Es menor de edad");
//}

//let numero = 3;
//if (numero % 2 === 0) {
    //console.log("El numero es par");
//} else {
    //console.log("El numero es impar");
//}

//let nota = parseInt(prompt("Ingrese su nota: "));
//if (nota < 4) {
    //console.log("Reprobado");
//} else if (nota >= 4 && nota < 7) {
    //console.log("Aprobado");
//} else {
    //console.log("Excelente");
//}

//Estructuras de control BUCLES
//Utilizando la estructura de control for

//for (let i = 0; i < 11; i++) {
   // console.log("El valor de i es: " + i);
// }

//for (let i = 10; i > 0; i--) {
//    console.log("El valor de i es: "  +i);
//}


//for (let i = 0; i < 20; i++) {
//    if (i % 2 === 0) {
      //  console.log("El número es par");
   // } else {
  //      console.log("El número es impar");
   // }
//}

for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log(`El número ${i} es par`);
    } else {
        console.log(`El número ${i} es impar`);    }
}