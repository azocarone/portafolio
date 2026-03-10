import { validarCampos, validarButton } from "./contact-validations.js";
import { reiniciarFormulario, mostrarMensaje } from "./contact-ui.js";
import { getTargetId } from "./data/contact-helper.js";

/**
 * LÓGICA DE NEGOCIO: Construye la URL y abre WhatsApp
 */
const enviarAWhatsApp = (datos, targetId) => {
    // Usamos los nombres de los campos que vienen del FormData (basado en el atributo 'name' del HTML)
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

/**
 * HANDLER: Procesa el envío del formulario
 */
async function manejarEnvioFormulario(event, form, inputs, button) {
    event.preventDefault();
    
    try {
        const formData = new FormData(form);
        const datos = Object.fromEntries(formData.entries());
        
        enviarAWhatsApp(datos, getTargetId());
        
        reiniciarFormulario(form, inputs, button);
    } catch (error) {
        mostrarMensaje("error", `Error: ${error.message}`);
    }
}

/**
 * INICIALIZADOR: Configura el módulo
 */
export function initContact() {
    const form = document.querySelector(".contact__form");
    if (!form) return; // Guarda clausula por seguridad

    const inputs = document.querySelectorAll("[data-tipo]");
    const button = document.querySelector(".contact__button");

    // 1. Configurar reCAPTCHA (Callbacks globales para la API de Google)
    // ReCAPTCHA necesita ser global para que Google pueda llamar a las funciones de callback
    // Callbacks para el widget de Google reCAPTCHA v2
    window.onRecaptchaSuccess = () => validarButton(inputs, button);
    window.onRecaptchaExpired = () => validarButton(inputs, button);

    // 2. Listeners de validación en tiempo real (Delegación de eventos o iteración simple)
    form.addEventListener("input", (event) => {
        if (event.target.matches("[data-tipo]")) {
            validarCampos(event.target);
            validarButton(inputs, button);
        }
    });

    // 3. Listener de envío
    form.addEventListener("submit", (event) => manejarEnvioFormulario(event, form, inputs, button));
}