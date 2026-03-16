import { getTranslatedText } from "./translator.js";
import { actualizarEstadoDeCampo } from "./contact-ui.js";

const validadores = {
    message: (input) => validarMensaje(input),
};

export function validarCampos(input) {
    const { tipo: tipoDeInput } = input.dataset;
    const campoInvalidoClass = "contact__input--invalid";
    const errorElement = input.parentElement.querySelector(".contact__error");

    // Si existe una validación personalizada (como para el mensaje), se ejecuta
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }

    actualizarEstadoDeCampo(input, tipoDeInput, campoInvalidoClass, errorElement);
}

export function validarButton(inputs, button) {
    // Valida que todos los inputs cumplan con sus reglas HTML (required, pattern, etc)
    const todosLosCamposValidos = [...inputs].every((input) => input.validity.valid);
    
    // Valida que el reCAPTCHA de Google tenga una respuesta activa
    const recaptchaMarcado = typeof grecaptcha !== "undefined" && grecaptcha.getResponse().length > 0;

    const formularioListo = todosLosCamposValidos && recaptchaMarcado;

    button.disabled = !formularioListo;
    button.classList.toggle("contact__button--enabled", formularioListo);
}

function validarMensaje(input) {
    input.setCustomValidity("");
    const mensaje = input.value;
    const esSoloEspacios = mensaje.length > 0 && mensaje.trim() === "";

    if (esSoloEspacios) {
        // Obtenemos el texto sin importar en qué idioma estemos
        const errorTexto = getTranslatedText("contact.form.message.errors.customError");
        // Al asignar esto, input.validity.customError se vuelve true
        input.setCustomValidity(errorTexto);
    }
}