import { validarCampos, validarButton } from "./contact-validations.js";

const form = document.querySelector(".contact__form");
const inputs = document.querySelectorAll("[data-tipo]");
const button = document.querySelector(".contact__button");

/**
 * Maneja el envío del formulario, validando reCAPTCHA y dejando que Netlify procese la solicitud.
 * @param {Event} event - Evento de envío del formulario.
 */
async function manejarEnvioFormulario(event) {
    event.preventDefault();

    try {
        const recaptchaToken = grecaptcha.getResponse();
        if (!recaptchaToken) throw new Error("Por favor, completa el reCAPTCHA.");

        // Agregar el token de reCAPTCHA manualmente al formulario
        const recaptchaField = document.createElement("input");
        recaptchaField.type = "hidden";
        recaptchaField.name = "g-recaptcha-response";
        recaptchaField.value = recaptchaToken;
        form.appendChild(recaptchaField);

        // 🔥 Permitir el envío nativo, sin fetch() 🔥
        form.submit();
    } catch (error) {
        console.error("Error en el envío del formulario:", error);
        mostrarMensaje("error", error.message);
    }
}

/**
 * Muestra un mensaje en la UI.
 * @param {"success" | "error"} tipo - Tipo de mensaje.
 * @param {string} mensaje - Contenido del mensaje.
 */
function mostrarMensaje(tipo, mensaje) {
    alert(mensaje); // Reemplázalo con un mensaje dinámico si lo prefieres.
}

// Validación en tiempo real
form.addEventListener("input", (event) => {
    if (event.target.matches("[data-tipo]")) {
        validarCampos(event.target);
        validarButton(inputs, button);
    }
});

// Evento de envío del formulario
form.addEventListener("submit", manejarEnvioFormulario);