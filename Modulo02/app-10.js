const colors = require('colors');
const crearArchivo = require('./creararchivo');
const { parametros } = require('./config/yargs');

// console.log(parametros)
// const parametros = process.argv
const { base, cantidad } = parametros;
console.log(colors.rainbow('Generador tabla de multiplicar'));

let resultado = '';
let resultadoArchivo = '';
console.log(colors.green('-------------'));
console.log(colors.white('Tabla del ') + colors.blue(base));
console.log(colors.green('-------------'));
for (let numero = 1; numero < cantidad + 1; numero += 1) {
  resultadoArchivo = `${resultadoArchivo}${base} X ${numero} = ${base * numero}`;
  resultado = resultado + colors.white(base)
                + colors.green(' X ')
                + colors.yellow(numero)
                + colors.green(' = ')
                + colors.red(base * numero);
  if (numero < cantidad) {
    resultado = `${resultado}\n`;
    resultadoArchivo = `${resultadoArchivo}\n`;
  }
}
if (parametros.listar === true) {
  console.log(resultado);
}
console.log(colors.green('-------------'));

const nombreArchivo = `./salida/tabla-${base}.txt`;
crearArchivo.crearArchivo(nombreArchivo, resultadoArchivo);
