// IF ternario
// - se guarda en una variable
// - no lleva returns
// - no hace falta console.log

let condicion = 11 > 10 ? ('el 4 es mas grande') : false;

console.log(condicion);


let dia = 'Miercoles'

switch (dia) {
    case 'Lunes':
        console.log("hoy es lunes");
        break;
    case 'Martes':
        console.log('hoy el martes');
        break;
    case 'Miercoles':
        console.log('hoy es miercoles');
        break;
    default:
        console.log('hoy es jueves');
}


// Crea una función llamada abrirParacaidas() que recibe dos parámetros: velocidad y
// altura. La función deberá decirnos si el paracaídas debe abrirse teniendo en cuenta lo
// siguiente:
// ● La velocidad debe ser menor a 1000 km/h.
// ● La altura debe ser mayor o igual a 2000 m y menor a 3000 m.

function abrirParacaidas (velocidad,altura) {
    return (velocidad < 1000 && altura >= 2000 && altura < 3000)
}

console.log(abrirParacaidas(500, 2100));

function totalAPagar (vehiculo,litrosConsumidos) {
    let litros = 0;
    if (vehiculo == "coche") {
         litros = litrosConsumidos * 86;
    } else if (vehiculo == "autobus") {
         litros = litrosConsumidos * 55;
    } else if (vehiculo == "moto") {
         litros = litrosConsumidos *70;
    }

    if (litrosConsumidos <= 25) {
        let total = litros + 50;
       return (`El total a pagar es $${total}`)
    } else if (litrosConsumidos > 25) {
        let total2 = litros + 25;
        return (`El total a pagar es $${total2}`)
    }
}

console.log(totalAPagar('moto', 50))


// Traductor condicional
// Usando la estructura switch, crea un programa en el que si un usuario ingresa "casa",
// "perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma
// inglés.
// En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le
// informe que la palabra ingresada es incorrecta.

function traductor (palabra) {
    switch (palabra) {
        case "casa":
            console.log('house');
            break;
        case "perro":
            console.log('dog');
            break;
        case "árbol":
            console.log('tree');
            break;
        case "genio":
            console.log('genius');
            break;
        default:
            console.log('la palabra ingresa es incorretca');
    }        
}

traductor('perro');

// Valoración de películas
// Usando la estructura switch, pedirle al usuario que valore la película que acaba de ver
// según la siguiente escala:
// ● Muy mala.
// ● Mala.
// ● Mediocre.
// ● Buena.
// ● Muy buena.
// Acompaña cada valoración con un mensaje que indique si te lamentás o te alegrás
// por su valoración.
// Por ejemplo: "Calificaste la película como Muy Mala. Lo lamentamos mucho.".

function comoEstuvo (valoracion) {
    switch (valoracion) {
        case "Muy mala":
            console.log('Calificaste la película como Muy mala');
            break;
        case 'Mala':
            console.log('Calificaste la película como Mala');
            break;
        case 'Mediocre':
            console.log('Calificaste la película como Mediocre');
            break;
        case 'Buena':
            console.log('Calificaste la película como Buena');
            break;
        case 'Muy buena':
            console.log('Calificaste la película como Muy buena');
            break;
        default:
            console.log('Ingresaste un valor invalido');
    }
}

comoEstuvo('buena')