import { validarCampos, validarButton } from "./contact-validations.js";
import { reiniciarFormulario, mostrarMensaje } from "./contact-ui.js";
import { getTargetId } from "./data/contact-helper.js";

export function initContact() {
    const form = document.querySelector(".contact__form");
    if (!form) return; // Guarda clausula por seguridad

    const inputs = document.querySelectorAll("[data-tipo]");
    const button = document.querySelector(".contact__button");

    // ReCAPTCHA necesita ser global para que Google pueda llamar a las funciones de callback
    // Callbacks para el widget de Google reCAPTCHA v2
    window.onRecaptchaSuccess = () => validarButton(inputs, button);
    window.onRecaptchaExpired = () => validarButton(inputs, button);

    // Listeners de validación en tiempo real
    form.addEventListener("input", (event) => {
        if (event.target.matches("[data-tipo]")) {
            validarCampos(event.target);
            validarButton(inputs, button);
        }
    });

    form.addEventListener("submit", manejarEnvioFormulario);

    async function manejarEnvioFormulario(event) {
        event.preventDefault();
        
        try {
            const formData = new FormData(form);
            const datos = Object.fromEntries(formData.entries());
            
            enviarAWhatsApp(datos, getTargetId());
            
            reiniciarFormulario(form, inputs, button);
        } catch (error) {
            mostrarMensaje("error", "Error: " + error.message);
        }
    }

    function enviarAWhatsApp(datos, targetId) {
        const { name, email, subject, message } = datos;
        
        // Construcción del mensaje con formato WhatsApp
        const texto =
            `*CONTACTO WEB*%0A%0A` +
            `*Nombre:* ${encodeURIComponent(name)}%0A` +
            `*Email:* ${encodeURIComponent(email)}%0A` +
            `*Asunto:* ${encodeURIComponent(subject)}%0A%0A` +
            `*Mensaje:*%0A${encodeURIComponent(message)}`;

        const url = `https://wa.me/${targetId}?text=${texto}`;
        
        window.open(url, "_blank");
    }
}