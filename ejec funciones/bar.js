let edad = 21; //(el número es a modo de ejemplo, podés cambiarlo o
// crear otras para tener varias pruebas)

if (edad <= 0) {
    console.log("Error, edad inválida. Por favor ingrese un número válido")
}  else if (edad < 18) {
console.log("No puede pasar al bar.")
}

if (edad < 21){
console.log("Puede pasar al bar, pero no puede tomar alcohol.")
} else if (edad <= 21) {
    console.log('felicitaciones por tener 21')
} else if (edad % 2 != 0) {
    console.log('es impar')
}else {
console.log("Puede pasar al bar y tomar alcohol.")
}

