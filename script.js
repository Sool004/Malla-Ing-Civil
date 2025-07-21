const cursos = [
  { nombre: "Cálculo I", semestre: "1" },
  { nombre: "Álgebra", semestre: "1" },
  { nombre: "Química", semestre: "1" },
  { nombre: "Int. Ing. Civil", semestre: "1" },
  { nombre: "Cálculo II", semestre: "2" },
  { nombre: "Álgebra Lineal", semestre: "2" },
  { nombre: "Fund. Estática", semestre: "2" },
  { nombre: "Dibujo en Ing.", semestre: "2" },
  { nombre: "Cálculo III", semestre: "3" },
  { nombre: "Ecuaciones Dif.", semestre: "3" },
  { nombre: "Estática Aplicada", semestre: "3" },
  { nombre: "Prog. Aplicada", semestre: "3" },
  { nombre: "Filosofía", semestre: "3" },
  { nombre: "Electromagnetismo", semestre: "4" },
  { nombre: "Termodinámica", semestre: "4" },
  { nombre: "Cinemática y Dinámica", semestre: "4" },
  { nombre: "Geología", semestre: "4" },
  { nombre: "Teología", semestre: "4" },
  { nombre: "Prob. y Estadística", semestre: "5" },
  { nombre: "Mecánica de Fluidos", semestre: "5" },
  { nombre: "Resistencia de Mat.", semestre: "5" },
  { nombre: "Materiales Const.", semestre: "5" },
  { nombre: "Economía y Gestión", semestre: "6" },
  { nombre: "Optimización", semestre: "6" },
  { nombre: "Topografía", semestre: "6" },
  { nombre: "Hidráulica", semestre: "6" },
  { nombre: "Mecánica de Suelos", semestre: "7" },
  { nombre: "Análisis de Estr.", semestre: "7" },
  { nombre: "Inglés I", semestre: "7" },
  { nombre: "Doctrina Social", semestre: "7" },
  { nombre: "Hidrología", semestre: "8" },
  { nombre: "Constr. General", semestre: "8" },
  { nombre: "Hormigón Armado", semestre: "8" },
  { nombre: "Ing. Transporte", semestre: "8" },
  { nombre: "Inglés II", semestre: "8" },
  { nombre: "Estruct. Metálicas", semestre: "9" },
  { nombre: "Fundaciones", semestre: "9" },
  { nombre: "Ing. Fluvial y Costera", semestre: "9" },
  { nombre: "Integración Saberes", semestre: "9" },
  { nombre: "Optativo", semestre: "9" },
  { nombre: "Impacto Ambiental", semestre: "10" },
  { nombre: "Ing. Económica", semestre: "10" },
  { nombre: "Integración Saberes", semestre: "10" },
  { nombre: "Optativo", semestre: "10" },
  { nombre: "Optativo", semestre: "10" },
  { nombre: "Práctica", semestre: "verano" },
  { nombre: "Eval. de Proyectos", semestre: "11" },
  { nombre: "Planificación y Control", semestre: "11" },
  { nombre: "Optativo", semestre: "11" },
  { nombre: "Optativo", semestre: "11" },
  { nombre: "Proyecto de Título", semestre: "12" },
];


const malla = document.getElementById("malla");

cursos.forEach(curso => {
  const div = document.createElement("div");
  div.classList.add("curso", `sem-${curso.semestre}`);
  div.innerText = `${curso.nombre}\nSem: ${curso.semestre}`;
  malla.appendChild(div);
});
