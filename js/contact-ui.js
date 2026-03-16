import { getTranslatedText } from "./translator.js";

export const UI = {
    // Muestra u oculta errores en los inputs
    renderizarEstadoCampo: (input, errorType, tipoDeInput) => {
        const campoInvalidoClass = "contact__input--invalid";
        const errorElement = input.parentElement.querySelector(".contact__error");
        
        const esValido = !errorType;
        input.classList.toggle(campoInvalidoClass, !esValido);

        if (errorElement) {
            const path = `contact.form.${tipoDeInput}.errors.${errorType}`;
            errorElement.textContent = errorType ? getTranslatedText(path) : "";
        }
    },

    // Cambia el estado visual y funcional del botón
    setEstadoBoton: (button, habilitado) => {
        button.disabled = !habilitado;
        button.classList.toggle("contact__button--enabled", habilitado);
    },

    // Limpia el formulario y estados visuales
    resetearFormulario: (form, inputs, button) => {
        form.reset();
        if (typeof grecaptcha !== "undefined") grecaptcha.reset();

        inputs.forEach(input => {
            input.classList.remove("contact__input--invalid");
            const error = input.parentElement.querySelector(".contact__error");
            if (error) error.textContent = "";
        });

        UI.setEstadoBoton(button, false);
    },

    notificar: (mensaje) => alert(mensaje)
}