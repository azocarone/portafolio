import { imageData } from "./data/education-image-data.js";

// Configura los oyentes de eventos para las imágenes
export function setupImageEvents() {
  for (const id in imageData) {
    if (imageData.hasOwnProperty(id)) {
      const imageInfo = imageData[id];
      const itemElement = document.querySelector(`[data-item-id="${id}"]`);

      itemElement.addEventListener("mouseenter", () => {
        changeImageSource(id, imageInfo.hoverImage);
      });

      itemElement.addEventListener("mouseleave", () => {
        changeImageSource(id, imageInfo.originalImage);
      });
    }
  }
}

// Cambia la fuente de la imagen según el evento
function changeImageSource(elementId, newImage) {
  const element = document.querySelector(
    `[data-logo-id="${elementId}"] .education__item-logo-image`
  );
  element.src = newImage;
}
