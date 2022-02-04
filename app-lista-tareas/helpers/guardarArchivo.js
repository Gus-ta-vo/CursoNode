const fs = require('fs');

const guardarDB = (nombreDB, datosDB) => {
  fs.writeFile(nombreDB, datosDB, (errorDB) => {
    if (errorDB) throw errorDB;
    console.log(`Archivo ${nombreDB} Grabado!`);
  });
};

const leerDB = (nombreDB) => {
  let datos = [];
  if (fs.existsSync(nombreDB)) {
    datos = fs.readFileSync(nombreDB, { encoding: 'utf-8' }, (errorDB) => {
      if (errorDB) throw errorDB;
      console.log(`Archivo ${nombreDB} leido!`);
    });
  }
  return JSON.parse(datos);
};

module.exports = { guardarDB, leerDB };
