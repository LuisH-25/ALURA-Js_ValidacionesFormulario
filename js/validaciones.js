const inputNacimiento = document.querySelector("#birth");

// Cuando quite el foco en inputNacimiento, se activa el evento
inputNacimiento.addEventListener("blur", (evento) => {
  validarNacimiento(evento.target);
  console.log(evento.target); 
});

function validarNacimiento(input){
  const fechaCliente = new Date(input.value);
  
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