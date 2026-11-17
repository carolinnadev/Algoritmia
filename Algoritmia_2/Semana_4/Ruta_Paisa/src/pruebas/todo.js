const { validacionesDuplicadas } = require('../src/retos/duplicados');
const { horaPico } = require('../src/retos/demanda');
const { PlanMantenimiento } = require('../src/retos/mantenimiento');

console.log('==================================================');
console.log('   EJECUTANDO PRUEBAS INTEGRALES (RUTA PAISA v1.0)');
console.log('==================================================\n');

let totalPruebas = 0;
let pasadas = 0;

function probar(descripcion, condicion) {
    totalPruebas++;
    if (condicion) {
        console.log(`[OK] - ${descripcion}`);
        pasadas++;
    } else {
        console.log(`[FALLA] - ${descripcion}`);
    }
}

// 1. Prueba de Duplicados
const datosDuplicados = [
    { tarjeta: 'T-101', estacion: 50, hora: '07:02', valor: 3000 },
    { tarjeta: 'T-101', estacion: 50, hora: '07:02', valor: 3000 }
];
probar('Detección de validaciones duplicadas', validacionesDuplicadas(datosDuplicados).length === 1);

// 2. Prueba de Ventana Deslizante (Hora Pico)
const porMinuto = [100, 200, 300, 400, 500, 100];
const resPico = horaPico(porMinuto, 3); // Ventana de 3 minutos -> 300+400+500 = 1200
probar('Cálculo de hora pico con ventana deslizante', resPico.totalValidaciones === 1200);

// 3. Prueba de Plan de Mantenimiento y Ciclos
const pm = new PlanMantenimiento();
pm.agregarDependencia('T1', 'T2');
pm.agregarDependencia('T2', 'T3');
pm.agregarDependencia('T3', 'T1'); // Genera Ciclo
probar('Detección de ciclos en dependencias', pm.detectarCiclo().tieneCiclo === true);

console.log(`\nResultado: ${pasadas}/${totalPruebas} pruebas superadas.`);