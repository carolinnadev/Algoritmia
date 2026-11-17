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