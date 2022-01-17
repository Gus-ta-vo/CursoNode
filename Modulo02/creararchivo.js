//Librería de funciones
const fs = require('fs');

function crearArchivo(nombreArchivo, datosArchivo) {
    fs.writeFile(nombreArchivo, datosArchivo, (errorArchivo) => {
    if (errorArchivo) throw errorArchivo;
    console.log(`Archivo ${nombreArchivo} Grabado!`);
})
};
module.exports = { crearArchivo };
