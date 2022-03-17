let arrayCorreosPendientes = [
    'iroman@digitalhouse.com','loki%digitalhouse.com','loki@digitalhouse.com',    'thanosdigitalhouse.com','thanos@digitalhouse.com'];
  /* array de correos admitidos */
  let arrayCorreosAdmitidos = [
       'thor@digitalhouse.com',
      'tucuMan@digitalhouse.com',
      'wanda@digitalhouse.com'
  ];
  let arrayCorreosDescartados = [];
  

  function verificarCorreo(correo){
    return (correo.indexOf("@") != 1)
}

for (let i =0; i < arrayCorreosPendientes.length;i++) {
    if (verificarCorreo(arrayCorreosPendientes[i])) {
        arrayCorreosAdmitidos.push(arrayCorreosPendientes[i])
    } else {
        arrayCorreosDescartados.push(arrayCorreosPendientes[i])
    }
}

console.log("--- Array de correos admitidos: " + "longitud de array" + " ---");
console.log({arrayCorreosAdmitidos});
console.log();
console.log("---Array de correos Descartados:"+  "longitud de array" + " ---");
console.log({arrayCorreosDescartados});