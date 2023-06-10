// Si trabajamos input por input
// const inputNacimiento = document.querySelector("#birth");

// Cuando quite el foco en inputNacimiento, se activa el evento
// inputNacimiento.addEventListener("blur", (evento) => {
//   validarNacimiento(evento.target);
//   console.log(evento.target); 
// });


// Cuando trabajamos con todos los input en un solo evento que esta en app.js
export function valida(input){
  const tipoDeInput = input.dataset.tipo;     // data-tipo = "nacimiento", captura el dataset que tenga el valor "tipo"
  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }
}

const validadores = {
  nacimiento: (input) => validarNacimiento(input),    // En efecto, hay un dataset-tipo que tiene el valor de "nacimiento"
};


function validarNacimiento(input){
  const fechaCliente = new Date(input.value);
  let mensaje = "";
  if(!mayorEdad(fechaCliente)){
    mensaje = "Debes tener al menos 18 años de edad";
  }
  input.setCustomValidity(mensaje);                     // Mensaje de error al ingresar una fecha no valida
}

function mayorEdad(fecha){
  const fechaActual = new Date();
  const diferenciaFechas = new Date(
    fecha.getUTCFullYear() + 18,
    fecha.getUTCMonth(),
    fecha.getUTCDate()
  );
  return (diferenciaFechas<fechaActual);
}