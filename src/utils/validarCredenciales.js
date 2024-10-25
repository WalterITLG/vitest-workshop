export function validarCredenciales(email, password) {
  if (email === "admin@example.com" && password === "password123") {
    return true;
  }
  throw new Error("Credenciales inválidas");
}
