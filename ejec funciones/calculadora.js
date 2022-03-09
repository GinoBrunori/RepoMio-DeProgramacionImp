const prompt = require("prompt-sync")({signint:true});


let sumar = (num1,num2) => num1 + num2;
let restar = (num1,num2) => num1 - num2;
let multiplicar = (num1,num2) => num1 * num2;
let dividir = (num1,num2) => num1 / num2;
let cuadradoDeUnNumero = (numberA) => multiplicar(numberA, numberA);
let promedioDe3 = (num1,num2,num3) => {
    let resultadoSuma = sumar(num1,num2);
    let resultadoSuma2 = resultadoSuma + num3;
    return resultadoSuma2 / 3;
};
let calcularPorcentaje = (num1,num2) => {
    let resultadoMulti = multiplicar(num1,num2);
    return resultadoMulti / 100;
};
let generadordePorcentaje = (num1,num2) => {
    let cien = 100;
    let resultadoMultiX100 = num1 * cien;
    let div = dividir(resultadoMultiX100,num2);
    return div;
}

let numero1 = parseInt(prompt('Ingrese su numero1: '));
let numero2 = parseInt(prompt('Ingrese su numero2: '));
let numero3 = parseInt(prompt('Ingrese su numero3: '));



console.log(`El resultado de sumar ${numero1} + ${numero2} es: ${sumar(numero1,numero2)}`);
console.log(`El resultado de la resta es: ${restar(numero1,numero2)}`);
console.log(`El resultado de la multiplicacion es: ${multiplicar(numero1,numero2)}`);
console.log(`El resultado de la division es: ${dividir(numero1,numero2)}`);
console.log(`El resultado del cuadrado de ${numero1} es: ${cuadradoDeUnNumero(numero1)}`);
console.log(`El resultado del promedio de ${numero1} , ${numero2} y ${numero3} es: ${promedioDe3(numero1,numero2,numero3)}`);
console.log(`El resultado del porcentaje es ${calcularPorcentaje(numero1,numero2)}`);
console.log(`El resultado del generador es ${generadordePorcentaje(numero1,numero2)}`);

