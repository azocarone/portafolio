import { translations } from "./data/translations-data.js";

export function initLanguages() {
    const contactLink = document.querySelector('a[href="#contact"]');
    if (!contactLink) return; // Guarda clausula por seguridad

    // Crear el selector de idioma
    const languageSelect = document.createElement('select');
    languageSelect.id = 'language-select';
    languageSelect.innerHTML = `
        <option value="es">Español</option>
        <option value="en">Inglés</option>
    `;

    // Insertar el selector de idioma al lado del enlace de contacto en el nav
    contactLink.parentNode.insertBefore(languageSelect, contactLink.nextSibling);

    // Obtener el idioma guardado o usar español por defecto
    const language = localStorage.getItem('language') || 'es';
    languageSelect.value = language;

    // Función auxiliar para navegar por el objeto JSON
    const getTranslationValue = (obj, path) => {
        return path.split('.').reduce((acc, key) => acc?.[key], obj);
    };

    // Función para actualizar el contenido basado en el idioma (Estructura Optimizada)
    function updateContent(language) {
        const translation = translations[language];
        if (!translation) return;

        // Traducir contenido interno
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const path = element.getAttribute('data-i18n');
            const value = getTranslationValue(translation, path);
            if (value) element.innerHTML = value;
        });

        // Traducir Placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const path = element.getAttribute('data-i18n-placeholder');
            const value = getTranslationValue(translation, path);
            if (value) element.placeholder = value;
        });
    }

    // Evento para cambiar el idioma
    languageSelect.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        updateContent(selectedLanguage);
        localStorage.setItem('language', selectedLanguage);
    });

    // Actualizar el contenido inicial
    updateContent(language);
}