# 📚 Libro Abierto - Catálogo v0.1

Sistema de gestión y búsqueda eficiente para la red de cinco bibliotecas comunitarias del Valle de Aburrá. Este proyecto implementa algoritmos de búsqueda desde cero (sin depender de métodos nativos avanzados de filtrado como `find` o `filter`), permitiendo consultar un volumen masivo de 10.000 libros con control riguroso de rendimiento y número de comparaciones.

---

## 🚀 Funcionalidades Principales
- **Generador de Catálogos:** Creación dinámica de $n$ libros con ISBNs de 13 dígitos únicos garantizados mediante estructuras `Set`.
- **Búsqueda Lineal:** Localización por título, autor o coincidencia de palabras clave con conteo detallado de iteraciones.
- **Búsqueda Binaria (Iterativa y Recursiva):** Consultas ultrarrápidas basadas en índices de mitad sobre catálogos previamente ordenados por ISBN.
- **Gestión de Copias Múltiples:** Localización de la primera ocurrencia y conteo de ediciones repetidas en distintas sedes.

---

## 🛠️ Estructura del Proyecto
```text
libro-abierto-catalogo/
├── src/
│   ├── muestra.js     # Muestra de referencia inicial (8 libros)
│   ├── generador.js   # Generador masivo de 10.000 libros únicos
│   ├── explorar.js    # Script de análisis estadístico del catálogo
│   ├── busqueda.js    # Algoritmos de búsqueda lineal y binaria
│   └── catalogo.js    # Buscador integrado y reporte de rendimiento
├── bitacora.md        # Documentación técnica, trazas y tablas comparativas
└── README.md          # Documentación del proyecto


# 📚 Libro Abierto - Catálogo v0.2

Sistema de gestión, búsqueda y ordenamiento eficiente para la red de cinco bibliotecas comunitarias del Valle de Aburrá. En esta versión v0.2 se incorporan algoritmos de ordenamiento básico implementados desde cero, funciones de comparación desacopladas, análisis de estabilidad y un laboratorio completo de rendimiento.

---

## 🚀 Funcionalidades Principales
- **Generador con Estados Especiales:** Creación de catálogos bajo distintos escenarios iniciales (aleatorio, ordenado, invertido y casi ordenado).
- **Bubble Sort Optimizado:** Ordenamiento por intercambio adyacente con parada temprana para optimizar el mejor caso.
- **Selection Sort:** Ordenamiento por selección del elemento mínimo con mínimo número de intercambios.
- **Insertion Sort:** Ordenamiento por inserción directa, altamente eficiente para volúmenes casi ordenados.
- **Comparadores Compuestos y Decoradores:** Funciones de ordenamiento por año, autor/título de manera alfabética avanzada (`localeCompare`) y la función inversora `invertir()`.
- **Laboratorio de Rendimiento:** Comparativa automatizada de tiempos, conteo de operaciones y validación de correctitud frente al método nativo `sort`.

---

## 🛠️ Estructura del Proyecto
```text
libro-abierto-catalogo/
├── src/
│   ├── muestra.js       # Muestra de referencia inicial (8 libros)
│   ├── generador.js     # Generador masivo y de estados especiales
│   ├── explorar.js      # Script de análisis estadístico
│   ├── busqueda.js      # Algoritmos de búsqueda lineal y binaria
│   ├── ordenamiento.js  # Módulo de Bubble, Selection, Insertion y comparadores
│   ├── laboratorio.js   # Laboratorio de rendimiento comparativo (v0.2)
│   └── catalogo.js      # Buscador integrado principal
├── bitacora.md          # Documentación técnica, trazas y conclusiones
└── README.md            # Documentación del proyecto

# 📚 Libro Abierto - Catálogo v1.0 [Lanzamiento Oficial]

Sistema definitivo de gestión, búsqueda y ordenamiento de alta eficiencia para la red de cinco bibliotecas comunitarias del Valle de Aburrá. Desarrollado íntegramente desde cero sin utilizar las funciones nativas de ordenamiento del lenguaje.

---

## 📊 Tabla de Algoritmos Implementados

| Algoritmo | Complejidad Promedio | Peor Caso | Estable | Uso en Libro Abierto |
| :--- | :--- | :--- | :--- | :--- |
| **Búsqueda Binaria** | $O(\log n)$ | $O(\log n)$ | N/A | Consultas por ISBN y Autocompletar |
| **Bubble Sort** | $O(n^2)$ | $O(n^2)$ | Sí | Demostración académica y listas diminutas |
| **Insertion Sort** | $O(n^2)$ | $O(n^2)$ | Sí | Inserción optimizada de libros diarios |
| **Merge Sort** | $O(n \log n)$ | $O(n \log n)$ | Sí | Reordenamiento nocturno y copias estables |
| **Quick Sort** | $O(n \log n)$ | $O(n^2)$ | No | Ordenamiento general en memoria restringida |

---

## 🛠️ Instrucciones de Ejecución
Ejecuta la demostración completa del catálogo v1.0:
```bash
node src/catalogo.js