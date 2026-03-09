import { imageData } from "./data/education-image-data.js";

/**
 * LÓGICA: Intercambia la fuente de una imagen
 */
const setSource = (imgElement, src) => {
    if (imgElement) imgElement.src = src;
};

/**
 * INICIALIZADOR: Configura el módulo
 */
export function initEducation() {
    // Usamos Object.entries para obtener [id, info] directamente
    Object.entries(imageData).forEach(([id, info]) => {
        
        // 1. Buscamos el contenedor y la imagen una sola vez
        const container = document.querySelector(`[data-item-id="${id}"]`);
        // Buscamos la imagen dentro del contenedor (más eficiente que buscar en todo el document)
        const image = container?.querySelector('.education__logo-image');

        // 2. Guard Clause: Si no existe el contenedor o la imagen, saltamos al siguiente
        if (!container || !image) return;

        // 3. Asignamos los eventos usando la referencia ya guardada en 'image'
        container.addEventListener("mouseenter", () => setSource(image, info.hoverImage));
        container.addEventListener("mouseleave", () => setSource(image, info.originalImage));
    });
}