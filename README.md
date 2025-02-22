# Portafolio 

Este proyecto es un portafolio personal diseñado para destacar la experiencia profesional, habilidades técnicas y proyectos de José Antonio Azócar Marcano. El sitio web está estructurado para proporcionar información sobre su formación académica, servicios de asesorías IT, desafíos (challenges) y una forma fácil de contacto. Es una herramienta ideal para mostrar su experiencia en áreas como la informática, ciberseguridad, ciencia de datos, desarrollo backend y programación en Java/Python. 

El diseño del portafolio es minimalista pero funcional, con enlaces directos a proyectos en GitHub y demos interactivas, lo que permite a los visitantes explorar su trabajo de manera efectiva. 

<div align="center"><img src="assets/img/screenshot.gif" alt="Portafolio" width="683" height="384" style="border-radius: 10px;"></div>

## Característícas

- **Secciones claras y organizadas**: Incluye apartados como "Sobre Mí", "Formación Académica", "Asesorías IT", "Challenges" y "Contacto".
- **Enlaces a proyectos**: Cada proyecto tiene enlaces a su repositorio en GitHub y una demo interactiva.
- **Formulario de contacto**: Permite a los visitantes enviar mensajes directamente desde el sitio.
- **Diseño responsive**: Adecuado para visualización en dispositivos móviles y escritorio.
- **Información técnica detallada**: Resalta habilidades clave como Java, Python, backend, ciberseguridad y más.
     
## Tecnologías y Metodologías empleadas

- HTML, CSS, y JavaScript;
- Git y GitHub;
- Block Element Modifier (BEM), Estructura de carpetas, Módulos ES6.

## Instalación y ejecución

1. Clonar este repositorio:
   
   ```bash
   git clone https://github.com/azocarone/portafolio.git
   ```

2. Abrir el archivo `index.html` en el navegador de su preferencia.

## Uso

- Navegar por las diferentes secciones para conocer más sobre José Antonio Azócar Marcano.
- Hacer click en los enlaces de los proyectos para ver sus repositorios en GitHub o probar las demos.
- Usar el formulario de contacto para enviar un mensaje si estás interesado en colaborar.

## Código Principal

``` HTML
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portafolio</title>
</head>
<body>
  <header>
    <h1>Portafolio</h1>
    <nav>
      <ul>
        <li><a href="#about">Sobre Mí</a></li>
        <li><a href="#education">Formación</a></li>
        <li><a href="#services">Asesorías</a></li>
        <li><a href="#projects">Challenges</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  </header>

  <section id="about">
    <h2>Sobre Mí</h2>
    <p>Ingeniero en Informática, con un Máster en Comercio Electrónico...</p>
  </section>

  <section id="education">
    <h2>Formación Académica</h2>
    <ul>
      <li>Univ. "Carlos III de Madrid" - Mtr. en Comercio Electrónico</li>
      <li>Univ. "Alejandro de Humboldt" - Ing. en Informática</li>
      <li>Inst. Univ. de "Nuevas Profesiones" - TSU. en Computación</li>
    </ul>
  </section>

  <section id="services">
    <h2>Asesorías IT</h2>
    <ul>
      <li>Informática: Administración de servidores con GNU/Linux...</li>
      <li>Ciberseguridad: Diseño e implementación de estrategias...</li>
      <li>Datascience: Análisis de datos con Python...</li>
      <li>Java / Python Developer: Programación de aplicaciones robustas...</li>
      <li>Backend: Optimización de bases de datos y lógica...</li>
      <li>Troubleshooting: Resolución eficaz de incidentes...</li>
    </ul>
  </section>

  <section id="projects">
    <h2>Challenges</h2>
    <div>
      <h3>Juego del Ahorcado</h3>
      <a href="https://github.com">GitHub</a>
      <a href="https://demo.com">Demo</a>
    </div>
  </section>

  <section id="contact">
    <h2>Contacto</h2>
    <form>
      <label for="name">Nombre:</label>
      <input type="text" id="name" name="name" required>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      <label for="subject">Asunto:</label>
      <input type="text" id="subject" name="subject" required>
      <label for="message">Mensaje:</label>
      <textarea id="message" name="message" required></textarea>
      <button type="submit">Enviar mensaje</button>
    </form>
  </section>

  <footer>
    <p>© 2022-2025 José Antonio Azócar Marcano. Todos los derechos reservados.</p>
  </footer>
</body>
</html>
```

## Mejoras futuras

- **Optimización del SEO**: Mejorar el posicionamiento del sitio en motores de búsqueda mediante metaetiquetas y palabras clave.
- **Integración con APIs**: Agregar funcionalidades dinámicas, como un chatbot o integración con redes sociales.
- **Soporte multilingüe**: Añadir soporte para otros idiomas, como inglés, para ampliar el alcance del portafolio.
- **Hosting en la nube**: Publicar el sitio en plataformas como Netlify o Vercel para facilitar el acceso y mantenimiento.

---
azocarone 😉😄