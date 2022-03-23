// A partir de el siguiente array de edades nos solicitan realizar lo siguiente:

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
// console.log(edades);


// Obtener en un nuevo array las edades menores a 18.
function obtenerMenores (array){
    let menores = [];
    for (let i = 0; i < array.length; i++) {
    if (array[i] < 18) {
        menores.push(array[i])
    }
    }
    return menores;
}

// console.log(obtenerMenores(edades));

// Obtener en un nuevo array las edades mayor o igual a 18.
function obtenerMayores (array){
    let mayores = [];
    for (let i = 0; i < array.length; i++) {
    if (array[i] > 18) {
        mayores.push(array[i])
    }
    }
    return mayores;
}

// console.log(obtenerMayores(edades));
// Obtener en un nuevo array las edades igual a 18.
function obtenerIguales (array){
    let igual = [];
    for (let i = 0; i < array.length; i++) {
    if (array[i] == 18) {
        igual.push(array[i])
    }
    }
    return igual;
}

// console.log(obtenerIguales(edades));

// Obtener el menor.
function menor(array){
    let resultado = array[0];
    for(let i = 0; i<array.length;i++){
       if (array[i] < resultado){
        resultado = [array[i]];
    }
}
    return resultado;
}

// Obtener el mayor 
function mayor(array){
    let resultado = array[0];
    for(let i = 0; i<array.length;i++){
       if (array[i] > resultado){
        resultado = [array[i]];
    }
}
    return resultado;
}

console.log(mayor(edades));

// console.log(edades[0])


// Obtener el promedio de edades.
function promedio (array) {
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        contador = contador + array[i];
        
    }
    return contador / array.length;
}

// console.log(promedio(edades));

// Incrementar en 1 todas las edades.
function incrementar (array) {
    for (let i=0; i<array.length;i++){
        array[i]++;
    }
    return array;
}

// console.log(incrementar(edades));

//
const arrayCuentas =
[
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: "$3,253.40",
      edadTitular: 33,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: "$3,229.45",
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: "$1,360.19",
      edadTitular: 34,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: false,
      saldo: "$3,627.12",
      edadTitular: 30,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Ethel Leon",
      estaHabilitada: true,
      saldo: "$1,616.52",
      edadTitular: 34,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Harding Mitchell",
      estaHabilitada: true,
      saldo: "$1,408.68",
      edadTitular: 25,
      tipoCuenta: "corriente"
    }
  ]


//  Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
//   Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
//   Obtener un nuevo array de cuentas cuyas edades sean igual a 30.
//   Obtener la cuenta con el titular de la misma más joven.
//   Obtener un nuevo array por cada tipo de cuenta.
//   Obtener un nuevo array con las cuentas habilitadas.
//   Obtener un nuevo array con las cuentas deshabilitadas.
//   Obtener la cuenta con el menor saldo.
//   Obtener la cuenta con el mayor saldo.

function menores30 (array) {
    let men30 = [];
    let mayIgual30 = [];
    let igualA30 = [];
    let cuentaMasJoven = [array[0]];

    for (let i=0; i<array.length;i++){
        
        if (array[i].edadTitular < 30){
            men30.push(array[i].edadTitular)
        }

        if(array[i].edadTitular >= 30) {
            mayIgual30.push(array[i])
        }

        if(array[i].edadTitular == 30) {
            igualA30.push(array[i])
            
        }

        if (array[i].edadTitular < cuentaMasJoven ) {
            cuentaMasJoven = array[i].edadTitular;
        }
    }
    
    console.log(`Las cuentas menores de 30 son: ${men30}`);
    console.log(mayIgual30);
    console.log(igualA30);
    console.log(cuentaMasJoven);
    
}

menores30(arrayCuentas);






  