import { ImageData } from "../data/education-image-data.js";

// Intercambia la fuente de una imagen
const setSource = (imgElement, src) => {
    if (imgElement) imgElement.src = src;
};

export const EducationController = {
    init: () => {
        // Usamos Object.entries para obtener [id, info] directamente
        Object.entries(ImageData).forEach(([id, info]) => {
            
            // Buscar el contenedor y la imagen una sola vez
            const container = document.querySelector(`[data-item-id="${id}"]`);
            // Buscar la imagen dentro del contenedor (más eficiente que buscar en todo el document)
            const image = container?.querySelector('.education__logo-image');

            // Guardar Clausula: Si no existe el contenedor o la imagen, saltamos al siguiente
            if (!container || !image) return;

            // Asignar los eventos usando la referencia ya guardada en 'image'
            container.addEventListener("mouseenter", () => setSource(image, info.hoverImage));
            container.addEventListener("mouseleave", () => setSource(image, info.originalImage));
        });
    }
}