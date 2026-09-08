export async function handler(event) {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: JSON.stringify({ error: "Método no permitido" }) };
    }

    try {
        const { recaptchaToken } = JSON.parse(event.body || "{}");
        const secretKey = process.env.RECAPTCHA_SECRET_KEY;
        const targetId = process.env.WHATSAPP_TARGET_ID; // Recupera el número desde las variables de Netlify

        if (!recaptchaToken) {
            return {
                statusCode: 400,
                body: JSON.stringify({ success: false, error: "Token de captcha faltante" })
            };
        }

        // 1. Verificación con la API de Google
        const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `secret=${secretKey}&response=${recaptchaToken}`
        });

        const data = await response.json();

        // 2. Si el captcha es válido, entregamos el targetId
        if (data.success) {
            return {
                statusCode: 200,
                body: JSON.stringify({ success: true, targetId })
            };
        }

        return {
            statusCode: 400,
            body: JSON.stringify({ success: false, error: "Captcha no válido" })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, error: error.message })
        };
    }
}