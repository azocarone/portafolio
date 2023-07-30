// Array con la información de cada imagen
const imagesData = [
    {
        id: "alura",
        originalImage: "../assets/img/logos/alura.png",
        hoverImage: "../assets/img/training/alura.jpeg"
    },
    {
        id: "uc3m",
        originalImage: "../assets/img/logos/uc3m.png",
        hoverImage: "../assets/img/training/uc3m.jpeg"
    },
    {
        id: "uah",
        originalImage: "../assets/img/logos/uah.png",
        hoverImage: "../assets/img/training/uah.jpeg"
    },
    {
        id: "iunp",
        originalImage: "../assets/img/logos/iunp.png",
        hoverImage: "../assets/img/training/iunp.jpeg"
    }
];

// Modifica el atributo [src] del elemento <img>
function changeImageSource(elementId, newImage) {
    const element = document.querySelector(`[data-logo-id="${elementId}"] .training__logo__image`);
    element.src = newImage;
}

// Configura eventos para los elementos <li>
imagesData.forEach(imageInfo => {
    const { id, originalImage, hoverImage } = imageInfo;
    const itemElement = document.querySelector(`[data-item-id="${id}"]`);

    itemElement.addEventListener("mouseenter", function () {
        changeImageSource(id, hoverImage);
    });

    itemElement.addEventListener("mouseleave", function () {
        changeImageSource(id, originalImage);
    });
});  