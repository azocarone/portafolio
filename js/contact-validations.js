import { mensajesDeError } from "./data/contact-validations-error.js";

// Función para validar campos de entrada individualmente
export function validarCampos(input) {
  const { tipo: tipoDeInput } = input.dataset;
  const campoInvalidoClass = "contact__input--invalid";
  const errorElement = input.parentElement.querySelector(
    ".contact__error"
  );
  const tieneValidadorEspecial = validadores[tipoDeInput];

  tieneValidadorEspecial
    ? validadores[tipoDeInput](input)
    : console.warn(`Validador para ${tipoDeInput} no encontrado.`);
  actualizarEstadoDeCampo(input, tipoDeInput, campoInvalidoClass, errorElement);
}

// Función para validar el estado del botón de envío
export function validarButton(inputs, button) {
  const camposValidos = [...inputs].map((input) => input.validity.valid);
  const camposValidosCount = camposValidos.reduce(
    (count, isValid) => count + (isValid ? 1 : 0),
    0
  );

  button.disabled = camposValidosCount !== 4;
  button.classList.toggle(
    "contact__button--enabled",
    camposValidosCount === 4
  );
}

// Definición de validadores para tipos de campo específicos
const validadores = {
  mensaje: (input) => validarMensaje(input),
};

// Tipos de errores posibles
const tipoDeErrores = [
  "valueMissing",
  "patternMismatch",
  "typeMismatch",
  "customError",
];

// Función para validar el campo "mensaje"
function validarMensaje(input) {
  const mensaje = input.value;
  const esSoloEspacios = mensaje.length > 0 && mensaje.trim() === "";
  let errorMensaje = "";

  errorMensaje = esSoloEspacios
    ? mensajesDeError.mensaje.customError
    : errorMensaje;
  input.setCustomValidity(errorMensaje);
}

//  Actualiza el estado del posible mensaje de error del campo de entrada
function actualizarEstadoDeCampo(
  input,
  tipoDeInput,
  campoInvalidoClass,
  errorElement
) {
  const esValido = input.validity.valid;

  input.classList.toggle(campoInvalidoClass, !esValido);
  errorElement.innerHTML = esValido
    ? ""
    : mostrarMensajeDeError(input, tipoDeInput);
}

// Función para mostrar mensajes de error
function mostrarMensajeDeError(input, tipoDeInput) {
  const error = tipoDeErrores.find((error) => input.validity[error]);

  return error ? mensajesDeError[tipoDeInput][error] : "";
}