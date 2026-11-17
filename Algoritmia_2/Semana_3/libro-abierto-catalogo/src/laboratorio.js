const { generarCatalogo } = require('./generador');
const { bubbleSort, selectionSort, insertionSort, porAnio } = require('./ordenamiento');

function verificarOrden(arreglo, comparar) {
    for (let i = 0; i < arreglo.length - 1; i++) {
        if (comparar(arreglo[i], arreglo[i + 1]) > 0) {
            return false;
        }
    }
    return true;
}

const tamanios = [500, 1000, 2000, 4000];
const estados = ['aleatorio', 'ordenado', 'invertido', 'casiOrdenado'];

console.log('====================================================');
console.log('   LABORATORIO DE RENDIMIENTO - LIBRO ABIERTO v0.2  ');
console.log('====================================================\n');

const reporteGeneral = [];

tamanios.forEach(n => {
    estados.forEach(estado => {
        let base = generarCatalogo(n);
        if (estado === 'ordenado') base.sort(porAnio);
        if (estado === 'invertido') base.sort((a, b) => porAnio(b, a));
        if (estado === 'casiOrdenado') {
            base.sort(porAnio);
            // Mover 5 elementos del final al principio
            for(let i=0; i<5; i++) {
                let elem = base.pop();
                base.unshift(elem);
            }
        }

        // Medir Bubble Sort
        let t0 = performance.now();
        let resBubble = bubbleSort(base, porAnio);
        let t1 = performance.now();
        let tiempoBubble = (t1 - t0).toFixed(2);
        let okBubble = verificarOrden(resBubble.resultado, porAnio) ? 'OK' : 'FALLA';

        // Medir Selection Sort
        t0 = performance.now();
        let resSel = selectionSort(base, porAnio);
        t1 = performance.now();
        let tiempoSel = (t1 - t0).toFixed(2);
        let okSel = verificarOrden(resSel.resultado, porAnio) ? 'OK' : 'FALLA';

        // Medir Insertion Sort
        t0 = performance.now();
        let resIns = insertionSort(base, porAnio);
        t1 = performance.now();
        let tiempoIns = (t1 - t0).toFixed(2);
        let okIns = verificarOrden(resIns.resultado, porAnio) ? 'OK' : 'FALLA';

        // Medir Sort nativo (Referencia)
        t0 = performance.now();
        let baseNativa = [...base].sort(porAnio);
        t1 = performance.now();
        let tiempoNativo = (t1 - t0).toFixed(2);

        reporteGeneral.push({
            Tam: n,
            Estado: estado,
            'Bubble (ms)': tiempoBubble,
            'Selection (ms)': tiempoSel,
            'Insertion (ms)': tiempoIns,
            'Nativo (ms)': tiempoNativo,
            Validación: `${okBubble}/${okSel}/${okIns}`
        });
    });
});

console.table(reporteGeneral);