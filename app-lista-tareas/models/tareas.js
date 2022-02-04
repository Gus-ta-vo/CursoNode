const colors = require('colors');
const Tarea = require('./tarea');

class Tareas {
  listado = {};

  get listadoArreglo() {
    const listadoArr = [];
    Object.keys(this.listado).forEach((id) => {
      listadoArr.push(this.listado[id]);
    });
    return listadoArr;
  }

  constructor() {
    this.listado = {};
  }

  crearTarea(desc) {
    const tarea = new Tarea(desc);
    this.listado[tarea.id] = tarea;
  }

  cargarTareasFromArray(arreglo = []) {
    arreglo.forEach((elemento) => {
      this.listado[elemento.id] = elemento;
    });
  }

  listadoCompleto() {
    this.listadoArreglo.forEach((elemento, indice) => {
      console.log(` ${colors.green(indice + 1)} ${colors.white(elemento.desc)} :: ${(elemento.completadoEn) ? colors.green('COMPLETA') : colors.red('PENDIENTE')}`);
    });
  }

  listarPendientesCompletadas(completadas = true) {
    this.listadoArreglo.forEach((elemento, indice) => {
      if ((completadas && elemento.completadoEn !== null)
          || (!completadas && elemento.completadoEn == null)) {
        console.log(` ${colors.green(indice + 1)} ${colors.white(elemento.desc)} :: ${(elemento.completadoEn) ? colors.green('COMPLETA') : colors.red('PENDIENTE')}`);
      }
    });
  }
}

module.exports = Tareas;
