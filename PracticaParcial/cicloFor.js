function repetir (frase) {
    for (let index = 1; index <= 5; index++) {
    console.log(`${index} ${frase}`);;
    
}
}

// repetir('hola')

// 1) Crear una función que pida un valor por parámetro y muestre los 10
// números siguientes.

function numSiguientes (num) {
    for (let i = num+1; i < num+10; i++) {
        console.log(i);
    }
}

// numSiguientes(10);

// 2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.

function tresEntres() {
    for (let i = 5; i <= 20; i+=3) {
        console.log(i)
    }
}

// console.log(tresEntres());

// 3) Escribir un programa que muestre la sumatoria de todos los números
// entre el 0 y el 100

function sumatoria () {
    let acum = 0
    for (let i = 0; i <= 100; i++) {
        acum += i;
    }
    return acum;
}

// console.log(sumatoria());


// 4) Dado un número entero positivo, mostrar su factorial. El factorial de
// un número se obtiene multiplicando todos los números enteros
// positivos que hay entre el 1 y ese número.

function factorial (num) {
    let factor = 0
    for (let i = 0; i < num; i++) {
        factor = i * num;
    }
    return factor;
}

// console.log(factorial(5))


// 7) Escribí un programa que itere sobre el arreglo nombres e
// imprima cada uno en la consola: const nombres = ["Pedro",
// "Pablo", "Maria", "Juan", "Diana"];

const nombres = ["Pedro","Pablo"];
function iterar (array) {
    for (let i = 0; i <= array.length; i++) {
        console.log(array[i])
    }
}

// iterar(nombres);


// 8) Construí un pseudocódigo que permita ingresar un número, si
// el número es mayor de 500, se debe calcular y mostrar en
// pantalla el 18% de este.

function mayor (num) {
    if (num > 500) {
        return num * 18 / 100  
    }
}

// console.log(mayor(5));


// Escribí una función llamada elemento que recibe un arreglo
// como parámetro. La función debe devolver el valor que se
// encuentra en la tercera posición. Si el arreglo no tiene al menos
// 3 elementos deberá retornar -1.

function elemento (array) {
    let noTieneTresElementos = -1;
    if (array.length >= 3) {
        return array[3] ;
    } else {
        return -1;
    }
}

console.log(elemento(nombres))
console.log(nombres.length);