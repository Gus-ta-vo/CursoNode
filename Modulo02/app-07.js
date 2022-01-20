const colors = require('colors');
const crearArchivo = require ("./creararchivo.js");
const parametros = require ("yargs")
    .options({
        'b': {
        alias: 'base',
        type: 'number',
        demandOption: true
    }}, {
        'l': {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false
    }})
    .check((parametros, options) => {
        if (parametros.base <1 || parametros.base > 20) {
            throw new Error("Debes colocar un valor de base entre 1 y 20")
        } else {
            console.log("Parametro correcto. Procesando...")
            return true
        }
    }) 
    .argv;

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
