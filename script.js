// === MENU DE PLATILLOS ===
const platillos = [
  { nombre: "Aguachile Rojo", desc: "Camaron fresco marinado en chile rojo y limon.", precio: "$145" },
  { nombre: "Aguachile Verde", desc: "Camaron en salsa verde con pepino y cebolla.", precio: "$145" },
  { nombre: "Ceviche Sinaloense", desc: "Camaron, pepino, tomate y chile serrano.", precio: "$130" },
  { nombre: "Camarones a la Diabla", desc: "Camarones en salsa roja bien picosa.", precio: "$175" },
  { nombre: "Pulpo Estilo Sinaloa", desc: "Pulpo tierno con limon, chile y cebolla.", precio: "$195" },
  { nombre: "Tostadas de Marlin", desc: "Marlin ahumado con mayonesa y chile.", precio: "$110" },
];

// Generar tarjetas del menu
function generarMenu() {
  const contenedor = document.getElementById("menu-cards");
  platillos.forEach(platillo => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h3>${platillo.nombre}</h3>
      <p>${platillo.desc}</p>
      <span class="precio">${platillo.precio}</span>
    `;
    contenedor.appendChild(card);
  });
}

generarMenu();