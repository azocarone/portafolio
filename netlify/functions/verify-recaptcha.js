export async function handler(event) {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: JSON.stringify({ error: "Method Not Allowed" }) };
    }

    try {
        const { recaptchaToken } = JSON.parse(event.body || "{}");
        const secretKey = process.env.RECAPTCHA_SECRET_KEY;

        if (!recaptchaToken) {
            return {
                statusCode: 400,
                body: JSON.stringify({ success: false, error: "Token no proporcionado" })
            };
        }

        const googleUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;
        const response = await fetch(googleUrl, { method: "POST" });
        const data = await response.json();

        if (data.success) {
            return { statusCode: 200, body: JSON.stringify({ success: true }) };
        }

        return {
            statusCode: 400,
            body: JSON.stringify({ success: false, error: "Captcha no válido o expirado" })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, error: error.message })
        };
    }
}