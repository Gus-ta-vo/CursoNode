const fs = require('fs');

function guardarDB(nombreDB, datosDB) {
  fs.writeFile(nombreDB, datosDB, (errorDB) => {
    if (errorDB) { throw errorDB; }
    console.log(`Archivo ${nombreDB} Grabado!`);
  });
}

module.exports = { guardarDB };
