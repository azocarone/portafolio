// Módulo principal: Manejador del formulario
import { validarCampos, validarButton } from "./contact-validations.js";

// Selección de elementos del DOM
const form = document.querySelector(".contact__form");
const inputs = document.querySelectorAll("[data-tipo]");
const button = document.querySelector(".contact__button");

/**
 * Obtiene el token de reCAPTCHA.
 * @returns {Promise<string>} Token de reCAPTCHA.
 */
async function obtenerRecaptchaToken() {
    const token = grecaptcha.getResponse();
    if (!token) throw new Error("Por favor, completa el reCAPTCHA.");
    return token;
}

/**
 * Verifica el token de reCAPTCHA con el backend.
 * @param {string} recaptchaToken - Token de reCAPTCHA.
 * @returns {Promise<boolean>} - True si el reCAPTCHA es válido, false en caso contrario.
 */
async function verificarRecaptcha(recaptchaToken) {
    const response = await fetch("/.netlify/functions/verify-recaptcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ recaptchaResponse: recaptchaToken }),
    });

    if (!response.ok) throw new Error(`Error al verificar reCAPTCHA: ${response.status}`);

    const data = await response.json();
    return data.message === "reCAPTCHA verified";
}

/**
 * Maneja el envío del formulario a Netlify.
 * @param {Event} event - Evento de envío del formulario.
 */
async function manejarEnvioFormulario(event) {
    event.preventDefault();

    try {
        const recaptchaToken = await obtenerRecaptchaToken();
        const recaptchaValido = await verificarRecaptcha(recaptchaToken);
        if (!recaptchaValido) throw new Error("Error al verificar el reCAPTCHA.");

        // Agregar el token de reCAPTCHA a los datos del formulario
        const formData = new FormData(form);
        formData.append("g-recaptcha-response", recaptchaToken);

        // Enviar los datos directamente, Netlify maneja la conversión automáticamente
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
        });

        if (!response.ok) throw new Error(`Error al enviar el formulario: ${response.status}`);

        reiniciarFormulario();
        mostrarMensaje("success", "El mensaje fue enviado con éxito. ¡Gracias por contactarme!");
    } catch (error) {
        console.error("Error en el envío del formulario:", error);
        mostrarMensaje("error", error.message);
    }
}

/**
 * Reinicia el formulario y actualiza el estado del botón.
 */
function reiniciarFormulario() {
    form.reset();
    validarButton(inputs, button);
}

/**
 * Muestra un mensaje de error o éxito en la UI.
 * @param {"success" | "error"} tipo - Tipo de mensaje.
 * @param {string} mensaje - Contenido del mensaje.
 */
function mostrarMensaje(tipo, mensaje) {
    alert(mensaje); // Se puede reemplazar con un mensaje dinámico en la UI.
}

// Event delegation para validación de inputs
form.addEventListener("input", (event) => {
    if (event.target.matches("[data-tipo]")) {
        validarCampos(event.target);
        validarButton(inputs, button);
    }
});

// Evento de envío del formulario
form.addEventListener("submit", manejarEnvioFormulario);
