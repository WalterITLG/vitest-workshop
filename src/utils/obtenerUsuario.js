export async function obtenerUsuario() {
  const respuesta = await fetch("/api/usuario");
  if (!respuesta.ok) {
    throw new Error("Error en la respuesta");
  }
  return await respuesta.json();
}
