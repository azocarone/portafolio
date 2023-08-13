export function activarButton(inputs, button) {
    let camposValidos = 0;

    inputs.forEach(input => {
        if (input.validity.valid) {
            camposValidos++;
        };
    });

    if (camposValidos == 4) {
        button.disabled = false;
        button.classList.add('contact__form__button--enabled')
    } else {
        button.disabled = true;
        button.classList.remove('contact__form__button--enabled')
    }
};