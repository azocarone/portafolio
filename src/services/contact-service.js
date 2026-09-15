/**
 * Envía el token a la Netlify Function y recupera el targetId si es válido
 */
export const validarYObtenerTargetId = async (recaptchaToken) => {
    const response = await fetch("/.netlify/functions/verify-recaptcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ recaptchaToken })
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
        throw new Error(data.error || "Fallo en la verificación del captcha.");
    }

    return data.targetId; // Retorna el número devuelto por la función
};

// Construye la URL y redirige a WhatsApp
export const enviarMensajeWhatsApp = (datos, targetId) => {
    const { name, email, subject, message } = datos;
    
    const texto =
        `*CONTACTO WEB*%0A%0A` +
        `*Nombre:* ${encodeURIComponent(name)}%0A` +
        `*Email:* ${encodeURIComponent(email)}%0A` +
        `*Asunto:* ${encodeURIComponent(subject)}%0A%0A` +
        `*Mensaje:*%0A${encodeURIComponent(message)}`;

    const url = `https://wa.me/${targetId}?text=${texto}`;
    window.open(url, "_blank");
};