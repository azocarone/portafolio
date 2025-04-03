import { validarCampos, validarButton } from "./contact-validations.js";

// Selecciona elementos del formulario
const form = document.querySelector(".contact__form");
const inputs = document.querySelectorAll("[data-tipo]");
const button = document.querySelector(".contact__button");

async function manejarEnvioFormulario(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const recaptchaResponse = grecaptcha.getResponse(); // Obtiene el token de reCAPTCHA

    if (!recaptchaResponse) {
        alert("Por favor, completa el reCAPTCHA.");
        return;
    }

    // Agrega el token de reCAPTCHA al FormData
    formData.append("g-recaptcha-response", recaptchaResponse);

    try {
        const recaptchaData = await verificarRecaptcha(recaptchaResponse);

        if (recaptchaData && recaptchaData.message === "reCAPTCHA verified") {
            await enviarFormularioNetlify(formData); // Envía el formulario a Netlify
            form.reset(); // Reinicia el formulario
            validarButton(inputs, button); // Actualiza el estado del botón
        } else {
            alert(recaptchaData?.message || "Error al verificar el reCAPTCHA.");
        }
    } catch (error) {
        console.error("Error al manejar el envío del formulario:", error);
        alert("Ocurrió un error al enviar el formulario.");
    }
}

async function verificarRecaptcha(recaptchaResponse) {
    try {
        const response = await fetch("/.netlify/functions/verify-recaptcha", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ recaptchaResponse }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al verificar reCAPTCHA:", error);
        throw new Error("Ocurrió un error al verificar el reCAPTCHA.");
    }
}

async function enviarFormularioNetlify(formData) {
    console.log(formData);
    try {
        const response = await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        alert("El mensaje fue enviado con éxito, gracias por contactarme.");
    } catch (error) {
        console.error("Error al enviar el formulario a Netlify:", error);
        throw new Error("Ocurrió un error al enviar el formulario.");
    }
}

// Agrega eventos a los elementos de entrada para su validación
inputs.forEach((input) => {
    input.addEventListener("input", () => {
        validarCampos(input);
        validarButton(inputs, button);
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