//const argumentos = require("process") No fue necesario agregar, lo toma sin require
const crearArchivo = require ("./creararchivo.js");
const parametros = process.argv

let argumento = parametros[2].split("=")
const base = Number(argumento[1])
if ( argumento[0] == "--base" && (base > 0) ){
        console.log("Parametro correcto. Procesando...")
        let resultado = ""
        for (let numero = 1; numero < 11; numero++){
        //    console.log(cinco + " X " + numero + " = " + cinco*numero)
            resultado= resultado + (`${base} X ${numero} = ${base * numero}`);
            if (numero < 10) {
                resultado= resultado + (`\n`);
            } 
        }
        console.log(resultado);
        
        const nombreArchivo = "tabla-" + base + ".txt"
        crearArchivo.crearArchivo(nombreArchivo, resultado)
    }
    else{
    console.log("Parametro no reconocido. Intente con --base=<numero>")
}

// Con la siguiente linea grabo el archivo con el contenido Hola, sin tener en cuenta si fue correcto o incorrecto
// fs.writeFile("pepe","Hola",()=>{})

