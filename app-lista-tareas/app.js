const mensajes = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
const { guardarDB } = require('./helpers/guardarArchivo');

console.clear();

const main = async () => {
  let opcion = 0;
  const tareas = new Tareas();
  do {
    opcion = await mensajes.mostrarMenu();
    switch (opcion.opcion) {
      case 1:
        tareas.crearTarea(await mensajes.ingresarDato('Descripcion de la tarea:'));
        break;
      case 2:
        console.log(tareas.listadoArreglo);
        break;

      default:
        break;
    }
    console.log('Guardando cambios...');
    guardarDB('./database/tareas.json', JSON.stringify(tareas.listadoArreglo));
    await mensajes.pausa();
  } while (opcion.opcion !== 0);
};

main();

/*
const tarea = new Tarea('Hacer la cama');
console.log(tarea);
console.log(tareas);

tareas.listado[tarea.id] = tarea;

console.log(tareas);
*/
