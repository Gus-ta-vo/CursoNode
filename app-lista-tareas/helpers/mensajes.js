const readline = require('node:readline');
const colors = require('colors');

function mostrarMenu() {
  console.log(colors.green('======================'));
  console.log('Seleccione una opción');
  console.log(colors.green('======================'));
  console.log(colors.red('?') + colors.grey('¿Qué desea hacer?'));
  console.log(colors.green('1.') + colors.white('Crear tarea'));
  console.log(colors.green('2.') + colors.white('Listar tareas'));
  console.log(colors.green('3.') + colors.white('Listar tareas completadas'));
  console.log(colors.green('4.') + colors.white('Listar tareas pendientes'));
  console.log(colors.green('5.') + colors.white('Completar tarea(s)'));
  console.log(colors.green('6.') + colors.white('Borrar tarea'));
  console.log(colors.green('0.') + colors.white('SALIR'));
  const rl = readline.createInterface(process.stdin, process.stdout);
  rl.question('Seleccione una opción: ', (answer) => {
    console.log(`Su opción es: ${answer}`);
  });
}

function pausa() {
  console.log(`Presione ${colors.green('ENTER')} para continuar`);
}

module.exports = { mostrarMenu, pausa };
