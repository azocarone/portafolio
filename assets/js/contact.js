import { validarCampos } from "./validations.js";
import { activarButton } from "./submit.js";

const inputs = document.querySelectorAll("[data-tipo]");
const button = document.querySelector('.contact__form__button');

inputs.forEach(input => {
    input.addEventListener('blur', (input) => {
        validarCampos(input.target);
        activarButton(inputs, button);
    })
})