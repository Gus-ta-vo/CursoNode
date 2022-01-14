var fs = require('fs');

console.log("Modulo 2 tarea 2");

let resultado = ""
const cinco = 5
for (let numero = 1; numero < 11; numero++){
//    console.log(cinco + " X " + numero + " = " + cinco*numero)
    resultado= resultado + (`${cinco} X ${numero} = ${cinco * numero}`);
    if (numero < 10) {
        resultado= resultado + (`\n`);
    } 
}
console.log(resultado);

fs.writeFile("tabla-5.txt", resultado, (errorArchivo) => {
    if (errorArchivo) throw errorArchivo;
    console.log('Archivo Grabado!');
});

