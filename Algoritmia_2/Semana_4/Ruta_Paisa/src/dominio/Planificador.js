const { crearIndiceRed } = require('./indice');
const { construirRed } = require('./red');
const { PlanMantenimiento } = require('../retos/mantenimiento');

const indice = crearIndiceRed();
const grafo = construirRed();

const args = process.argv.slice(2);

// 1. Comando especial para el diagnóstico del Plan de Mantenimiento
if (args.includes('--mantenimiento')) {
    console.log('\n🛠️  DIAGNÓSTICO DEL PLAN DE MANTENIMIENTO (Grafo Dirigido)');
    console.log('---------------------------------------------------------');

    const pm = new PlanMantenimiento();
    pm.agregarDependencia('T1', 'T2');
    pm.agregarDependencia('T2', 'T4');
    pm.agregarDependencia('T5', 'T3');
    pm.agregarDependencia('T3', 'T4');
    pm.agregarDependencia('T4', 'T6');

    const resCiclo = pm.detectarCiclo();
    if (resCiclo.tieneCiclo) {
        console.log(`⚠️  ¡ERROR EN PLAN! Ciclo detectado: ${resCiclo.ciclo.join(' ➔ ')}`);
    } else {
        console.log('✅ Plan de mantenimiento libre de ciclos.');
        console.log(`📋 Orden topológico de ejecución: ${pm.obtenerOrdenEjecucion().join(' ➔ ')}`);
    }
    process.exit(0);
}

// 2. Planificador de viajes normal por terminal
if (args.length < 2) {
    console.log('❌ Uso: node src/dominio/planificador.js <origen> <destino> [--cerradas cod1,cod2]');
    console.log('       node src/dominio/planificador.js --mantenimiento');
    process.exit(1);
}

const origen = parseInt(args[0]);
const destino = parseInt(args[1]);

let cerradas = new Set();
const idxCerradas = args.indexOf('--cerradas');
if (idxCerradas !== -1 && args[idxCerradas + 1]) {
    args[idxCerradas + 1].split(',').forEach(c => cerradas.add(parseInt(c)));
}

// Validaciones con el índice BST del Día 1
const valOrigen = indice.buscar(origen);
const valDestino = indice.buscar(destino);

if (!valOrigen.estacion) {
    console.log(`❌ Error: La estación de origen con código ${origen} no existe en el índice.`);
    process.exit(1);
}
if (!valDestino.estacion) {
    console.log(`❌ Error: La estación de destino con código ${destino} no existe en el índice.`);
    process.exit(1);
}

// Cálculo de la ruta óptima mediante BFS
const ruta = grafo.rutaMasCorta(origen, destino, cerradas);

if (!ruta) {
    console.log(`⚠️ No es posible viajar desde ${valOrigen.estacion} (${origen}) hasta ${valDestino.estacion} (${destino}) debido a cierres en la red.`);
} else {
    console.log(`\n🚊 RUTA ÓPTIMA: ${valOrigen.estacion} ➔ ${valDestino.estacion}`);
    console.log(`📍 Total de paradas: ${ruta.length - 1}\n`);

    let lineaActual = null;
    ruta.forEach((cod, idx) => {
        const nombre = indice.buscar(cod).estacion;
        if (idx < ruta.length - 1) {
            const siguiente = ruta[idx + 1];
            const lineaTramo = grafo.obtenerLinea(cod, siguiente);
            if (lineaActual !== lineaTramo && lineaActual !== null) {
                console.log(`   🔄 [TRANSBORDO] Cambiar a Línea ${lineaTramo}`);
            }
            lineaActual = lineaTramo;
            console.log(`   [Línea ${lineaActual}] ${nombre} (${cod}) ➔`);
        } else {
            console.log(`   🏁 Destino: ${nombre} (${cod})`);
        }
    });
}