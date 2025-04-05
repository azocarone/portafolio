import { mensajesDeError } from "./data/contact-validations-error.js";

const tipoDeErrores = [
    "valueMissing",
    "patternMismatch",
    "typeMismatch",
    "customError",
];

export function actualizarEstadoDeCampo(input, tipoDeInput, campoInvalidoClass, errorElement) {
    const esValido = input.validity.valid;
    input.classList.toggle(campoInvalidoClass, !esValido);

    if (!esValido) {
        errorElement.textContent = mostrarMensajeDeError(input, tipoDeInput);
    } else {
        errorElement.textContent = "";
    }
}

function mostrarMensajeDeError(input, tipoDeInput) {
    const error = tipoDeErrores.find((error) => input.validity[error]);
    return error ? mensajesDeError[tipoDeInput][error] : "";
}

export function reiniciarFormulario(form, inputs, button) {
    form.reset();
    grecaptcha.reset();
    inputs.forEach((input) => {
        input.classList.remove("contact__input--invalid");
        input.parentElement.querySelector(".contact__error").textContent = "";
    });
    button.disabled = true;
    button.classList.remove("contact__button--enabled");
}

export function mostrarMensaje(tipo, mensaje) {
    alert(mensaje);
}