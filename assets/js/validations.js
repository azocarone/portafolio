export function validarCampos(input) {
    const tipoDeInput = input.dataset.tipo;

    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }

    if (input.validity.valid) {
        input.classList.remove('contact__field__input--invalid');
        input.parentElement.querySelector('.contact__field__error').innerHTML = ""
    } else {
        input.classList.add('contact__field__input--invalid');
        input.parentElement.querySelector('.contact__field__error').innerHTML = mostrarMensajeDeError(tipoDeInput, input)
    }
}

const validadores = {
    mensaje: (input) => validarMensaje(input)
}

const mensajesDeError = {
    nombre: {
        valueMissing: 'El nombre no puede estar vacío.',
        patternMismatch: 'El nombre solo tiene espacios en blanco.'
    },
    email: {
        valueMissing: 'El e-mail no puede estar vacío.',
        typeMismatch: 'El e-mail no es valido.'
    },
    asunto: {
        valueMissing: 'El asunto no puede estar vacío.',
        patternMismatch: 'El asunto solo tiene espacios en blanco.'
    },
    mensaje: {
        valueMissing: 'El mensaje no puede estar vacío.',
        customError: 'El mensaje solo tiene espacios en blanco.'
    }
}

const tipoDeErrores = [
    'valueMissing',
    'patternMismatch',
    'typeMismatch',
    'customError'
]

function validarMensaje(input) {
    const mensaje = input.value;
    let errorMensaje = '';

    if (mensaje.length > 0 && mensaje.trim() === '') {
        errorMensaje = mensajesDeError.mensaje.customError;
    }

    input.setCustomValidity(errorMensaje);
}

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = '';

    tipoDeErrores.forEach(error => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error]
        }
    })

    return mensaje
}