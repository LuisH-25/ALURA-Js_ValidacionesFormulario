
## Valores requeridos para diferentes tipos de type
<input name="name" id="name" class="input" type="text" placeholder="Nombre" required>
required: exige completar el campo
type="text" placeholder="Nombre" required
type="email" placeholder="Email" required
type="password" placeholder="Contraseña" required minlength="6" maxlength="12"

Buscar: regex password, validar 

Para password utilizamos regex:
type="password" placeholder="Contraseña" required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$" title="Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales."

## Mensaje de erro al ingresar calores no validos
input.setCustomValidity(mensaje);                     // Mensaje de error al ingresar una fecha no valida