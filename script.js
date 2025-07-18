const ramos = [
  { nombre: "Pensamiento y actualidad económica", semestre: 1, prerequisitos: [] },
  { nombre: "Introducción a la economía", semestre: 1, prerequisitos: [] },
  { nombre: "Algebra", semestre: 1, prerequisitos: [] },
  { nombre: "Introducción al Management", semestre: 1, prerequisitos: [] },
  { nombre: "Comunicación escrita", semestre: 1, prerequisitos: [] },
  { nombre: "Comunicación oral", semestre: 1, prerequisitos: ["Desarrollo profesional I"] },
  { nombre: "Contabilidad I", semestre: 2, prerequisitos: [] },
  { nombre: "Calculo", semestre: 2, prerequisitos: ["Algebra"] },
  { nombre: "Business Tech", semestre: 2, prerequisitos: [] },
  { nombre: "Macroeconomía", semestre: 2, prerequisitos: ["Introducción a la economía"] },
  { nombre: "Lectura critica", semestre: 2, prerequisitos: ["Desarrollo profesional I"] },
  { nombre: "Pensamiento critico", semestre: 2, prerequisitos: ["Desarrollo profesional I"] },
  { nombre: "Comportamiento organizacional", semestre: 3, prerequisitos: [] },
  { nombre: "Microeconomía", semestre: 3, prerequisitos: ["Introducción a la economía"] },
  { nombre: "Contabilidad II", semestre: 3, prerequisitos: ["Contabilidad I"] },
  { nombre: "Desarrollo profesional I", semestre: 3, prerequisitos: [] },
  { nombre: "Probabilidad e inferencia", semestre: 3, prerequisitos: ["Calculo", "Microeconomía"] },
  { nombre: "Derecho y empresa", semestre: 4, prerequisitos: [] },
  { nombre: "Marketing I", semestre: 4, prerequisitos: [] },
  { nombre: "Etica de los negocios", semestre: 4, prerequisitos: [] },
  { nombre: "Emprender con impacto", semestre: 4, prerequisitos: [] },
  { nombre: "Herramientas para el analisis de datos", semestre: 4, prerequisitos: ["Probabilidad e inferencia"] },
  { nombre: "Pasantia (verano)", semestre: 4, prerequisitos: [] },
  { nombre: "Métodos estadísticos", semestre: 4, prerequisitos: ["Probabilidad e inferencia"] },
  { nombre: "Organizaciones agiles", semestre: 5, prerequisitos: ["Comportamiento organizacional"] },
  { nombre: "Business innovation technologies", semestre: 5, prerequisitos: ["Business Tech"] },
  { nombre: "Finanzas", semestre: 5, prerequisitos: ["Contabilidad II"] },
  { nombre: "Competencia y mercados", semestre: 5, prerequisitos: ["Microeconomía"] },
  { nombre: "Estrategia de visualización de datos", semestre: 5, prerequisitos: ["Herramientas para el analisis de datos", "Métodos estadísticos"] },
  { nombre: "Estrategia", semestre: 6, prerequisitos: ["Microeconomía", "Comportamiento organizacional"] },
  { nombre: "Marketing II", semestre: 6, prerequisitos: ["Marketing I", "Estrategia"] },
  { nombre: "Emprendimiento innovador", semestre: 6, prerequisitos: ["Emprender con impacto"] },
  { nombre: "Desarrollo profesional II", semestre: 6, prerequisitos: ["Desarrollo profesional I"] },
  { nombre: "Finanzas corporativas", semestre: 6, prerequisitos: ["Finanzas"] },
  { nombre: "Proyecto de analisis de datos", semestre: 6, prerequisitos: ["Estrategia de visualización de datos"] },
];

const aprobados = new Set();

function crearRamo(ramo) {
  const div = document.createElement("div");
  div.classList.add("ramo");

  const bloqueado = ramo.prerequisitos.some(p => !aprobados.has(p));
  div.textContent = ramo.nombre;

  if (bloqueado) {
    div.classList.add("bloqueado");
  } else {
    div.classList.add("no-aprobado");
    div.addEventListener("click", () => {
      if (div.classList.contains("aprobado")) {
        div.classList.remove("aprobado");
        div.classList.add("no-aprobado");
        div.style.textDecoration = "none";
        aprobados.delete(ramo.nombre);
        actualizarMalla();
      } else {
        div.classList.remove("no-aprobado");
        div.classList.add("aprobado");
        div.style.textDecoration = "line-through";
        aprobados.add(ramo.nombre);
        actualizarMalla();
      }
    });
  }

  return div;
}

function actualizarMalla() {
  const contenedor = document.querySelector(".malla");
  contenedor.innerHTML = "";
  ramos.forEach(r => contenedor.appendChild(crearRamo(r)));
}

document.addEventListener("DOMContentLoaded", actualizarMalla);
