/**
 * @param {Date} date 
 * @returns 
 */
export function formatDate(date) {
  return new Date(date).toLocaleString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}