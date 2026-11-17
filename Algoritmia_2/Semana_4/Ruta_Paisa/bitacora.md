# Bitácora de Desarrollo - Ruta Paisa v0.1
**Módulo:** Árboles Generales y Árboles Binarios de Búsqueda (BST)  

## 1. MiniReto 1: El Árbol General de la Red
- **Estaciones Compartidas:** Estaciones como *San Antonio* y *Caribe* aparecen en múltiples líneas (Línea A, B y K). En un árbol general estricto esto genera duplicidad de nodos hijos. Para modelar redes complejas de transporte sin duplicar entidades, la estructura idónea es un **Grafo**.

## 2. MiniReto 2 y 3: BST y Recorridos
- Al insertar las 20 estaciones en el orden especificado, el árbol mantiene un balance razonable con profundidades máximas de 4 a 6 niveles.
- El recorrido **inorden** arroja los códigos estrictamente ascendentes (10 a 90).
- El recorrido **postorden** procesa primero los subárboles hijos y al final la raíz, lo cual previene pérdidas de referencia al liberar memoria de nodos de manera segura.

## 3. MiniReto 4: Análisis del Árbol Degenerado
Si las estaciones se insertan en orden estrictamente ascendente (ej. de 10 a 90), el BST se convierte en una **lista enlazada unidireccional** (árbol degenerado) con altura de 20 niveles. En este peor escenario, la complejidad de búsqueda se degrada de $O(\log n)$ a $O(n)$.

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