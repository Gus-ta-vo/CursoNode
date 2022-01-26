// Librería de funciones
const fs = require('fs');

function crearArchivo(nombreArchivo, datosArchivo) {
  fs.writeFile(nombreArchivo, datosArchivo, (errorArchivo) => {
    if (errorArchivo) throw errorArchivo;
    console.log(`Archivo ${nombreArchivo} Grabado!`);
  });
}

function leerArchivo(nombreArchivo) {
  return fs.readFileSync(nombreArchivo);
}

function abrirArchivoAgregar(nombreArchivo, datosArchivo) {
  fs.open(nombreArchivo, 'a', (err, fd) => {
    if (err) {
      console.log('Problema con el archivo - Verifique path y permisos');
    } else {
      console.log('Archivo abierto');
      fs.write(fd, datosArchivo, 0, datosArchivo.length, (err1) => {
        if (err1) {
          console.log('Error al agregar datos al archivo');
        } else {
          console.log('Persona agregada con éxito');
        }
      });
    }
  });
}

module.exports = { crearArchivo, leerArchivo, abrirArchivoAgregar };
