import { UI } from "../ui/contact-view.js";
import { Validator } from "../utils/contact-validator.js";
import { enviarMensajeWhatsApp, validarYObtenerTargetId } from "../services/contact-service.js";

export const ContactController = {
    init: () => {
        const form = document.querySelector(".contact__form");
        if (!form) return;

        const inputs = document.querySelectorAll("[data-tipo]");
        const button = document.querySelector(".contact__button");

        const refrescarEstadoBoton = () => {
            UI.setEstadoBoton(button, Validator.esFormularioValido(inputs));
        };

        window.onRecaptchaSuccess = () => refrescarEstadoBoton();
        window.onRecaptchaExpired = () => UI.setEstadoBoton(button, false);

        form.addEventListener("input", (event) => {
            if (event.target.matches("[data-tipo]")) {
                const error = Validator.obtenerError(event.target);
                UI.renderizarEstadoCampo(event.target, error, event.target.dataset.tipo);
                refrescarEstadoBoton();
            }
        });

        form.addEventListener("submit", async (event) => {
            event.preventDefault();

            if (!Validator.esFormularioValido(inputs)) return;

            const token = grecaptcha.getResponse();

            try {
                UI.setEstadoBoton(button, false);

                // 1. Valida el captcha y obtiene el número desde Netlify
                const targetId = await validarYObtenerTargetId(token);

                // 2. Ejecuta el envío a WhatsApp usando el número obtenido
                const datos = Object.fromEntries(new FormData(form).entries());
                enviarMensajeWhatsApp(datos, targetId);

                UI.resetearFormulario(form, inputs, button);

            } catch (error) {
                grecaptcha.reset();
                UI.resetearFormulario(form, inputs, button);
                UI.notificar(`Error: ${error.message}`);
            }
        });
    }
};