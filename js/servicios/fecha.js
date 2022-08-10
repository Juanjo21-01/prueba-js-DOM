export const unicaFecha = (tasks) => {
  const unica = [];

  tasks.forEach((tarea) => {
    if (!unica.includes(tarea.formatoFecha)) unica.push(tarea.dateFormat);
  });

  return unica;
};