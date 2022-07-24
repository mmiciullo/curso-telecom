const tarea = function (
  codigo,
  titulo,
  desc,
  fecha,
  deathline,
  observaciones,
  estado
) {
  return {
    codigo: codigo,
    titulo: titulo,
    descripcion: desc,
    fecha_alta: fecha,
    deathline: deathline,
    observaciones: observaciones,
    estado: estado,
  };
};

let almacenamientoTareas = [
  tarea(
    1,
    "Harry Potter",
    "test",
    "01/01/01",
    "deathline",
    "test",
    "pendiente"
  ),
  tarea(2, "Dune", "test", "01/01/01", "deathline", "test", "en-curso"),
  tarea(3, "Westworld", "test", "01/01/01", "deathline", "test", "terminada"),
];

// agregar una nueva tarea.
const agregarTarea = (tarea) => {
  almacenamientoTareas.push(tarea);
};

// Recibe una tarea y la modifica
const editTarea = (tarea) => {
  almacenamientoTareas = almacenamientoTareas.map((item) => {
    return item.codigo == tarea.codigo ? tarea : item;
  });
  //   Mostrar los objetos creados, con la actualización que se realizó
  return almacenamientoTareas;
};

// Borra una tarea ya existente
const borrarTarea = (cod) => {
  const removeTarea = almacenamientoTareas
    .map((item) => {
      return item.codigo;
    })
    .indexOf(cod);
  almacenamientoTareas.splice(removeTarea, 1);
};

// Devuelve todas las tareas
const reporteTodasTareas = () => {
  return almacenamientoTareas;
};

// Devuelve las tareas cuyo estado es ‘en-curso’.
const reporteTareasEnCurso = () => {
  return almacenamientoTareas.filter((item) => {
    return item.estado == "en-curso";
  });
};

// Devuelve las tareas cuyo estado es ‘pendiente’
const reporteTareasaPendientes = () => {
  return almacenamientoTareas.filter((item) => {
    return item.estado == "pendiente";
  });
};

// Devuelve las tareas cuyo estado es ‘terminada’.
const reporteTareasTerminadas = () => {
  return almacenamientoTareas.filter((item) => {
    return item.estado == "terminada";
  });
};
