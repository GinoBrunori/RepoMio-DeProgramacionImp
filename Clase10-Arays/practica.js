// let nombres = ['gino','ana','pepe']
// let a = [true,false,nombres]
// // console.table(a[2][0]);
// console.log(a.length)

// Metodos de Array
let metodos = [true,2,3,4,5]
metodos.push(6,7,8)
console.log(metodos);

let pop = metodos.pop();
console.table({metodos})
console.log({pop})

let lineArray = ['hola','chau','que onda', 'oh yes']
// console.table(lineArray)
let shift = lineArray.shift();
// console.table(shift);
lineArray.unshift('alooo');
// console.table(lineArray)

// let saludos = lineArray.join(" o ")
// console.table(saludos);

let num = [2,4,5,78,4,4,7,43,7,8,3]

let posicion = num.indexOf(78);

if (posicion != -1) {
    console.log(`Lo encontré!, se encuentra en la posicion ${posicion}`)
}