const mensajes = require('./helpers/inquirer');

console.clear();

const main = async () => {
  let opcion = 0;
  do {
    opcion = await mensajes.mostrarMenu();
    await mensajes.pausa();
  } while (opcion.opcion !== 0);
};

main();
