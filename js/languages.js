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

// Función para actualizar el contenido basado en el idioma (Estructura Optimizada)
function updateContent(language) {
    const translation = translations[language];

    // Nuevo Mapeo de selectores a rutas de traducción anidadas
    const translationMap = {
        // Sección Navegación
        '#site-title': 'nav.title',
        'a[href="#about"]': 'nav.about',
        'a[href="#education"]': 'nav.education',
        'a[href="#services"]': 'nav.services',
        'a[href="#projects"]': 'nav.projects',
        'a[href="#contact"]': 'nav.contact',

        // Sección Perfil
        '.profile__title': 'profile.title',
        '.profile__link': 'profile.linkTitle',

        // Sección Sobre Mí
        '.about__title': 'about.title',
        '.about__description:nth-child(2)': 'about.description1',
        '.about__description:nth-child(3)': 'about.description2',
        '.about__description:nth-child(4)': 'about.description3',
 
        // Sección Servicios
        '.services__title': 'services.title',
        '.services__item:nth-child(1) .services__item-title': 'services.items.systems.title',
        '.services__item:nth-child(1) .services__item-description': 'services.items.systems.description',
        '.services__item:nth-child(2) .services__item-title': 'services.items.networks.title',
        '.services__item:nth-child(2) .services__item-description': 'services.items.networks.description',
        '.services__item:nth-child(3) .services__item-title': 'services.items.security.title',
        '.services__item:nth-child(3) .services__item-description': 'services.items.security.description',
        '.services__item:nth-child(4) .services__item-title': 'services.items.hosting.title',
        '.services__item:nth-child(4) .services__item-description': 'services.items.hosting.description',
        '.services__item:nth-child(5) .services__item-title': 'services.items.response.title',
        '.services__item:nth-child(5) .services__item-description': 'services.items.response.description',
        '.services__item:nth-child(6) .services__item-title': 'services.items.infrastructure.title',
        '.services__item:nth-child(6) .services__item-description': 'services.items.infrastructure.description',
      
        // Sección Educación
        '.education__title': 'education.title',
        '.education__item:nth-child(1) .education__degree': 'education.items.uc3m.degree',
        '.education__item:nth-child(1) .education__institution': 'education.items.uc3m.institution',
        '.education__item:nth-child(2) .education__degree': 'education.items.uah.degree',
        '.education__item:nth-child(2) .education__institution': 'education.items.uah.institution',
        '.education__item:nth-child(3) .education__degree': 'education.items.iunp.degree',
        '.education__item:nth-child(3) .education__institution': 'education.items.iunp.institution',
             
        // Sección Proyectos
        '.projects__title': 'projects.title',
        '.projects__item:nth-child(1) .projects__item-title': 'projects.items.resume.title',
        '.projects__item:nth-child(1) .projects__item-description': 'projects.items.resume.description',
        '.projects__item:nth-child(2) .projects__item-title': 'projects.items.portfolio.title',
        '.projects__item:nth-child(2) .projects__item-description': 'projects.items.portfolio.description',

        // Sección Contacto y Formulario
        '.contact__title': 'contact.title',
        '.contact__description:nth-child(2)': 'contact.promo1',
        '.contact__description:nth-child(3)': 'contact.promo2',
        '.contact__button': 'contact.form.submit',
        'label[for="nombre"]': 'contact.form.name',
        'label[for="email"]': 'contact.form.email',
        'label[for="asunto"]': 'contact.form.subject',
        'label[for="mensaje"]': 'contact.form.message',
    };

    // Actualizar el texto de los elementos usando el mapeo
    for (const selector in translationMap) {
        const element = document.querySelector(selector);
        if (element) {
            const path = translationMap[selector];
            
            // Navegamos por el objeto translation usando el path (ej: "contact.form.name")
            const text = path.split('.').reduce((obj, key) => obj && obj[key], translation);
            
            if (text) {
                element.innerHTML = text;
            }
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