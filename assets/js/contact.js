// Importar las funciones de validación desde validations.js
import { validarCampos, validarButton } from "./validations.js";

// Seleccionar el formulario y los elementos de entrada
const form = document.querySelector('.contact__form');
const inputs = document.querySelectorAll("[data-tipo]");
const button = document.querySelector('.contact__form__button');

// Agregar eventos de escucha a los campos de entrada
inputs.forEach(input => {
    input.addEventListener('blur', (inputEvent) => {
        validarCampos(inputEvent.target); // Llamar a la función de validación de campos
        validarButton(inputs, button); // Actualizar el estado del botón
    })
});

// Agregar un evento de escucha al formulario para prevenir el envío por defecto
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    form.reset(); // Restablecer el formulario después del envío
    validarButton(inputs, button); // Actualizar el estado del botón
    alert("Los datos fueron enviados ...\nMuchas gracias por tu interés en contactarme.");
});

// validations.js se encarga de exportar las funciones necesarias