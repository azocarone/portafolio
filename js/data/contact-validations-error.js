// Mensajes de error para diferentes tipos de campos
export const mensajesDeError = {
  nombre: {
    valueMissing: "El nombre no puede estar vacío.",
    patternMismatch: "El nombre no puede contener solo espacios.",
  },
  email: {
    valueMissing: "El e-mail no puede estar vacío.",
    typeMismatch: "Ingrese un e-mail válido.",
  },
  asunto: {
    valueMissing: "El asunto no puede estar vacío.",
    patternMismatch: "El asunto no puede contener solo espacios.",
  },
  mensaje: {
    valueMissing: "El mensaje no puede estar vacío.",
    customError: "El mensaje no puede contener solo espacios.",
  },
};