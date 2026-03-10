import { getTranslatedText } from "./languages.js";

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
        const errorType = tipoDeErrores.find((type) => input.validity[type]);
        // Pedimos la traducción de forma limpia:
        const path = `contact.form.${tipoDeInput}.errors.${errorType}`;
        errorElement.textContent = getTranslatedText(path);
    } else {
        errorElement.textContent = "";
    }
}

export function reiniciarFormulario(form, inputs, button) {
    form.reset();

    if (typeof grecaptcha !== "undefined") {
        grecaptcha.reset();
    }

    inputs.forEach((input) => {
        input.classList.remove("contact__input--invalid");
        const errorSpan = input.parentElement.querySelector(".contact__error");
        if(errorSpan) errorSpan.textContent = "";
    });
    
    button.disabled = true;
    button.classList.remove("contact__button--enabled");
}

export function mostrarMensaje(tipo, mensaje) {
    alert(mensaje);
}