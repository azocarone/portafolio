// Crear el selector de idioma
const languageSelect = document.createElement('select');
languageSelect.id = 'language-select';
languageSelect.innerHTML = `
    <option value="es">Español</option>
    <option value="en">Inglés</option>
`;

// Insertar el selector de idioma al lado del enlace de contacto en el nav
const contactLink = document.querySelector('a[href="#contact"]');
contactLink.parentNode.insertBefore(languageSelect, contactLink.nextSibling);

// Obtener el idioma guardado o usar español por defecto
const language = localStorage.getItem('language') || 'es';
languageSelect.value = language;

// Función para actualizar el contenido basado en el idioma
function updateContent(language) {
    const translation = translations[language];

    // Mapeo de selectores a claves de traducción
    const translationMap = {
        '#site-title': 'siteTitle',
        'a[href="#about"]': 'about',
        'a[href="#services"]': 'services',
        'a[href="#education"]': 'education',
        'a[href="#projects"]': 'projects',
        'a[href="#contact"]': 'contact',
        '.about__title': 'about',
        '.about__description:nth-child(2)': 'aboutDescription1',
        '.about__description:nth-child(3)': 'aboutDescription2',
        '.services__title': 'services',
        '.services__item:nth-child(1) .services__item-title': 'systems',
        '.services__item:nth-child(1) .services__item-description': 'systemsDescription',
        '.services__item:nth-child(2) .services__item-title': 'networks',
        '.services__item:nth-child(2) .services__item-description': 'networksDescription',
        '.services__item:nth-child(3) .services__item-title': 'security',
        '.services__item:nth-child(3) .services__item-description': 'securityDescription',
        '.services__item:nth-child(4) .services__item-title': 'infrastructure',
        '.services__item:nth-child(4) .services__item-description': 'infrastructureDescription',
        '.services__item:nth-child(5) .services__item-title': 'hosting',
        '.services__item:nth-child(5) .services__item-description': 'hostingDescription',
        '.services__item:nth-child(6) .services__item-title': 'response',
        '.services__item:nth-child(6) .services__item-description': 'responseDescription',
        '.education__title': 'education',
        '.projects__title': 'projects',
        '.contact__title': 'contact',
        '.contact__description:nth-child(2)': 'contactDescription1',
        '.contact__description:nth-child(3)': 'contactDescription2',
        'label[for="nombre"]': 'name',
        'label[for="email"]': 'email',
        'label[for="asunto"]': 'subject',
        'label[for="mensaje"]': 'message',
        '.contact__button': 'send',
        '.projects__item:nth-child(1) .projects__item-title': 'resume',
        '.projects__item:nth-child(2) .projects__item-title': 'portfolio',
    };

    // Actualizar el texto de los elementos usando el mapeo
    for (const selector in translationMap) {
        const element = document.querySelector(selector);
        if (element) {
            element.textContent = translation[translationMap[selector]];
        }
    }
}

// Evento para cambiar el idioma
languageSelect.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    updateContent(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
});

// Actualizar el contenido inicial
updateContent(language);