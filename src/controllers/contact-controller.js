import { UI } from "../ui/contact-view.js";
import { Validator } from "../utils/contact-validator.js";
import { enviarMensajeWhatsApp, verificarRecaptchaServerless } from "../services/contact-service.js";

export const ContactController = {
    init: () => {
        const form = document.querySelector(".contact__form");
        if (!form) return;

        const inputs = document.querySelectorAll("[data-tipo]");
        const button = document.querySelector(".contact__button");

        // Evalúa el formulario e interactúa con el botón mediante la UI
        const refrescarEstadoBoton = () => {
            UI.setEstadoBoton(button, Validator.esFormularioValido(inputs));
        };

        // Callbacks globales invocados por el script de reCAPTCHA
        window.onRecaptchaSuccess = () => refrescarEstadoBoton();
        window.onRecaptchaExpired = () => UI.setEstadoBoton(button, false);

        // Escuchar eventos de entrada en los inputs
        form.addEventListener("input", (event) => {
            if (event.target.matches("[data-tipo]")) {
                const error = Validator.obtenerError(event.target);
                UI.renderizarEstadoCampo(event.target, error, event.target.dataset.tipo);
                refrescarEstadoBoton();
            }
        });

        // Envío de Formulario
        form.addEventListener("submit", async (event) => {
            event.preventDefault();

            if (!Validator.esFormularioValido(inputs)) {
                return;
            }

            const token = grecaptcha.getResponse();

            try {
                // Bloquear el botón durante la petición asíncrona
                UI.setEstadoBoton(button, false);

                // 1. Validar el token con la Netlify Serverless Function
                await verificarRecaptchaServerless(token);

                // 2. Si la respuesta es exitosa, se activa la redirección a WhatsApp
                const datos = Object.fromEntries(new FormData(form).entries());
                enviarMensajeWhatsApp(datos);

                // 3. Resetear el estado general del formulario
                UI.resetearFormulario(form, inputs, button);

            } catch (error) {
                grecaptcha.reset();
                UI.resetearFormulario(form, inputs, button);
                UI.notificar(`Error: ${error.message}`);
            }
        });
    }
};