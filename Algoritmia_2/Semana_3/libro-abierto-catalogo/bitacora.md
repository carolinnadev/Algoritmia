# Bitácora de Desarrollo - Libro Abierto v0.1
**Módulo:** Algoritmos de Búsqueda (Lineal y Binaria)  
**Proyecto:** Libro Abierto (Red de Bibliotecas del Valle de Aburrá)  

---

## 1. MiniReto 1: Estantería digital y Modelo de Datos

### Justificación del tipo de dato para el ISBN
El código **ISBN** (International Standard Book Number) se almacena como un texto (`string`) y no como un número entero o de punto flotante por las siguientes razones:
1. **Longitud y precisión:** Los ISBN modernos de 13 dígitos superan el límite de seguridad numérica en JavaScript (`Number.MAX_SAFE_INTEGER`), lo que provocaría pérdida de precisión o redondeos automáticos.
2. **Ceros iniciales y guiones:** Aunque en este proyecto generamos cadenas numéricas de 13 dígitos, los ISBN reales pueden contener guiones o ceros a la izquierda que se perderían si se trataran estrictamente como datos numéricos puros.

### Verificación de Unicidad
Para garantizar que el generador masivo no repitiera códigos en un catálogo de 10.000 libros, se implementó un objeto `Set` en JavaScript. Cada vez que se genera un ISBN aleatorio, se verifica con `.has()` antes de agregarlo al arreglo y registrarlo en el `Set`, logrando un tiempo de validación eficiente en $O(1)$ por cada inserción.

---

## 2. MiniReto 2: Búsqueda Lineal

### Análisis de Casos y Complejidad
- **Mejor caso $O(1)$:** El elemento buscado se encuentra en la primera posición del arreglo.
- **Peor caso $O(n)$:** El elemento está en la última posición o no existe en el catálogo, obligando a recorrer los $n$ elementos completos.
- **Caso promedio $O(n/2) \rightarrow O(n)$:** En promedio, el elemento se encuentra a la mitad del recorrido.

### Traza de búsqueda de "Delirio" (Muestra de 8 libros)
1. Comparación 1: "¿Cien años de soledad" === "Delirio"? ➔ No.
2. Comparación 2: "¿La vorágine" === "Delirio"? ➔ No.
3. Comparación 3: "¿El olvido que seremos" === "Delirio"? ➔ No.
4. Comparación 4: "¿Delirio" === "Delirio"? ➔ **Sí (Encontrado en 4 comparaciones)**.

---

## 3. MiniReto 3: Búsqueda Binaria (Iterativa y Recursiva)

### Análisis de Eficiencia con Grandes Volúmenes
Para un catálogo de **1.000.000 de elementos**, la búsqueda lineal requeriría hasta 1.000.000 de comparaciones en el peor caso. En contraste, la búsqueda binaria reduce el espacio de búsqueda a la mitad en cada paso ($log_2(n)$):
$$\log_2(1.000.000) \approx 19.93 \rightarrow \text{Máximo 20 comparaciones}.$$

### ¿Qué pasa si aplicas búsqueda binaria a un catálogo desordenado?
La búsqueda binaria asume estrictamente que los datos están ordenados de forma ascendente o descendente para decidir si se desplaza hacia la mitad izquierda o derecha. Si se aplica a un arreglo desordenado, la regla de selección del punto medio se vuelve inválida, provocando que el algoritmo omita el elemento objetivo o devuelva un resultado erróneo (falso negativo).

---

## 4. MiniReto 4: Tabla de Decisión de Algoritmos

| Tipo de Consulta | ¿Los datos están ordenados por ese campo? | Algoritmo Elegido | Complejidad Temporal |
| :--- | :--- | :--- | :--- |
| **Búsqueda por ISBN** | Sí (Catálogo ordenado por ISBN) | Búsqueda Binaria | $O(\log n)$ |
| **Búsqueda por Título** | No | Búsqueda Lineal | $O(n)$ |
| **Búsqueda por Autor** | No | Búsqueda Lineal (Múltiples resultados) | $O(n)$ |
| **Búsqueda por Palabra clave** | No | Búsqueda Lineal (`indexOf` / subcadenas) | $O(n)$ |