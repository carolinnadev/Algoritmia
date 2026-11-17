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