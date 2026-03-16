import { getTargetId } from "./data/contact-helper.js";

/**
 * Construye la URL y ejecuta la apertura de WhatsApp
 */
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