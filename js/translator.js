import { TranslationService } from "./translator-service.js";
import { TranslationUI } from "./translator-ui.js";

/**
 * Función API exportada para otros módulos (como el de validaciones)
 */
export function getTranslatedText(path) {
    return TranslationService.getText(path);
}

/**
 * Inicializador principal del módulo
 */
export function initTranslator() {
    const langInicial = TranslationService.getLang();
    
    // 1. Inyectar selector y traducir carga inicial
    const selector = TranslationUI.inyectarSelector(langInicial);
    const contenido = TranslationService.getContentByLang(langInicial);
    
    TranslationUI.renderizarTodo(contenido);

    // 2. Escuchar cambios de idioma
    if (selector) {
        selector.addEventListener('change', (event) => {
            const nuevoLang = event.target.value;
            
            // Orquestación de pasos
            TranslationService.saveLang(nuevoLang);
            const nuevasTraducciones = TranslationService.getContentByLang(nuevoLang);
            
            TranslationUI.renderizarTodo(nuevasTraducciones);
            TranslationUI.actualizarErroresVisibles();
        });
    }
}