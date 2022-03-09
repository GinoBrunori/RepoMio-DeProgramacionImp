const prompt = require("prompt-sync")({signint:true});

function sumar(num1, num2){
    return num1 + num2;
}

function restar (num1, num2){
    return num1 - num2;
}

function multiplicar(num1, num2){
    return num1 * num2;
}

function potenciaCuadrado(num1){
    return num1 ** 2;
}

function dividir(num1, num2){
    return num1 / num2;
}

function promedioTresNumeros(num1,num2,num3){
    return (num1 + num2 + num3) / 3;
}

function porcentaje(num1,num2){
    return (num2 * 100) / num1 + "%";
}

let numero1 = parseInt(prompt("Ingrese un numero: "));
let numero2 = parseInt(prompt("Ingrese otro número: "));
let numero3 = parseInt(prompt("Ingrese otro número: "));



console.log("----------------------------Testo de operaciones--------------------------------");

console.log(sumar(numero1, numero2));
console.log(restar(numero1, numero2));
console.log(multiplicar(numero1, numero2));
console.log(dividir(numero1, numero2));
console.log(potenciaCuadrado(numero1));
console.log(promedioTresNumeros(numero1,numero2,numero3));
console.log(porcentaje(numero1, numero2));



// const prompt = require("prompt-sync")({signint:true});

// var n1, n2,n3, resultado;
// n1= parseInt (prompt("introduce primer numero: "));
// n2= parseInt (prompt("introduce el segundo numero: "));
// n3= prompt( ("introduce un signo: "));

// if (n3=="+"){
//     resultado= n1+n2;

// }else if (n3=="-"){
//     if (n1>n2){
//         resultado= n1-n2 ;
//     } else {
//         resultado=n2-n1;
//     }
// }else if (n3==="*"){
//     resultado= n1*n2;
// } else if (n3=="/"){
//     if (n1>n2);
//         resultado= n1/n2;
//     }else {
//         resultado=n2/n1;
//     }
//     console.log(resultado);