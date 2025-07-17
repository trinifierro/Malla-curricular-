const ramos = [
  {
    nombre: "Pensamiento y actualidad económica",
    semestre: 1,
    prerequisitos: [semana I]
  },
  {
    nombre: "Introducción a la economía",
    semestre: 1,
    prerequisitos: []
  },
  {
    nombre: "Álgebra",
    semestre: 1,
    prerequisitos: ["Introducción a la economía"]
  },
  {
    nombre: "Macroeconomía",
    semestre: 2,
    prerequisitos: ["Introducción a la economía"]
  },
  {
    nombre: "Álgebra",
    semestre: 1,
    prerequisitos: []
  },
  {
    nombre: "Cálculo",
    semestre: 2,
    prerequisitos: ["Álgebra"]
  },
  {
    nombre: "Contabilidad I",
    semestre: 2,
    prerequisitos: []
  },
  {
    nombre: "Contabilidad II",
    semestre: 3,
    prerequisitos: ["Contabilidad I"]
  },
  {
    nombre: "Finanzas",
    semestre: 5,
    prerequisitos: ["Contabilidad II"]
  },
  {
    nombre: "Finanzas corporativas",
    semestre: 6,
    prerequisitos: ["Finanzas"]
  },
  // Agrega todos los demás ramos con su semestre y prerequisitos aquí...
];

const aprobados = new Set();

function crearRamo(ramo) {
  const div = document.createElement("div");
  div.classList.add("ramo");

  const tieneBloqueo = ramo.prerequisitos.some(p => !aprobados.has(p));
  div.textContent = ramo.nombre;

  if (tieneBloqueo) {
    div.classList.add("bloqueado");
  } else {
    div.classList.add("no-aprobado");
    div.addEventListener("click", () => {
      if (div.classList.contains("aprobado")) {
        div.classList.remove("aprobado");
        div.classList.add("no-aprobado");
        div.style.textDecoration = "none";
        aprobados.delete(ramo.nombre);
        actualizarMalla(); // actualizar dependencias
      } else {
        div.classList.remove("no-aprobado");
        div.classList.add("aprobado");
        div.style.textDecoration = "line-through";
        aprobados.add(ramo.nombre);
        actualizarMalla(); // actualizar dependencias
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
