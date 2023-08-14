import { validarCampos, validarButton } from "./validations.js";

const form = document.querySelector('.contact__form');
const inputs = document.querySelectorAll("[data-tipo]");
const button = document.querySelector('.contact__form__button');

inputs.forEach(input => {
    input.addEventListener('blur', (input) => {
        validarCampos(input.target);
        validarButton(inputs, button);
    })
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.reset();
    validarButton(inputs, button);
    alert("Los datos fueron enviados ... \nmuchas gracias por su interés en contactarme.");
});