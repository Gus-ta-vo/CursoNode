const mensajes = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

console.clear();

const main = async () => {
  let opcion = 0;
  do {
    opcion = await mensajes.mostrarMenu();
    await mensajes.pausa();
  } while (opcion.opcion !== 0);
};

// main();

// Ejemplo  de agregar tarea al listado
const tareas = new Tareas();
const tarea = new Tarea('Hacer la cama');
console.log(tarea);
console.log(tareas);

tareas.listado[tarea.id] = tarea;

console.log(tareas);
