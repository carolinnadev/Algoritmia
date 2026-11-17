# Bitácora de Desarrollo - Patitas Motor v0.1
**Módulo:** Estructuras de Datos (Listas Enlazadas)  
**Proyecto:** Patitas Motor (Clínica Veterinaria)  

---

## 1. MiniReto 1: La consulta cero (Nodo y recorrido manual)

### Diagrama conceptual de nodos enlazados
```text
[ CABEZA ]
   │
   ▼
┌─────────────────────────────┐        ┌─────────────────────────────┐        ┌─────────────────────────────┐
│ dato: {fecha: "02/02", ...} │        │ dato: {fecha: "15/03", ...} │        │ dato: {fecha: "20/05", ...} │
│ siguiente: ─────────────────┼───────►│ siguiente: ─────────────────┼───────►│ siguiente: null             │
└─────────────────────────────┘        └─────────────────────────────┘        └─────────────────────────────┘

## 5. MiniReto 8: Tabla de Estructuras del Motor Patitas v0.2

| Estructura | Principio | Uso en Patitas Motor | Operación Principal | Complejidad |
| :--- | :--- | :--- | :--- | :--- |
| **Lista Enlazada** | Secuencial / Punteros | Historial clínico de atenciones por mascota | Acceso / Búsqueda / Eliminación | $O(n)$ (Inserciones $O(1)$) |
| **Cola (Queue)** | FIFO (First In, First Out) | Sala de espera y gestión de turnos de la recepción | `encolar()` / `desencolar()` | $O(1)$ |
| **Pila (Stack)** | LIFO (Last In, First Out) | Sistema de deshacer y rehacer (`undo/redo`) | `apilar()` / `desapilar()` | $O(1)$ |

## 6. Día 3: Recursión y Pensamiento Recursivo

### Las Tres Reglas de la Recursión
1. **Caso base:** Condición de parada que evita llamadas infinitas (ej. `b === 0` en MCD).
2. **Reducción de la entrada:** Cada llamada acerca los parámetros al caso base (ej. `Math.floor(n / 10)` o `arr.slice(1)`).
3. **El salto de fe:** Confiar en que la llamada recursiva menor resuelve correctamente su subproblema y enfocarse exclusivamente en cómo combinar el resultado.

### Traza de Pila (Call Stack) en Datos Anidados
Cuando recorremos el catálogo de Patitas v1.0, la pila de llamadas (LIFO) apila cada nivel de subcategorías a la ida. Al llegar al nivel más profundo sin subcategorías, la función retorna el conteo base y comienza la fase de desapilamiento sumando los totales hacia atrás.

### Comparativa: Recursión vs. Iteración
- **Recursión:** Ideal para estructuras jerárquicas o anidadas de profundidad desconocida (árboles, JSONs, DOM, carpetas). Código más limpio y declarativo.
- **Iteración:** Más eficiente en consumo de memoria al no acumular contextos en el `CallStack`. Preferible para arreglos lineales grandes con miles de iteraciones para evitar desbordamientos (`RangeError`).