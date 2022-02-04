const inquirer = require('inquirer');
const colors = require('colors');

const mostrarMenu = async () => {
  console.clear();
  console.log(colors.green('======================'));
  console.log('Seleccione una opción');
  console.log(colors.green('======================'));
  const opcion = await inquirer
    .prompt([
      {
        type: 'list',
        name: 'opcion',
        message: 'Ingrese una opción',
        choices: [
          { value: 1, name: `${colors.green(1)} . Crear tarea` },
          { value: 2, name: `${colors.green(2)} . Listar tareas` },
          { value: 3, name: `${colors.green(3)} . Listar tareas completadas` },
          { value: 4, name: `${colors.green(4)} . Listar tareas pendientes` },
          { value: 5, name: `${colors.green(5)} . Completar tareas(s)` },
          { value: 6, name: `${colors.green(6)} . Borrar tarea` },
          { value: 7, name: `${colors.green(7)} ${colors.white('Salir')} ${colors.green('GRABAR CAMBIOS')}` },
          { value: 0, name: `${colors.red(0)} ${colors.white('Salir')} ${colors.red('NO GRABAR CAMBIOS')}` },
        ],
      },
    ]);
  return opcion;
};

const pausa = async () => {
  await inquirer
    .prompt([
      {
        type: 'input',
        name: 'pausa',
        message: `Presione ${colors.green('ENTER')} para continuar`,
      },
    ]);
};

const ingresarDato = async (mensaje) => {
  const { dato } = await inquirer
    .prompt([
      {
        type: 'input',
        name: 'dato',
        message: mensaje,
        validate(text) {
          if (text.length === 0) { return 'Por favor ingrese un valor'; }
          return true;
        },
      },
    ]);
  return dato;
};

module.exports = { mostrarMenu, pausa, ingresarDato };
