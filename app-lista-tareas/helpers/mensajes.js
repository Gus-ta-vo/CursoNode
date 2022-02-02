const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const colors = require('colors');

function mostrarMenu() {
  return new Promise((resolve, reject) => {
    console.clear();
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
    const rl = readline.createInterface({ input, output });
    rl.question('Seleccione una opción: ', (respuesta) => {
      console.log(`Su opción es: ${respuesta}`);
      rl.close();
      resolve(respuesta);
    });
  });
}

function pausa() {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({ input, output });
    rl.question(`Presione ${colors.green('ENTER')} para continuar`, () => {
      rl.close();
      resolve();
    });
  });
}

module.exports = { mostrarMenu, pausa };
