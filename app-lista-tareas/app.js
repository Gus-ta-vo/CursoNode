const mensajes = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');

console.clear();

const main = async () => {
  let opcion = 0;
  const tareas = new Tareas();
  console.log('Leyendo BD...');
  const tareasDB = leerDB('./database/tareas.json');
  tareas.cargarTareasFromArray(tareasDB);
  // puntos para controlar lo que se fue cargando
  /*
  console.log(tareasDB);
  await mensajes.pausa();
  console.log(tareas.listadoArreglo);
  await mensajes.pausa();
  */
  do {
    opcion = await mensajes.mostrarMenu();
    switch (opcion.opcion) {
      case 1:
        tareas.crearTarea(await mensajes.ingresarDato('Descripcion de la tarea:'));
        break;
      case 2:
        tareas.listadoCompleto();
        break;

      case 7:
        console.log('Guardando cambios...');
        guardarDB('./database/tareas.json', JSON.stringify(tareas.listadoArreglo));
        break;

      default:
        break;
    }
    await mensajes.pausa();
  } while (opcion.opcion !== 0 && opcion.opcion !== 7);
};

main();

/*
const tarea = new Tarea('Hacer la cama');
console.log(tarea);
console.log(tareas);

tareas.listado[tarea.id] = tarea;

console.log(tareas);
*/
