import { translations } from "./data/languages-translations.js";

const tipoDeErrores = [
    "valueMissing",
    "patternMismatch",
    "typeMismatch",
    "customError",
];

export function actualizarEstadoDeCampo(input, tipoDeInput, campoInvalidoClass, errorElement) {
    const esValido = input.validity.valid;
    input.classList.toggle(campoInvalidoClass, !esValido);

    if (!esValido) {
        // Obtenemos el idioma actual de localStorage (o el que uses por defecto)
        const currentLang = localStorage.getItem('language') || 'es';
        errorElement.textContent = obtenerErrorTraducido(input, tipoDeInput, currentLang);
    } else {
        errorElement.textContent = "";
    }
}

function obtenerErrorTraducido(input, tipoDeInput, lang) {
    // 1. Identificamos qué tipo de error de validación tiene el input
    const errorType = tipoDeErrores.find((error) => input.validity[error]);
    
    if (!errorType) return "";

    // 2. Navegamos por el objeto de traducciones
    // Ruta: translations.es.contact.form.name.errors.valueMissing
    try {
        return translations[lang].contact.form[tipoDeInput].errors[errorType];
    } catch (e) {
        console.warn(`No se encontró traducción para el error ${errorType} en el campo ${tipoDeInput}`);
        return "Campo inválido"; 
    }
}

export function reiniciarFormulario(form, inputs, button) {
    form.reset();

    if (typeof grecaptcha !== "undefined") {
        grecaptcha.reset();
    }

    inputs.forEach((input) => {
        input.classList.remove("contact__input--invalid");
        const errorSpan = input.parentElement.querySelector(".contact__error");
        if(errorSpan) errorSpan.textContent = "";
    });
    
    button.disabled = true;
    button.classList.remove("contact__button--enabled");
}

export function mostrarMensaje(tipo, mensaje) {
    alert(mensaje);
}