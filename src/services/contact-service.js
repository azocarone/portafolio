import { getTargetId } from "../utils/contact-helper.js";

/**
 * Consulta la función serverless de Netlify para validar reCAPTCHA
 */
export const verificarRecaptchaServerless = async (recaptchaToken) => {
    const response = await fetch("/.netlify/functions/verify-recaptcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ recaptchaToken })
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
        throw new Error(data.error || "Verificación de seguridad fallida.");
    }

    return true;
};

// Construye la URL y ejecuta la apertura de WhatsApp
export const enviarMensajeWhatsApp = (datos) => {
    const { name, email, subject, message } = datos;
    const targetId = getTargetId();
    
    const texto =
        `*CONTACTO WEB*%0A%0A` +
        `*Nombre:* ${encodeURIComponent(name)}%0A` +
        `*Email:* ${encodeURIComponent(email)}%0A` +
        `*Asunto:* ${encodeURIComponent(subject)}%0A%0A` +
        `*Mensaje:*%0A${encodeURIComponent(message)}`;

    const url = `https://wa.me/${targetId}?text=${texto}`;
    window.open(url, "_blank");
};