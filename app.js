const prompt = require("prompt-sync")({ sigint: true });

let nombre = prompt('Ingrese su nombre: ');
console.log(`hola ${nombre}!!!`);



let objLit = {
    marca: "noblex",
    modelo: 2017,
    dueño : "jimi"

};

console.table(objLit);

let nombre1 = "Gino";
console.table(nombre1);