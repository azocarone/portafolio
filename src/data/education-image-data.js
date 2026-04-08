const keys = ["uc3m", "uah", "iunp"];

export const ImageData = Object.fromEntries(
    keys.map(key => [
        key, 
        {
            originalImage: new URL(`/assets/img/logos/${key}.png`, import.meta.url).href,
            hoverImage: new URL(`/assets/img/education/${key}.jpeg`, import.meta.url).href,
        }
    ])
);