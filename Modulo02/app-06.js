// const argumentos = require("process") No fue necesario agregar, lo toma sin require
const colors = require('colors');
const { argv, option, options } = require('yargs');
const parametros = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
  })
  .check((argv, options) => {
    argv.base = Number(argv.base);
    if (argv.base > 0) {
      return true;
    }

    throw new Error('base debe ser un numero y mayor que 0');
  })
  .argv;
const crearArchivo = require('./creararchivo');

console.log(parametros);
// const parametros = process.argv

/*
console.log(colors.rainbow("Generador tabla de multiplicar"))
let argumento = parametros[2].split("=")
const base = Number(argumento[1])
if ( argumento[0] == "--base" && (base > 0) ){
        console.log("Parametro correcto. Procesando...")
        let resultado = ""
        for (let numero = 1; numero < 11; numero++){
        //    console.log(cinco + " X " + numero + " = " + cinco*numero)
            resultado= resultado + (`${base} X ${numero} = ${base * numero}`);
            if (numero < 10) {
                resultado= resultado + (`\n`);
            }
        }
        console.log(resultado);

        const nombreArchivo = "tabla-" + base + ".txt"
        crearArchivo.crearArchivo(nombreArchivo, resultado)
    }
    else{
    console.log("Parametro no reconocido. Intente con --base=<numero>")
}

// Con la siguiente linea grabo el archivo con el contenido Hola, sin tener en cuenta si fue correcto o incorrecto
// fs.writeFile("pepe","Hola",()=>{})
*/
