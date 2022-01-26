const crearArchivo = require('./creararchivo');
const { parametros } = require('./config/yargsrepaso');

const { nombre, apellido, edad } = parametros;
const borrar = parametros.delete;

// console.log(nombre, apellido, edad, borrar)

const resultadoArchivo = (`${nombre}, ${apellido}, ${edad} `);

let nombreArchivo = 'BD_PERSONAS_';
if (edad < 45) {
  nombreArchivo += 'menor_45';
} else {
  nombreArchivo += 'mayor_45';
}

if (borrar) {
  const datosArchivo = crearArchivo.leerArchivo(nombreArchivo).toString();
  let datosArchivoArray = datosArchivo.split('\n');
  datosArchivoArray = datosArchivoArray.filter((elemento) => elemento !== resultadoArchivo && elemento !== '');
  crearArchivo.crearArchivo(nombreArchivo, '');
  datosArchivoArray.forEach((elemento) => {
    crearArchivo.abrirArchivoAgregar(nombreArchivo, `${elemento}\n`);
  });
} else {
  crearArchivo.abrirArchivoAgregar(nombreArchivo, `${resultadoArchivo}\n`);
}
