const colors = require('colors');
const crearArchivo = require('./creararchivo');
const { parametros } = require('./config/yargs');

// console.log(parametros)
// const parametros = process.argv
const { base } = parametros;
console.log(colors.rainbow('Generador tabla de multiplicar'));

let resultado = '';
for (let numero = 1; numero < 11; numero += 1) {
  resultado += (`${base} X ${numero} = ${base * numero}`);
  if (numero < 10) {
    resultado += ('\n');
  }
}
if (parametros.listar === true) {
  console.log(resultado);
}

const nombreArchivo = `tabla-${base}.txt`;
crearArchivo.crearArchivo(nombreArchivo, resultado);
