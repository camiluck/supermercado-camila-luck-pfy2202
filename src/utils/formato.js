// Formatea un número como peso chileno: 1990 -> $1.990
export const formatearPrecio = (valor) =>
  new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(valor);
