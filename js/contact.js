import { validarCampos, validarButton } from "./contact-validations.js";

const form = document.querySelector(".contact__form");
const inputs = document.querySelectorAll("[data-tipo]");
const button = document.querySelector(".contact__button");

/**
 * Maneja el envío del formulario usando fetch() sin bloquear Netlify Forms.
 * @param {Event} event - Evento de envío del formulario.
 */
async function manejarEnvioFormulario(event) {
    event.preventDefault();

    try {
        const recaptchaToken = grecaptcha.getResponse();
        if (!recaptchaToken) throw new Error("Por favor, completa el reCAPTCHA.");

        // Crear objeto FormData y agregar reCAPTCHA
        const formData = new FormData(form);
        formData.append("g-recaptcha-response", recaptchaToken);

        // Enviar datos con fetch() sin modificar headers para Netlify
        const response = await fetch("/", {
            method: "POST",
            body: formData,
        });

        if (!response.ok) throw new Error(`Error al enviar el formulario: ${response.status}`);

        mostrarMensaje("success", "El mensaje fue enviado con éxito. ¡Gracias por contactarme!");
        reiniciarFormulario();
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
    grecaptcha.reset(); // Resetea el reCAPTCHA para futuros envíos
    validarButton(inputs, button);
}

/**
 * Muestra un mensaje de éxito o error en la UI.
 * @param {"success" | "error"} tipo - Tipo de mensaje.
 * @param {string} mensaje - Contenido del mensaje.
 */
function mostrarMensaje(tipo, mensaje) {
    alert(mensaje); // Puedes mejorarlo con una notificación visual.
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