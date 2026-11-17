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