import { translations } from "./data/translations-data.js";

/**
 * HELPER: Navega por el objeto JSON
 */
const getTranslationValue = (obj, path) => {
    return path.split('.').reduce((acc, key) => acc?.[key], obj);
};

/**
 * LÓGICA CORE: Traduce los elementos del DOM
 */
export function updateContent(language) {
    const translation = translations[language];
    if (!translation) return;

    // Traducir contenido interno
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const path = element.getAttribute('data-i18n');
        const value = getTranslationValue(translation, path);
        if (value) element.innerHTML = value;
    });

    // Traducir los Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const path = element.getAttribute('data-i18n-placeholder');
        const value = getTranslationValue(translation, path);
        if (value) element.placeholder = value;
    });
}

/**
 * UI: Crea e inserta el selector de idiomas
 */
function createLanguageSelector(currentLang) {
    const contactLink = document.querySelector('a[href="#contact"]');
    if (!contactLink) return null;

    // Crear el selector de idioma
    const select = document.createElement('select');
    select.id = 'language-select';
    select.innerHTML = `
        <option value="es">Español</option>
        <option value="en">English</option>
    `;
    select.value = currentLang;

    // Insertar el selector de idioma al lado del enlace de contacto en el nav
    contactLink.parentNode.insertBefore(select, contactLink.nextSibling);
    return select;
}

/**
 * INICIALIZADOR: Configura todo el módulo
 */
export function initLanguages() {
    const savedLang = localStorage.getItem('language') || 'es';
    
    // 1. Crear el selector
    const selector = createLanguageSelector(savedLang);
    
    // 2. Traducir el contenido por primera vez
    updateContent(savedLang);

    // 3. Configurar el evento de cambio
    if (selector) {
        selector.addEventListener('change', (event) => {
            const lang = event.target.value;
            localStorage.setItem('language', lang);
            updateContent(lang);
        });
    }
}