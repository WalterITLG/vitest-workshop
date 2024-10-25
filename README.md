# Workshop de Pruebas Unitarias con Vitest

¡Bienvenido al **Workshop de Pruebas Unitarias con Vitest**! Este repositorio contiene todos los recursos y ejemplos utilizados en el workshop sobre pruebas unitarias con **Vitest**. En este workshop, cubriremos los conceptos básicos de las pruebas unitarias, cómo usar Vitest para escribir tests, y lo compararemos con Jest.

## Objetivos

- Entender los conceptos de las pruebas unitarias.
- Aprender a aplicar pruebas unitarias utilizando **Vitest**.
- Explorar las diferencias entre **Vitest** y **Jest**.
- Escribir y ejecutar tests, analizar los resultados, y ver la cobertura de las pruebas.

---

## Tabla de Contenidos

- [Instalación](#instalación)
- [Ejecutar Pruebas](#ejecutar-pruebas)
- [Ver la Cobertura](#ver-la-cobertura)
- [Comparación entre Vitest y Jest](#comparación-entre-vitest-y-jest)
- [Ejercicios](#ejercicios)

---

## Instalación

Para comenzar, sigue estos pasos:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/WalterITLG/vitest-workshop.git
   cd vitest-workshop
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Asegúrate de tener **Vitest** y **c8** instalados como dependencias de desarrollo:
   ```bash
   npm install -D vitest c8
   ```

---

## Ejecutar Pruebas

Para ejecutar todas las pruebas unitarias usando Vitest, utiliza el siguiente comando:

```bash
npx vitest run
```

Para pruebas interactivas, puedes usar:

```bash
npx vitest
```

Esto abrirá el modo interactivo de Vitest, donde podrás ver los resultados de las pruebas en tiempo real mientras desarrollas.

---

## Ver la Cobertura

Para generar y ver el reporte de cobertura de las pruebas, ejecuta:

```bash
npx vitest run --coverage
```

Esto generará un reporte de cobertura utilizando **c8** y lo mostrará en la terminal. Además, un informe HTML detallado será guardado en la carpeta `coverage`, el cual podrás ver abriendo `coverage/index.html` en tu navegador.

### Comando de ejemplo:

```bash
open coverage/index.html  # macOS o Linux
start coverage/index.html  # Windows
```

---

## Comparación entre Vitest y Jest

Aunque **Vitest** y **Jest** comparten muchas similitudes, hay algunas diferencias clave:

| Característica            | Vitest                                                        | Jest                                                               |
| ------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------ |
| **Velocidad**             | Más rápido debido a módulos ES nativos y optimizado para Vite | Un poco más lento, usa CommonJS                                    |
| **Configuración**         | Integrado con proyectos Vite                                  | Requiere más configuración para Vite                               |
| **Pruebas con Snapshots** | No totalmente soportado                                       | Totalmente soportado                                               |
| **Mocking y Spies**       | Soporta mocking y spies nativos                               | Jest ofrece más utilidades integradas                              |
| **Soporte TypeScript**    | Excelente con Vite y frameworks modernos                      | También soporta TypeScript, pero requiere ajustes de configuración |

---

## Ejercicios

1. **Prueba Unitaria Básica**: Escribe una prueba simple para verificar la salida de una función.
2. **Mocking**: Crea una prueba que haga mock de una función y verifique su comportamiento.
3. **Cobertura**: Ejecuta las pruebas con cobertura y analiza las líneas no cubiertas.
4. **Pruebas Interactivas**: Usa el modo watch de Vitest para probar de forma interactiva mientras desarrollas.

Siéntete libre de modificar y ampliar los ejemplos en este repositorio para explorar más sobre pruebas unitarias con Vitest.
