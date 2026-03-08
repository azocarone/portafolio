import { initLanguages } from './languages.js';
import { initEducation } from './education.js';
import { initContact } from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
    try {
        initLanguages();
        initEducation();
        initContact();
        console.log("Módulos inicializados correctamente.");
    } catch (error) {
        console.error("Error al inicializar la aplicación:", error);
    }
});