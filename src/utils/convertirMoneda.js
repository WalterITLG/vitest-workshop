export function convertirMoneda(cantidad, tasaConversion) {
  if (tasaConversion <= 0) {
    throw new Error("La tasa de conversión debe ser mayor que 0");
  }
  return cantidad * tasaConversion;
}
