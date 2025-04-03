import { validarCampos, validarButton, validarRecaptcha } from "./contact-validations.js";
import { reiniciarFormulario, mostrarMensaje } from "./contact-ui.js";

const form = document.querySelector(".contact__form");
const inputs = document.querySelectorAll("[data-tipo]");
const button = document.querySelector(".contact__button");

async function manejarEnvioFormulario(event) {
    event.preventDefault();
    try {
        const recaptchaToken = await validarRecaptcha();
        const formData = construirFormData(form, recaptchaToken);
        await enviarDatos(formData);
        mostrarMensaje("success", "El mensaje fue enviado con éxito. ¡Gracias por contactarme!");
        reiniciarFormulario(form, inputs, button);
    } catch (error) {
        console.error("Error en el envío del formulario:", error);
        mostrarMensaje("error", error.message);
    }
}

function construirFormData(form, recaptchaToken) {
    const formData = new FormData(form);
    formData.append("g-recaptcha-response", recaptchaToken);
    return formData;
}

async function enviarDatos(formData) {
    const response = await fetch("/", {
        method: "POST",
        body: formData,
    });
    if (!response.ok) {
        throw new Error(`Error al enviar el formulario: ${response.status}`);
    }
    return response;
}

form.addEventListener("input", (event) => {
    if (event.target.matches("[data-tipo]")) {
        validarCampos(event.target);
        validarButton(inputs, button);
    }
});

form.addEventListener("submit", manejarEnvioFormulario);