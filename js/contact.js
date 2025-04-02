import { validarCampos, validarButton } from "./contact-validations.js";

// Selecciona elementos del formulario
const form = document.querySelector(".contact__form");
const inputs = document.querySelectorAll("[data-tipo]");
const button = document.querySelector(".contact__button");

// Agrega eventos a los campos de entrada para la validación en tiempo real
inputs.forEach((input) => {
    input.addEventListener("input", () => {
        validarCampos(input); // Valida el campo actual
        validarButton(inputs, button); // Valida el estado del botón
    });
});

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

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const recaptchaResponse = grecaptcha.getResponse();
    const formData = new FormData(event.target);
    const formDataObject = Object.fromEntries(formData);
    formDataObject.recaptchaResponse = recaptchaResponse;

    fetch('/.netlify/functions/verify-recaptcha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formDataObject),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.message === 'reCAPTCHA verified') {
                // reCAPTCHA verificado con éxito, procesa el formulario
                alert('Formulario enviado con éxito');
                form.reset();
            } else {
                // Muestra el mensaje de error personalizado
                alert(data.message);
            }
        })
        .catch((error) => {
            console.error(error);
            alert('An error occurred');
        });

    form.reset(); // Reinicia el formulario
    validarButton(inputs, button); // Valida el estado del botón después de restablecer
});