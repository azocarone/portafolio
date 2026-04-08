export const Validator = {
    // Retorna el tipo de error o null si es válido
    obtenerError: (input) => {
        if (input.dataset.tipo === "message") {
            const esSoloEspacios = input.value.length > 0 && input.value.trim() === "";
            if (esSoloEspacios) return "customError";
        }
        
        const tiposDeErrores = ["valueMissing", "patternMismatch", "typeMismatch", "customError"];
        return tiposDeErrores.find(type => input.validity[type]) || null;
    },

    // Verifica si todo el formulario es apto para envío
    esFormularioValido: (inputs) => {
        const todosValidos = [...inputs].every(i => i.validity.valid);
        const recaptchaOk = typeof grecaptcha !== "undefined" && grecaptcha.getResponse().length > 0;
        return todosValidos && recaptchaOk;
    }
}