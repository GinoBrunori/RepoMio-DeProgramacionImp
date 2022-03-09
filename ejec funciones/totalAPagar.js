function totalAPagar (vehiculo, litrosConsumidos) {
    let total = 0;

    if (vehiculo === 'coche') {
        total = litrosConsumidos * 86
    } else if (vehiculo === 'moto') {
        total = litrosConsumidos * 70
    } else if (vehiculo === 'autobus') {
        total = litrosConsumidos * 55
    } else {
        return "por favor ingrese un tipo de vehiculo valido";
    }    

    if (litrosConsumidos >= 0 && litrosConsumidos <= 25) {
        total = total + 50;
    } else if (litrosConsumidos > 25) {
        total = total + 25;
    } else {
        console.log ( "Por favor ingrese un num mayor a 0");
    } 
    return `El valor a abonar es de $${total}`
}
console.log(totalAPagar('coche', 10))