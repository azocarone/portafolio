Actúa como un Desarrollador Frontend Senior experto en Design Systems, arquitectura CSS modular y metodologías escalables (BEM). Mi objetivo es refactorizar, ordenar y limpiar las hojas de estilo del proyecto **[Nombre del Proyecto]** con una estética **[Describir estilo visual, ej: Minimalista, Corporativo, Dark Tech, Neomorguista]**, implementando una estructura robusta basada en capas de Design Tokens y separación modular por componentes.

Para ello, he adjuntado los archivos correspondientes (el HTML principal y las hojas de estilo modulares, como estilos globales, variables/tokens y componentes específicos como `[nombre-componente].css`).

## Criterios Técnicos y Arquitectónicos Obligatorios:

1. **Arquitectura Modular (Multi-Archivo):**
* Respeta y mantén la separación en archivos CSS independientes por componente/sección (ej. `variables.css`, `base.css`, `[nombre-componente].css`). No unifiques todo en un archivo monolítico.

2. **Sistema Jerárquico de Design Tokens (:root y Scoped):**
Implementa o respeta estrictamente la siguiente jerarquía en el flujo de variables:
* **Tokens Primitivos (Core/Raw):** Valores crudos de la paleta y escala (ej. `--color-primary-500: #...;`, `--space-4: 1rem;`, `--font-weight-bold: 700;`).
* **Design Tokens Globales / Semánticos Globales:** Mapeo universal de los primitivos a un propósito funcional global (ej. `--color-bg-surface: var(--color-neutral-900);`, `--color-border-subtle: ...;`).
* **Geometría y Tipografía Base:** Definición clara de escalas tipográficas fluidas (mediante `clamp()`), grosores de bordes globales, radios de curvatura (`--radius-card: 1rem;`) y anchos máximos de contenedores.
* **Tokens Locales Semánticos (Scoped):** Variables específicas de cada componente que heredan o consumen los tokens globales/primitivos (ej. `--[componente]-gap`, `--[componente]-card-padding`), garantizando la independencia y versatilidad de cada módulo.

3. **Metodología BEM Estricta:**
* Asegúrate de que cada clase cumpla rigurosamente con la nomenclatura BEM (`.block`, `.block__element`, `.block__element--modifier`).
* Evita selectores anidados profundos o selectores de etiqueta genéricos que eleven innecesariamente la especificidad.

4. **Orden Lógico por Aparición:**
* Dentro de cada archivo CSS modular, organiza los selectores siguiendo exactamente el flujo natural de arriba hacia abajo tal como aparecen los elementos en el DOM visual del HTML adjunto.

5. **Principio DRY y Optimización:**
* Detecta y elimina propiedades duplicadas, código muerto o reglas CSS obsoletas, delegando siempre los valores repetidos a los tokens correspondientes.

6. **Respeto Absoluto a la Identidad Visual:**
* Preserva la paleta de colores oficial, tipografías, transiciones fluidas y elementos gráficos distintivos definidos para **[Nombre del Proyecto / Estética]**.

Por favor, analiza los archivos adjuntos y entrégame la refactorización limpia y modular bajo estos estándares profesionales de diseño y código.