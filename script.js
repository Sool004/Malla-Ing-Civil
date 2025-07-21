const cursos = [
  { nombre: `Cálculo I`, semestre: `1`, requisitos: ``, creditos: 6 },
  { nombre: `Álgebra`, semestre: `1`, requisitos: ``, creditos: 6 },
  { nombre: `Química`, semestre: `1`, requisitos: ``, creditos: 4 },
  { nombre: `Int. Ing. Civil`, semestre: `1`, requisitos: ``, creditos: 4 },
  { nombre: `Cálculo II`, semestre: `2`, requisitos: `Cálculo I`, creditos: 6 },
  { nombre: `Álgebra Lineal`, semestre: `2`, requisitos: `Álgebra`, creditos: 6 },
  { nombre: `Fund. Estática`, semestre: `2`, requisitos: ``, creditos: 4 },
  { nombre: `Dibujo en Ing.`, semestre: `2`, requisitos: ``, creditos: 4 },
  { nombre: `Cálculo III`, semestre: `3`, requisitos: `Cálculo II`, creditos: 6 },
  { nombre: `Ecuaciones Dif.`, semestre: `3`, requisitos: `Cálculo II`, creditos: 4 },
  { nombre: `Estática Aplicada`, semestre: `3`, requisitos: `Fund. Estática`, creditos: 4 },
  { nombre: `Prog. Aplicada`, semestre: `3`, requisitos: ``, creditos: 4 },
  { nombre: `Filosofía`, semestre: `3`, requisitos: ``, creditos: 3 },
  { nombre: `Electromagnetismo`, semestre: `4`, requisitos: `Cálculo II`, creditos: 4 },
  { nombre: `Termodinámica`, semestre: `4`, requisitos: `Cálculo II`, creditos: 4 },
  { nombre: `Cinemática y Dinámica`, semestre: `4`, requisitos: `Estática Aplicada`, creditos: 5 },
  { nombre: `Geología`, semestre: `4`, requisitos: ``, creditos: 4 },
  { nombre: `Teología`, semestre: `4`, requisitos: ``, creditos: 3 },
  { nombre: `Prob. y Estadística`, semestre: `5`, requisitos: ``, creditos: 4 },
  { nombre: `Mecánica de Fluidos`, semestre: `5`, requisitos: `Termodinámica`, creditos: 4 },
  { nombre: `Resistencia de Mat.`, semestre: `5`, requisitos: `Estática Aplicada`, creditos: 4 },
  { nombre: `Materiales Const.`, semestre: `5`, requisitos: `Química`, creditos: 4 },
  { nombre: `Economía y Gestión`, semestre: `6`, requisitos: ``, creditos: 4 },
  { nombre: `Optimización`, semestre: `6`, requisitos: `Cálculo III`, creditos: 4 },
  { nombre: `Topografía`, semestre: `6`, requisitos: ``, creditos: 4 },
  { nombre: `Hidráulica`, semestre: `6`, requisitos: `Mecánica de Fluidos`, creditos: 4 },
  { nombre: `Mecánica de Suelos`, semestre: `7`, requisitos: `Mecánica de Fluidos`, creditos: 4 },
  { nombre: `Análisis de Estr.`, semestre: `7`, requisitos: `Resistencia de Mat.`, creditos: 4 },
  { nombre: `Inglés I`, semestre: `7`, requisitos: ``, creditos: 2 },
  { nombre: `Doctrina Social`, semestre: `7`, requisitos: ``, creditos: 2 },
  { nombre: `Hidrología`, semestre: `8`, requisitos: `Hidráulica`, creditos: 4 },
  { nombre: `Constr. General`, semestre: `8`, requisitos: `Materiales Const.`, creditos: 4 },
  { nombre: `Hormigón Armado`, semestre: `8`, requisitos: `Resistencia de Mat.`, creditos: 4 },
  { nombre: `Ing. Transporte`, semestre: `8`, requisitos: ``, creditos: 4 },
  { nombre: `Inglés II`, semestre: `8`, requisitos: `Inglés I`, creditos: 2 },
  { nombre: `Estruct. Metálicas`, semestre: `9`, requisitos: `Análisis de Estr.`, creditos: 4 },
  { nombre: `Fundaciones`, semestre: `9`, requisitos: `Mecánica de Suelos`, creditos: 4 },
  { nombre: `Ing. Fluvial y Costera`, semestre: `9`, requisitos: `Hidráulica`, creditos: 4 },
  { nombre: `Integración Saberes`, semestre: `9`, requisitos: ``, creditos: 1 },
  { nombre: `Optativo`, semestre: `9`, requisitos: ``, creditos: 3 },
  { nombre: `Impacto Ambiental`, semestre: `10`, requisitos: `240cr aprobados`, creditos: 4 },
  { nombre: `Ing. Económica`, semestre: `10`, requisitos: `180cr aprobados`, creditos: 4 },
  { nombre: `Integración Saberes`, semestre: `10`, requisitos: ``, creditos: 1 },
  { nombre: `Optativo`, semestre: `10`, requisitos: ``, creditos: 3 },
  { nombre: `Optativo`, semestre: `10`, requisitos: ``, creditos: 3 },
  { nombre: `Práctica`, semestre: `verano`, requisitos: `8 semestres aprobados`, creditos: 5 },
  { nombre: `Eval. de Proyectos`, semestre: `11`, requisitos: `Ing. Económica`, creditos: 4 },
  { nombre: `Planificación y Control`, semestre: `11`, requisitos: `Constr. General`, creditos: 4 },
  { nombre: `Optativo`, semestre: `11`, requisitos: ``, creditos: 3 },
  { nombre: `Optativo`, semestre: `11`, requisitos: ``, creditos: 3 },
  { nombre: `Proyecto de Título`, semestre: `12`, requisitos: `Práctica`, creditos: 30 },
];


const malla = document.getElementById("malla");

cursos.forEach(curso => {
  const div = document.createElement("div");
  div.classList.add("curso", `sem-${curso.semestre}`);
  div.innerText = `${curso.nombre}\nSem: ${curso.semestre}\nCréditos: ${curso.creditos}\nRequisitos: ${curso.requisitos || "Ninguno"}`;
  malla.appendChild(div);
});
