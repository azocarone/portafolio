import { TranslationController } from './controllers/translation-controller.js';
import { EducationController } from './controllers/education-controller.js';
import { ContactController } from './controllers/contact-controller.js';

document.addEventListener('DOMContentLoaded', () => {
    try {
        TranslationController.init();
        EducationController.init();
        ContactController.init();
        
        console.log("Aplicación inicializada correctamente.");
    } catch (error) {
        console.error("Error al inicializar la aplicación:", error);
    }
})