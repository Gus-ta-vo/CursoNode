const mensajes = require('./helpers/mensajes');

console.clear();
const main = async () => {
  try {
    mensajes.mostrarMenu();
  } catch (error) {
    console.log(error);
  }
};

main();
// mensajes.pausa()
