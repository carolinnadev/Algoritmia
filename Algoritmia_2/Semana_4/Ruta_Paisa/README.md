# 🚊 Ruta Paisa - Planificador de Viajes v0.1

Núcleo del planificador de transporte masivo para la red piloto de Medellín. Implementa un árbol general para representar la jerarquía física de líneas y estaciones, y un Árbol Binario de Búsqueda (BST) optimizado para indexación, consultas por rango y recorridos estructurados.

---

## 🛠️ Instrucciones de Ejecución
Ejecuta el script principal del índice consultable:
```bash
node src/indice.js

## 4. Día 2: Modelado en Grafos y Planificador v0.2

### Comparativa: Lista vs Matriz de Adyacencia ($V = 20, E = 21$)
- **Lista de Adyacencia (`Map`):** Ocupa memoria proporcional a $V + E$ (muy eficiente para redes de transporte dispersas). Consultar vecinos toma $O(grado(v))$.
- **Matriz de Adyacencia ($V \times V$):** Ocupa un espacio fijo de $20 \times 20 = 400$ celdas independientemente de las conexiones reales. Consultar vecinos toma $O(V)$. 
*Conclusión:* La lista de adyacencia es la opción óptima para la red Ruta Paisa.

### Tabla de Estructuras del Planificador
| Estructura | Propósito Principal | Complejidad Operación Clave |
| :--- | :--- | :--- |
| **Árbol General** | Representar jerarquía visual (Líneas/Estaciones) | $O(N)$ recorrido |
| **BST (Árbol Binario)** | Búsqueda y validación rápida de códigos | $O(\log V)$ |
| **Grafo (Lista adyacencia)** | Modelar red mallada y transbordos | $O(V + E)$ |
| **Cola (Queue)** | Gestionar niveles en BFS | $O(1)$ inserción/extracción |
| **Pila (Stack)** | Gestionar llamadas en DFS | $O(1)$ push/pop |
| **Set** | Evitar ciclos y registrar visitados | $O(1)$ búsqueda |
| **Map** | Relacionar vecinos, padres y aristas | $O(1)$ acceso por clave |

## 🛠️ Tabla de Decisiones Técnicas

| Problema del Cliente | Estructura / Algoritmo Elegido | Alternativa Descartada | Complejidad | Justificación |
| :--- | :--- | :--- | :--- | :--- |
| **Indexación de estaciones** | BST (Árbol Binario de Búsqueda) | Lista Lineal | $O(\log n)$ | Permite búsquedas por código y consultas por rango con poda. |
| **Modelado de red de transporte** | Grafo (Lista de Adyacencia) | Matriz de Adyacencia | $O(V + E)$ | Optimiza memoria en redes dispersas ($20$ vértices, $21$ aristas). |
| **Ruta con menos paradas** | BFS (Breadth-First Search) | DFS | $O(V + E)$ | BFS explora por niveles, garantizando la menor cantidad de aristas en grafos sin peso. |
| **Detección de cobros dobles** | Set con clave compuesta | Búsqueda lineal anidada | $O(n)$ | La búsqueda en Set toma $O(1)$, reduciendo la comprobación a una sola pasada. |
| **Ventana de mayor demanda** | Ventana Deslizante | Doble ciclo repetitivo | $O(n)$ | Reutiliza la suma restando el elemento saliente y sumando el entrante. |
| **Secuencia de obras sin bloqueos** | Ordenamiento Topológico (DFS) | Ordenamiento por prioridad | $O(V + E)$ | Resuelve la jerarquía de dependencias en grafos dirigidos acíclicos (DAG). |

---

## 💻 Ejecución de la Suite de Pruebas y Comandos
Para ejecutar las pruebas del proyecto:
```bash
node pruebas/todo.js