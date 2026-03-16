import { TranslationService } from "./translator-service.js";

export const TranslationUI = {
    // Traduce etiquetas con data-i18n y placeholders
    renderizarTodo: (traducciones) => {
        // Contenido interno
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const path = el.getAttribute('data-i18n');
            const value = TranslationService.getDeepValue(traducciones, path);
            if (value) el.innerHTML = value;
        });

        // Placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const path = el.getAttribute('data-i18n-placeholder');
            const value = TranslationService.getDeepValue(traducciones, path);
            if (value) el.placeholder = value;
        });
    },

    // Refresca errores de contacto enviando un evento artificial
    actualizarErroresVisibles: () => {
        const inputsInvalidados = document.querySelectorAll('.contact__input--invalid');
        inputsInvalidados.forEach(input => {
            input.dispatchEvent(new Event('input', { bubbles: true }));
        });
    },

    // Crea e inserta el elemento <select> en el DOM
    inyectarSelector: (currentLang) => {
        const contactLink = document.querySelector('a[href="#contact"]');
        if (!contactLink) return null;

        const select = document.createElement('select');
        select.id = 'language-select';
        select.innerHTML = `
            <option value="es">Español</option>
            <option value="en">English</option>
        `;
        select.value = currentLang;

        contactLink.parentNode.insertBefore(select, contactLink.nextSibling);
        return select;
    }
}