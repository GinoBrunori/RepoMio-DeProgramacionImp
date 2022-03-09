
// for (let index = 0; index <= 5; index++) {
//     console.log(`Dando la vuelta numero ${index}`);;
    
// }

// function loro (texto) {
//     for (i = 1; i <= 5; i++) {
//         console.log(texto)
//     }
// };

// loro('puto')

// function noPares (numero) {
//     let cantDeImpares = 0;
//     for (i = 0; i <= numero; i++) {
//        if (i % 2 != 0) {
//            cantDeImpares++
//        } 
//     }   
//     return cantDeImpares;
// }
// console.log(noPares(8));

// function a (num) {
//     for (i = 0; i <= num; i++) {
//         console.log(`estas en la vuelva ${i}`)
//         console.log ('hola')
//     }
// }

// console.log(a(5))

// let array = ['hola','chau','que tal'];

// for (i = 0; i < array.length; i++) {
//     console.log (array[i])
// }

function contarPares (num) {
    let acum = 0;
        for (let index = 0; index <= num; index++) {
            if (index % 3 != 1) {
            acum++;
        }
        return acum;
    }
};

console.log(contarPares(10));