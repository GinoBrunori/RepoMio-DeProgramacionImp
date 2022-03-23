const prompt = require("prompt-sync")({signint:true});


let suma = (num1,num2) => num1 + num2;
let resta = (num1,num2) => num1 - num2;
let multiplicacion = (num1,num2) => num1 * num2;
let division = (num1,num2) => num1 / num2;
let cuadradoDeUnNumero = num1 => multiplicacion(num1,num1);
// let promedioDe3 = (num1,num2,num3) => {
//     let sumaDe3 = num1 + num2 + num3;
//     return division(sumaDe3, 3);
// }
let promedioDe3 = (num1,num2,num3) => {
    return division(suma(num1,suma(num2,num3)),3);
}
let porcentaje = (num1,num2) => division(multiplicacion(num1,num2), 100);

let numero1 = parseInt(prompt('Ingrese el 1er numero: '))
let numero2 = parseInt(prompt('Ingrese el 2do numero: '))
let numero3 = parseInt(prompt('Ingrese el 3er numero: '))

console.log("“-------------- Testeo de Operaciones / Calculadora --------------”");

console.log(`El resultado de sumar ${numero1} y ${numero2} es: ${suma(numero1,numero2)}`);
console.log(`El resultado de restar ${numero1} y ${numero2} es: ${resta(numero1,numero2)}`);
console.log(`El resultado de multiplicar ${numero1} y ${numero2} es: ${multiplicacion(numero1,numero2)}`);
console.log(`El resultado de dividir ${numero1} y ${numero2} es: ${division(numero1,numero2)}`);
console.log(`El resultado del cuadrado de ${numero1} es: ${cuadradoDeUnNumero(numero1)}`);
console.log(`El resultado del promedio entre ${numero1}, ${numero2} y ${numero3} es: ${promedioDe3(numero1,numero2,numero3)}`);
console.log(`El ${numero2}% de ${numero1} es: ${porcentaje(numero1,numero2)}`);



