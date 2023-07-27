//Segmento para agregar tareas

const botonAgregar = document.getElementById("Boton1"); // Obtenemos el botón con el id "Boton1"
const input = document.getElementById("input"); // tenemos el input con el id "input"
const caja = document.getElementById("caja"); // Obtenemos el elemento con la clase "caja"
const contaBox = document.getElementById("conta"); // Obtenemos el elemento con la clase "caja"
const aviso = document.querySelector(".aviso"); // Obtenemos el elemento con la clase "caja"

let contador = 0;

// String template = ${};
// backticks = ``;
//event onclick=cualquierfuncion();
//appendChild = añadir un elemento hijo a un padre
// ClassName = darle el nombre a una clase y luego poder usarla en css o otras cosas

//

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    agregarItems();
  }
});

// function agregarItems() {
//   // variable value que guardar el valor del input
//   value = input.value; // Obtenemos el valor del input
//    input.value = "";

//   //Invalidaciones de entradas

//   //si...
//   if (value == "" || value.length <= 3 || value >= 0) {
//     //condiciones
//     alert("caracter no valido"); //Accion
//   }

//   //caso contrario
//   else {
//     let nuevoItem = document.createElement("nuevoItem"); //accion
//     nuevoItem.innerHTML = `<div class="cajaNotificacion">
//            <div class="hijo">
//               <input id='check' type="checkbox">
//               <p class="tarea">${value}</p>

//           </div>

//           <button>borrar</button>
//           `;

//     nuevoItem.className = "nuevoItem";
//     caja.appendChild(nuevoItem); // Agregamos el nuevo elemento a la caja

//     const cajaTarea = document.getElementById("caja");
//     // console.log(cajaTarea);
//     const tarea = cajaTarea.children;
//     console.log(cajaTarea.children);

//     tarea.addEventListener("click", function (e) {
//       const checkbox = tarea[0].checked;

//        if (checkbox) {
//         console.log("esta chequeado");
//         contador++;
//         contaBox.textContent = contador;
//      } else {
//         console.log("No esta chequeado");
//         contador--;
//          contaBox.textContent = contador;
//      }
//      console.log(contador);
//     });

//     // console.log(tarea[0]);

//     // cajaTarea.addEventListener("");
//     // -----------------------------------------------------------------------
//   }
// }
function agregarItems() {
  // Obtenemos el valor del input
  const value = input.value.trim();

  // Invalidaciones de entradas
  if (value === "" || value.length <= 3 || !isNaN(value)) {
    alert("Caracter no válido"); // Acción para manejar la entrada inválida
    return; // Detenemos la ejecución de la función si la entrada no es válida
  }

  // Crear el nuevo elemento
  let nuevoItem = document.createElement("div");
  nuevoItem.innerHTML = `
    <div class="cajaNotificacion">
      <div class="hijo">
        <input id="check" type="checkbox">
        <p class="tarea">${value}</p>
      </div>
      <button id="clear">borrar</button>
    </div>
  `;
  nuevoItem.className = "nuevoItem";
  caja.appendChild(nuevoItem);

  // Seleccionamos el checkbox del nuevo item
  const checkbox = nuevoItem.querySelector("#check");

  //boton eliminar
  const cajaNotificacion = nuevoItem.querySelector("#clear");

  //funcion contador
  cajaNotificacion.addEventListener("click", function (e) {
    nuevoItem.remove();
  });

  checkbox.addEventListener("click", function (e) {
    const isChecked = checkbox.checked;
    if (isChecked) {
      console.log("Esta chequeado");
      contador++;
      contaBox.textContent = contador;
    } else {
      console.log("No está chequeado");
      contador--;
      contaBox.textContent = contador;
    }
    console.log(contador);
  });

  // Limpiamos el input después de agregar el elemento
  input.value = "";
}
