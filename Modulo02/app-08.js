const colors = require('colors');
const crearArchivo = require ("./creararchivo.js");
const parametros = require ("./config/yargs.js").parametros

//console.log(parametros)
//const parametros = process.argv
base=parametros.base
console.log(colors.rainbow("Generador tabla de multiplicar"))

let resultado = ""
for (let numero = 1; numero < 11; numero++){
    resultado= resultado + (`${base} X ${numero} = ${base * numero}`);
    if (numero < 10) {
        resultado= resultado + (`\n`);
    }
}
if (parametros.listar == true) {
    console.log(resultado);
}

const nombreArchivo = "tabla-" + base + ".txt"
crearArchivo.crearArchivo(nombreArchivo, resultado)
