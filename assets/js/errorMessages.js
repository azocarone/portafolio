// Mensajes de error para diferentes tipos de campos
export const mensajesDeError = {
    nombre: {
        valueMissing: 'El nombre no puede estar vacío.',
        patternMismatch: 'El nombre solo puede contener letras y espacios.'
    },
    email: {
        valueMissing: 'El e-mail no puede estar vacío.',
        typeMismatch: 'Ingresa un e-mail válido.'
    },
    asunto: {
        valueMissing: 'El asunto no puede estar vacío.',
        patternMismatch: 'El asunto solo puede contener letras y espacios.'
    },
    mensaje: {
        valueMissing: 'El mensaje no puede estar vacío.',
        customError: 'El mensaje solo puede contener letras y espacios.'
    }
};