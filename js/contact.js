import { validarCampos, validarButton } from "./contact-validations.js";

// Selecciona elementos del formulario
const form = document.querySelector(".contact__form");
const inputs = document.querySelectorAll("[data-tipo]");
const button = document.querySelector(".contact__button");

async function manejarEnvioFormulario(event) {
    event.preventDefault();

    const recaptchaResponse = grecaptcha.getResponse();
    const formData = new FormData(event.target);
    const formDataObject = Object.fromEntries(formData);
    formDataObject.recaptchaResponse = recaptchaResponse;

    const recaptchaData = await verificarRecaptcha(formDataObject);

    if (recaptchaData && recaptchaData.message === 'reCAPTCHA verified') {
        await enviarFormularioNetlify(formData);
        form.reset();
        validarButton(inputs, button);
    } else if (recaptchaData) {
        alert(recaptchaData.message);
    }
}

async function verificarRecaptcha(formDataObject) {
    try {
        const response = await fetch('/.netlify/functions/verify-recaptcha', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formDataObject),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al verificar reCAPTCHA:', error);
        alert('Ocurrió un error al verificar reCAPTCHA.');
        return null;
    }
}

/*async function enviarFormularioNetlify(formData) {
    try {
        await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString(),
        });
        alert('Formulario enviado con éxito.');
    } catch (error) {
        console.error('Error al enviar el formulario:', error);
        alert('Ocurrió un error al enviar el formulario.');
    }
}*/

async function enviarFormularioNetlify(formData) {
    try {
        const response = await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString(),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        alert('Formulario enviado con éxito.');
    } catch (error) {
        console.error('Error al enviar el formulario:', error);
        alert('Ocurrió un error al enviar el formulario.');
    }
}



// Agrega eventos a los campos de entrada para la validación en tiempo real
inputs.forEach((input) => {
    input.addEventListener("input", () => {
        validarCampos(input); // Valida el campo actual
        validarButton(inputs, button); // Valida el estado del botón
    });
});

form.addEventListener('submit', manejarEnvioFormulario);

/* Agrega un evento al formulario para manejar el envío
form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const myForm = event.target;
    const formData = new FormData(myForm);
    
    // ==== AJAX - Doc Netlify ====
    
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
    })
        .then(() => alert("El mensaje fue enviado con éxito, gracias por contactarme."))
        .catch(error => alert(error));
    
        // ===========================

    form.reset(); // Reinicia el formulario
    validarButton(inputs, button); // Valida el estado del botón después de restablecer
}); */