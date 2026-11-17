// --- COMPARADORES ---

function porAnio(a, b) {
    return a.anio - b.anio;
}

function porAutorYTitulo(a, b) {
    const comparacionAutor = a.autor.localeCompare(b.autor, 'es', { sensitivity: 'base' });
    if (comparacionAutor !== 0) {
        return comparacionAutor;
    }
    return a.titulo.localeCompare(b.titulo, 'es', { sensitivity: 'base' });
}

function porPrestamosDesc(a, b) {
    return b.prestamos - a.prestamos; // Orden descendente
}

function invertir(comparar) {
    return function(a, b) {
        return -comparar(a, b);
    };
}

// --- ALGORITMOS DE ORDENAMIENTO ---

function bubbleSort(arreglo, comparar) {
    const a = [...arreglo];
    let comparaciones = 0;
    intercambios = 0;
    let n = a.length;
    let huboIntercambio;

    for (let i = 0; i < n - 1; i++) {
        huboIntercambio = false;
        for (let j = 0; j < n - i - 1; j++) {
            comparaciones++;
            if (comparar(a[j], a[j + 1]) > 0) {
                // Intercambio con desestructuración
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                intercambios++;
                huboIntercambio = true;
            }
        }
        // Optimización de salida temprana
        if (!huboIntercambio) break;
    }

    return { resultado: a, comparaciones, intercambios };
}

function selectionSort(arreglo, comparar) {
    const a = [...arreglo];
    let comparaciones = 0;
    let intercambios = 0;
    let n = a.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            comparaciones++;
            if (comparar(a[j], a[minIdx] || a[j]) < 0) { // Corrección para asegurar índice correcto
                // Nota: buscamos estrictamente el menor índice
            }
        }
        // Forma estándar de Selection Sort:
        for (let j = i + 1; j < n; j++) {
            comparaciones++;
            if (comparar(a[j], a[minIdx]) < 0) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            [a[i], a[minIdx]] = [a[minIdx], a[i]];
            intercambios++;
        }
    }

    return { resultado: a, comparaciones, intercambios };
}

// Corrigiendo variable minIndex local de Selection Sort limpia:
function selectionSortClean(arreglo, comparar) {
    const a = [...arreglo];
    let comparaciones = 0;
    let intercambios = 0;
    let n = a.length;

    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            comparaciones++;
            if (comparar(a[j], a[minIdx]) < 0) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            [a[i], a[minIdx]] = [a[minIdx], a[i]];
            intercambios++;
        }
    }
    return { resultado: a, comparaciones, intercambios };
}

function insertionSort(arreglo, comparar) {
    const a = [...arreglo];
    let comparaciones = 0;
    let intercambios = 0;
    let n = a.length;

    for (let i = 1; i < n; i++) {
        let actual = a[i];
        let j = i - 1;

        // Mientras no lleguemos al inicio y el elemento anterior sea mayor al actual
        while (j >= 0) {
            comparaciones++;
            if (comparar(a[j], actual) > 0) {
                a[j + 1] = a[j];
                intercambios++;
                j--;
            } else {
                break;
            }
        }
        a[j + 1] = actual;
    }

    return { resultado: a, comparaciones, intercambios };
}

module.exports = {
    porAnio,
    porAutorYTitulo,
    porPrestamosDesc,
    invertir,
    bubbleSort,
    selectionSort: selectionSortClean,
    insertionSort
};


// --- MERGE SORT ---

function mezclar(izquierda, derecha, comparar) {
    let resultado = [];
    let i = 0;
    let j = 0;

    while (i < izquierda.length && j < derecha.length) {
        // Usamos <= para preservar el orden relativo y garantizar estabilidad
        if (comparar(izquierda[i], derecha[j]) <= 0) {
            resultado.push(izquierda[i]);
            i++;
        } else {
            resultado.push(derecha[j]);
            j++;
        }
    }

    return resultado.concat(izquierda.slice(i)).concat(derecha.slice(j));
}

function mergeSort(arreglo, comparar) {
    if (arreglo.length <= 1) {
        return [...arreglo];
    }

    const medio = Math.floor(arreglo.length / 2);
    const izquierda = mergeSort(arreglo.slice(0, medio), comparar);
    const derecha = mergeSort(arreglo.slice(medio), comparar);

    return mezclar(izquierda, derecha, comparar);
}

// --- QUICK SORT (Partición en el lugar con pivote aleatorio) ---

function particion(arr, inicio, fin, comparar) {
    // Elegimos un pivote aleatorio entre inicio y fin para evitar el peor caso O(n^2) con datos ordenados
    const indiceAleatorio = Math.floor(Math.random() * (fin - inicio + 1)) + inicio;
    [arr[indiceAleatorio], arr[fin]] = [arr[fin], arr[indiceAleatorio]]; // Mover pivote al final

    const pivote = arr[fin];
    let i = inicio - 1;

    for (let j = inicio; j < fin; j++) {
        if (comparar(arr[j], pivote) <= 0) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[fin]] = [arr[fin], arr[i + 1]];
    return i + 1;
}

function quickSortInPlace(arr, comparar, inicio = 0, fin = arr.length - 1) {
    if (inicio < fin) {
        const pi = particion(arr, inicio, fin, comparar);
        quickSortInPlace(arr, comparar, inicio, pi - 1);
        quickSortInPlace(arr, comparar, pi + 1, fin);
    }
    return arr;
}

function quickSort(arreglo, comparar) {
    const copia = [...arreglo];
    return quickSortInPlace(copia, comparar, 0, copia.length - 1);
}

module.exports = {
    // ... (mantén los anteriores: bubbleSort, selectionSort, insertionSort, comparadores)
    mergeSort,
    quickSort
};