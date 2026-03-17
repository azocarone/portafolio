import { UI } from "../ui/contact-view.js";
import { Validator } from "../utils/contact-validator.js";
import { enviarMensajeWhatsApp } from "../services/contact-service.js";

export const ContactController = {
    init: () => {
        const form = document.querySelector(".contact__form");
        if (!form) return;

        const inputs = document.querySelectorAll("[data-tipo]");
        const button = document.querySelector(".contact__button");

        // ReCAPTCHA Callbacks
        window.onRecaptchaSuccess = () => UI.setEstadoBoton(button, Validator.esFormularioValido(inputs));
        window.onRecaptchaExpired = () => UI.setEstadoBoton(button, false);

        // Manejo de Inputs
        form.addEventListener("input", (event) => {
            if (event.target.matches("[data-tipo]")) {
                const error = Validator.obtenerError(event.target);
                UI.renderizarEstadoCampo(event.target, error, event.target.dataset.tipo);
                UI.setEstadoBoton(button, Validator.esFormularioValido(inputs));
            }
        });

        // Envío de Formulario
        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            try {
                const datos = Object.fromEntries(new FormData(form).entries());
                enviarMensajeWhatsApp(datos);
                UI.resetearFormulario(form, inputs, button);
            } catch (error) {
                UI.notificar(`Error: ${error.message}`);
            }
        });
    }
}