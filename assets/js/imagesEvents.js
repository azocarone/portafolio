import { imagesData } from "./imagesData.js";

// Configura los oyentes de eventos para las imágenes
export function setupImageEvents() {
  for (const id in imagesData) {
    if (imagesData.hasOwnProperty(id)) {
      const imageInfo = imagesData[id];
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
    `[data-logo-id="${elementId}"] .training__logo__image`
  );
  element.src = newImage;
}
