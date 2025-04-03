import { actualizarEstadoDeCampo } from "./contact-ui.js";

const validadores = {
    mensaje: (input) => validarMensaje(input),
};

export function validarCampos(input) {
    const { tipo: tipoDeInput } = input.dataset;
    const campoInvalidoClass = "contact__input--invalid";
    const errorElement = input.parentElement.querySelector(".contact__error");
    const tieneValidadorEspecial = validadores[tipoDeInput];

    if (tieneValidadorEspecial) {
        validadores[tipoDeInput](input);
    } else {
        console.warn(`Validador para ${tipoDeInput} no encontrado.`);
    }

    actualizarEstadoDeCampo(input, tipoDeInput, campoInvalidoClass, errorElement);
}

export function validarButton(inputs, button) {
    const camposValidos = [...inputs].map((input) => input.validity.valid);
    const camposValidosCount = camposValidos.reduce(
        (count, isValid) => count + (isValid ? 1 : 0),
        0
    );

    button.disabled = camposValidosCount !== inputs.length;
    button.classList.toggle("contact__button--enabled", camposValidosCount === inputs.length);
}

function validarMensaje(input) {
    const mensaje = input.value;
    const esSoloEspacios = mensaje.length > 0 && mensaje.trim() === "";
    let errorMensaje = "";

    if (esSoloEspacios) {
        errorMensaje = mensajesDeError.mensaje.customError;
    }

    input.setCustomValidity(errorMensaje);
}

export async function validarRecaptcha() {
    const recaptchaToken = grecaptcha.getResponse();
    if (!recaptchaToken) {
        throw new Error("Por favor, completa el reCAPTCHA.");
    }
    return recaptchaToken;
}