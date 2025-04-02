exports.handler = async function (event) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const { recaptchaResponse } = JSON.parse(event.body);

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaResponse}`;

    try {
        // Usar import() dinámico
        const fetchModule = await import('node-fetch');
        const fetch = fetchModule.default;

        const response = await fetch(verificationURL, { method: 'POST' });
        const verificationData = await response.json();

        if (verificationData.success) {
            return { statusCode: 200, body: JSON.stringify({ message: 'reCAPTCHA verified' }) };
        } else {
            console.error('reCAPTCHA verification failed:', verificationData);
            return { statusCode: 400, body: JSON.stringify({ message: 'reCAPTCHA verification failed. Por favor, asegúrese de completar el reCAPTCHA correctamente.', error: verificationData }) };
        }
    } catch (error) {
        console.error('Error in Netlify Function:', error);
        return { statusCode: 500, body: JSON.stringify({ error: 'Internal Server Error', details: error.message }) };
    }
};