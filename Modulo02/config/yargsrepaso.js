/*
Se agrego la validacion automatica de la base, poniendo un array de 1 a 20 en choices.
No es muy lindo visulamente en el help.
Quizas para números, se podría mejorar yargs para que tenga un valor minimo y maximo,
en vez de un array
*/

const parametros = require('yargs')
  .option('n', {
    alias: 'nombre',
    type: 'string',
    describe: 'Nombre de la persona',
    demandOption: true,
  })
  .option('a', {
    alias: 'apellido',
    type: 'string',
    describe: 'Apellido de la persona',
    demandOption: true,
  })
  .option('e', {
    alias: 'edad',
    type: 'number',
    describe: 'Edad de la persona',
    demandOption: true,
  })
  .option('d', {
    alias: 'delete',
    type: 'boolean',
    describe: 'Borrar registro',
    demandOption: false,
    default: false,
  })
  .check((parametrosEntrada) => {
    if (parametrosEntrada.edad < 18) {
      throw new Error('Solo permitido mayores de edad +18');
    } else if (parametrosEntrada.nombre === '' || parametrosEntrada.apellido === '') {
      throw new Error('Nombre y Apellido no pueden estar vacíos');
    } else {
      return true;
    }
  })
  .argv;

exports.parametros = parametros;
