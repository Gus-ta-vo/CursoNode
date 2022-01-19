//const argumentos = require("process") No fue necesario agregar, lo toma sin require
const colors = require('colors');
const { argv, option, options } = require('yargs');
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
        demandOption: false,
        default: false
    }})
    .check((argv, options) => {
        if (argv.base <1 || argv.base > 20) {
            throw new Error("Debes colocar un valor de base entre 1 y 20")
        } else {
            console.log("Parametro correcto. Procesando...")
            return true
        }
    }) 
    .argv;

//console.log(parametros)
//const parametros = process.argv
base=argv.base
console.log(colors.rainbow("Generador tabla de multiplicar"))

let resultado = ""
for (let numero = 1; numero < 11; numero++){
    resultado= resultado + (`${base} X ${numero} = ${base * numero}`);
    if (numero < 10) {
        resultado= resultado + (`\n`);
    }
}
if (parametros.listar) {
    console.log(resultado);
}

const nombreArchivo = "tabla-" + base + ".txt"
crearArchivo.crearArchivo(nombreArchivo, resultado)
