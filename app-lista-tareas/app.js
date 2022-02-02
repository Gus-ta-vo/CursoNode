const mensajes = require('./helpers/mensajes');

console.clear();

const main = async () => {
  let opcion = '0';
  do {
    opcion = await mensajes.mostrarMenu();
    await mensajes.pausa();
  } while (opcion !== '0');
};

main();
