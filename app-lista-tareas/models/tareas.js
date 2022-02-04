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
}

module.exports = Tareas;
