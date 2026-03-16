import { content } from "./data/content-data.js";

/**
 * HELPER: Navega por el objeto JSON
 */
const getTranslationValue = (obj, path) => {
    return path.split('.').reduce((acc, key) => acc?.[key], obj);
};

/**
 * Función API: Permite a otros módulos obtener un texto sin importar el JSON
 */
export function getTranslatedText(path) {
    const lang = localStorage.getItem('language') || 'es';
    return getTranslationValue(content[lang], path) || "Texto no encontrado";
}

/**
 * LÓGICA CORE: Traduce los elementos del DOM
 */
export function updateContent(language) {
    const translation = content[language];
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

    // Actualizar mensajes de error visibles si existen
    actualizarErroresVisibles();
}

function actualizarErroresVisibles() {
    // Buscamos todos los inputs que tienen un error activo en este momento
    const inputsInvalidados = document.querySelectorAll('.contact__input--invalid');
    inputsInvalidados.forEach(input => {
        // Disparamos la validación de nuevo para que contact-ui refresque el texto en el nuevo idioma
        const event = new Event('input', { bubbles: true });
        input.dispatchEvent(event);
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
export function initTranslator() {
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