import 'aos/dist/aos.css';
import AOS from 'aos';

import { TranslationController } from './controllers/translation-controller.js';
import { EducationController } from './controllers/education-controller.js';
import { ContactController } from './controllers/contact-controller.js';

document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
    })

    try {
        TranslationController.init();
        EducationController.init();
        ContactController.init();
        
        console.log("Aplicación inicializada correctamente.");
    } catch (error) {
        console.error("Error al inicializar la aplicación:", error);
    }
})


