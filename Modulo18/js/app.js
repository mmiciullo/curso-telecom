// Tenemos un cliente que nos está pidiendo que el sistema que estamos desarrollando tenga una
// contraseña segura pero con las siguientes característica, que esta debe contener:
// 1) Que tenga una longitud de 12 caracteres mínimo.
// 2) Debe contener al menos 1 letra en mayúscula.
// 3) Debe contener al menos 1 letra en minúscula.
// 4) No puede contener espacios vacíos.

const password = document.querySelector("#password");
const form = document.querySelector("#formulario");
const errorElement = document.querySelector("#error");

const regex = new RegExp(/\S(?=.*[A-Z])(?=.*[a-z])[\s\S]{11}/);

form.addEventListener("submit", (e) => {
  let error = [];

  if (!regex.test(password.value)) {
    error.push("Contraseña incorrecta");
    console.log(password.value.length);
  }

  if (error.length > 0) {
    e.preventDefault();
    errorElement.innerHTML = error.join(", ");
  }
});
