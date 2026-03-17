import { TranslationService } from "../services/translation-service.js";
import { TranslationUI } from "../ui/translation-view.js";

export const TranslationController = {
    init: () => {
        const langInicial = TranslationService.getLang();

        // Inyectar selector y traducir carga inicial
        const selector = TranslationUI.inyectarSelector(langInicial);
        const contenido = TranslationService.getContentByLang(langInicial);
            
        TranslationUI.renderizarTodo(contenido);

        // Escuchar cambios de idioma
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
}

// Función API exportada para otros módulos (como el de validaciones)
export function getTranslatedText(path) {
    return TranslationService.getText(path);
}