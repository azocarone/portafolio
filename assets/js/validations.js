// Exportar función para validar campos de entrada
export function validarCampos(input) {
    const tipoDeInput = input.dataset.tipo;

    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input); // Llamar a la función de validación específica
    }

    // Actualizar clases y mensajes de error en función de la validez del campo
    if (input.validity.valid) {
        input.classList.remove('contact__field__input--invalid');
        input.parentElement.querySelector('.contact__field__error').innerHTML = "";
    } else {
        input.classList.add('contact__field__input--invalid');
        input.parentElement.querySelector('.contact__field__error').innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

// Exportar función para validar y habilitar/deshabilitar el botón
export function validarButton(inputs, button) {
    let camposValidos = 0;

    // Contar los campos de entrada válidos
    inputs.forEach(input => {
        if (input.validity.valid) {
            camposValidos++;
        }
    });

    // Habilitar o deshabilitar el botón según el número de campos válidos
    if (camposValidos === 4) {
        button.disabled = false;
        button.classList.add('contact__form__button--enabled');
    } else {
        button.disabled = true;
        button.classList.remove('contact__form__button--enabled');
    }
}

// Objeto que contiene funciones de validación específicas para diferentes tipos de campo
const validadores = {
    mensaje: (input) => validarMensaje(input)
};

// Objeto que almacena los mensajes de error para diferentes tipos de campo y errores
const mensajesDeError = {
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

// Lista de tipos de errores posibles
const tipoDeErrores = [
    'valueMissing',
    'patternMismatch',
    'typeMismatch',
    'customError'
];

// Función para validar el campo "mensaje"
function validarMensaje(input) {
    const mensaje = input.value;
    let errorMensaje = '';

    if (mensaje.length > 0 && mensaje.trim() === '') {
        errorMensaje = mensajesDeError.mensaje.customError;
    }

    input.setCustomValidity(errorMensaje);
}

// Función para generar mensajes de error basados en el tipo de campo y el tipo de error
function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = '';

    tipoDeErrores.forEach(error => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });

    return mensaje;
}