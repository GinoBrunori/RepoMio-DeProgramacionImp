function conversor (pulgada) {
    let cm = 2.54;
    return pulgada * cm;
}


function convUrl (string) {
    return (`http://www.${string}.com`)
}


function admiracion (string) {
    return (`¡${string}!`)
}

function edadPerros (num) {
    return num * 7;
}

function hora_de_trabajo (sueldo) {
    return sueldo / 40;
}

// function calcularIMC (altura,peso) {
//     return altura * peso;
// }

let calcularIMC = (altura,peso) => altura*peso;

// -- EXTRAS -- 
function mayus (string) {
    return string.toUpperCase();
}

function tipo (parametro) {
    return typeof(parametro);
}

function calculaCircunferencia(radio) {
    return 2 * Math.PI * radio;
  }

console.log(`Las pulgadas son: ${conversor(2)}`);
console.log(convUrl('google'));
console.log(admiracion('hola'));
console.log(`La edad del perro es: ${edadPerros(5)}`);
console.log(`El valor de tu hora de trabajo es: $${hora_de_trabajo(40000)}`);
console.log(`El IMC ES: ${calcularIMC(1.84, 95)}`);
console.log(mayus('chau'));
console.log(`El tipo de dato es: ${tipo('g')}`);
console.log(calculaCircunferencia(3));