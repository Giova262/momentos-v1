// utils.js

/**
 * Formatea un número con el formato argentino.
 * @param {number} numero - El número a formatear.
 * @param {number} decimales - Cantidad de decimales deseados.
 * @returns {string} - Número formateado con ',' como separador decimal y '.' como separador de miles.
 */
export function formatearNumero(numero, decimales = 2) {
  console.log('numero');
  console.log(numero);
  return Number(numero).toLocaleString('es-AR', {
    minimumFractionDigits: decimales,
    maximumFractionDigits: decimales
  });
}
