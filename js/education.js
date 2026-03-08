import { setupImageEvents } from "./education-image-events.js";

export function initEducation() {
    /*
    // Configura los eventos de las imágenes cuando el DOM se carga
    document.addEventListener("DOMContentLoaded", () => {
        setupImageEvents();
    });
    */
    // Ya no necesitamos el listener de DOMContentLoaded aquí 
    // porque lo manejaremos en el main.js
    setupImageEvents();
}