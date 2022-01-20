/*
Se agrego la validacion automatica de la base, poniendo un array de 1 a 20 en choices.
No es muy lindo visulamente en el help.
Quizas para números, se podría mejorar yargs para que tenga un valor minimo y maximo,
en vez de un array
*/

let numerosValidos = new Array
for (let i = 1; i < 21; i++){
    numerosValidos.push(i)
}

const parametros = require ("yargs")
    .option(
        'b', {
        alias: 'base',
        type: 'number',
        describe: 'Base numérica para multiplicar',
        choices: numerosValidos,
        demandOption: true
    })
    .option(
        'l', {
        alias: 'listar',
        type: 'boolean',
        describe: 'Muestra resultado por pantalla',
        demandOption: false,
        default: false
    })
 // Esta validación no es necesaria, ya que valida automáticamente con el contenido de choices
 // Si se desactiva choices, está validación funciona
    .check((parametros, options) => {
        if (parametros.base <1 || parametros.base > 20) {
            throw new Error("Debes colocar un valor de base entre 1 y 20")
        } else {
            console.log("Parametro correcto. Procesando...")
            return true
        }
    }) 
    .argv;

    exports.parametros = parametros