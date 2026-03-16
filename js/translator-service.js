import { content } from "./data/content-data.js";

export const TranslationService = {
    // Obtiene el idioma guardado o el valor por defecto
    getLang: () => localStorage.getItem('language') || 'es',

    // Guarda la preferencia del usuario
    saveLang: (lang) => localStorage.setItem('language', lang),

    // Navega por el objeto JSON usando un path (ej: "contact.form.title")
    getDeepValue: (obj, path) => {
        return path.split('.').reduce((acc, key) => acc?.[key], obj);
    },

    // Retorna una traducción específica según el idioma actual
    getText: (path) => {
        const lang = TranslationService.getLang();
        const translation = content[lang];
        return TranslationService.getDeepValue(translation, path) || "Texto no encontrado";
    },

    // Retorna el objeto completo de traducciones para un idioma
    getContentByLang: (lang) => content[lang]
}