const ramos = [
  {
    nombre: "Pensamiento y actualidad económica",
    semestre: 1,
    prerequisitos: ["semana I"]
  },
  {
    nombre: "Introducción a la economía",
    semestre: 1,
    prerequisitos: ["microeconomía", "Macroeconomía", "Semana I"]
  },
  {
    nombre: "Álgebra",
    semestre: 1,
    prerequisitos: ["Introducción a la economía", "Semana I"]
  },
  {
    nombre: "Introducción al Management",
    semestre: 1,
    prerequisitos: ["Comportamiento organiacional", "Derecho y empresa", "Organizaciones agiles", "Marketing I", "Ëtica de los negocios", "Emprender con impacto", "Semana I"]
  },
  {
    nombre: "Comunicación escrita",
    semestre: 1,
    prerequisitos: ["Desarrollo profesional I", "Semana I"]
  },
  {
    nombre: "Comunicaciòn oral",
    semestre: 1,
    prerequisitos: ["Desarrollo profesional I", "Semana I"]
  },
  {
    nombre: "Contabilidad I",
    semestre: 2,
    prerequisitos: ["Contabilidad II", "Semana I"]
  },
  {
    nombre: "Càlculo",
    semestre: 2,
    prerequisitos: ["Microeconomìa", "Probabilidad e inferencia", "Semana I"]
  },
  {
    nombre: "Business tech",
    semestre: 2,
    prerequisitos: ["Business innovation technologies", "Semana I"]
  },
  {
    nombre: "Macroeconomìa ",
    semestre: 2,
    prerequisitos: ["Semana I"]  
  },
  {
    nombre: "Lectura crìtica",
    semestre: 2,
    prerequisitos: ["Desarrollo profesional I", "Semana I"]  
  },
  {
    nombre: "Pensamiento crítico",
    semestre: 2,
    prerequisitos: ["Desarrollo profesional I","Semana I"]  
  },
  {
    nombre: "Comportamiento organizacional",
    semestre: 3,
    prerequisitos: ["Organizaciones ágiles"]  
  },
  {
    nombre: "Microeconomía ",
    semestre: 3,
    prerequisitos: ["Estrategia", "competencia y mercado", "Semana I"]  
  },
  {
    nombre: "Contabilidad II",
    semestre: 3,
    prerequisitos: ["Finanzas"]  
  },
  {
    nombre: "Desarrollo profesional I",
    semestre: 3,
    prerequisitos: ["Desarrollo profesional II", "Pasantia (verano)"]
  },
  {
    nombre: "Probabilidad e inferencia",
    semestre: 3,
    prerequisitos: ["Herramientas para él análisis de datos", "Métodos estadísticos"]
   },
  {
    nombre: "Derecho y empresa",
    semestre: 4,
    prerequisitos: []
 },
  {
    nombre: "Marketing I",
    semestre: 4,
    prerequisitos: ["Estrategia", "Marketing II"]
 },
  {
    nombre: "Ëtica de los negocios",
    semestre: 4,
    prerequisitos: []
 },
  {
    nombre: "Emprender con impacto",
    semestre: 4,
    prerequisitos: ["Emprendimiento innovador"]
   },
  {
    nombre: "Semana I",
    semestre: 4,
    prerequisitos: [] 
  },
  {
    nombre: "Herramientas para el análisis de datos",
    semestre: 4,
    prerequisitos: ["Estrategia de visualización de datos"] 
  },
  {
    nombre: "Pasantía (verano)",
    semestre: 4,
    prerequisitos: []
  },
  {
    nombre: "Métodos estadísticos",
    semestre: 4,
    prerequisitos: ["Estrategia de visualización de datos"] 
  },
  {
    nombre: "Organizaciones ágiles",
    semestre: 5,
    prerequisitos: []
  },
  {
    nombre: "Business innovation technologies",
    semestre: 5,
    prerequisitos: []
  },
  {
    nombre: "Finanzas",
    semestre: 5,
    prerequisitos: ["Estrategia", "Finanzas corporativas"]
  },
  {
    nombre: "Copetencia y mercado",
    semestre: 5,
    prerequisitos: []
  },
  {
    nombre: "Estrategia de visualización de datos",
    semestre: 5,
    prerequisitos: ["Proyecto de análisis de datos"]
  },
  {
    nombre: "Estrategia",
    semestre: 6,
    prerequisitos: []
  },
  {
    nombre: "Marketing II",
    semestre: 6,
    prerequisitos: []
  },
  {
    nombre: "Emprendimiento innovador",
    semestre: 6,
    prerequisitos: []
  },
  {
    nombre: "Desarrollo profesional II",
    semestre: 6,
    prerequisitos: []
  },
  {
    nombre: "Finanzas corporativas",
    semestre: 6,
    prerequisitos: []
  },
  {
    nombre: "Proyecto de análisis de datos",
    semestre: 6,
    prerequisitos: []

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
