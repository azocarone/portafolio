export function valida(input) {
    const tipoInput = input.dataset.tipo;

    if (validadores[tipoInput]) {
        validadores[tipoInput](input);
    };

    if (input.validity.valid) {
        input.classList.remove('formcontato__input--invalid');
        input.parentElement.querySelector('.formcontato__message-error').innerHTML = '';
    } else {
        input.classList.add('formcontato__input--invalid');
        input.parentElement.querySelector('.formcontato__message-error').innerHTML = mostrarMensajeError(tipoInput, input);
    };
};

const validadores = {
    mensaje: (input) => validarMensaje(input)
}

function validarMensaje(input) {
    const mensaje = input.value;
    let errorMensaje = '';
    if (mensaje.length > 0 && mensaje.trim() === '') {
        errorMensaje = 'El campo mensaje solo tiene espacios en blanco.';
    }
    input.setCustomValidity(errorMensaje);
}

const tipoErrores = [
    'valueMissing',
    'patternMismatch',
    'typeMismatch',
    'customError',
];

const mensajesError = {
    nombre: {
        valueMissing: 'El campo nombre no puede estar vacio.',
        patternMismatch: 'El campo nombre solo tiene espacios en blanco.',
    },
    email: {
        valueMissing: 'El campo e-mail no puede estar vacio.',
        typeMismatch: 'El campo e-mail no es valido.',
    },
    asunto: {
        valueMissing: 'El campo asunto no puede estar vacio.',
        patternMismatch: 'El campo solo tiene espacios en blanco.',
    },
    mensaje: {
        valueMissing: 'El campo mensaje no puede estar vacio.',
        customError: 'El campo mensaje solo tiene espacios en blanco.',
    },
};

function mostrarMensajeError(tipoInput, input) {
    let errorMensaje = '';
    tipoErrores.forEach((error) => {
        if (input.validity[error]) {
            errorMensaje = mensajesError[tipoInput][error];
        }
    });
    return errorMensaje;
};