//Segmento para agregar tareas 

const botonAgregar = document.getElementById("Boton1");
const input = document.getElementById("input");
const caja = document.querySelector(".caja");

// String template = ${};
// backticks = ``;
//event onclick=cualquierfuncion();
//appendChild = añadir un elemento hijo a un padre
// ClassName = darle el nombre a una clase y luego poder usarla en css o otras cosas

function agregarItems() {
  // variable value que guardar el valor del input
  value = input.value;

  let nuevoItem = document.createElement("nuevoItem");
  nuevoItem.innerHTML = `<div class="cajaNotificacion">
         <div class="hijo">
            <input type="checkbox">
            <p class="tarea">${value}</p>

        </div>
        
        <button>borrar</button>
        `;
  nuevoItem.className = "nuevoItem";
  caja.appendChild(nuevoItem);
}
// console.log("Holajjjdjd");



