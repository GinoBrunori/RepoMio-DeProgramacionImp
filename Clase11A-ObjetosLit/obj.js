// let obj = {
//     nombre: "Gino",
//     apellido: "Brunori",
//     edad: 5,
//     saludo: function () {
//         return `hola ${this.nombre} ${this.apellido}`
//     }
// }

// console.log(obj.saludo());
let laLinea = function() {console.log(`${this.numero} ${this.nombre} ${this.direccion} ${this.telefono}`)}

let agenda = [
    {numero: 1, nombre: "Juan Peletin", direccion: "La Paz 345", telefono: 23487238,
    mostrar: laLinea},
    {numero: 2, nombre: "Lara Zampetti", direccion: "Paris 234", telefono: 36346348,mostrar: laLinea},
    {numero: 3, nombre: "Oscar Lapite", direccion: "Migueletes 756", telefono: 73452352,mostrar: laLinea},
    {numero: 4, nombre: "Rosa Masterri", direccion: "Cordoba 442", telefono: 509017423,mostrar: laLinea},
    {numero: 5, nombre: "Pedro Lussich", direccion: "Wilde 4234", telefono: 99276243,mostrar: laLinea}  
]

// agenda[1].mostrar();
// for (let i = 0; i < agenda.length; i++) {
//     agenda[i].mostrar()
// }

for (let i = 0; i < agenda.length; i++) {
    let unAmigo = agenda[i];
    unAmigo.mostrar = laLinea;
    unAmigo.mostrar();
}


