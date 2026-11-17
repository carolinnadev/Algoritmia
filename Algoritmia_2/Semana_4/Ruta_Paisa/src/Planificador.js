const { construirRed } = require('./red');
const { ArbolBusqueda } = require('./ArbolBusqueda');

// Reutilizamos el árbol de estaciones del Día 1
const estacionesPiloto = [
    { codigo: 50, nombre: "San Antonio" }, { codigo: 30, nombre: "Caribe" },
    { codigo: 70, nombre: "Poblado" }, { codigo: 20, nombre: "Bello" },
    { codigo: 40, nombre: "Hospital" }, { codigo: 60, nombre: "Exposiciones" },
    { codigo: 80, nombre: "Itagüí" }, { codigo: 10, nombre: "Niquía" },
    { codigo: 25, nombre: "Acevedo" }, { codigo: 35, nombre: "Universidad" },
    { codigo: 45, nombre: "Parque Berrío" }, { codigo: 52, nombre: "Cisneros" },
    { codigo: 56, nombre: "Estadio" }, { codigo: 65, nombre: "Industriales" },
    { codigo: 90, nombre: "La Estrella" }, { codigo: 27, nombre: "Andalucía" },
    { codigo: 29, nombre: "Santo Domingo" }, { codigo: 54, nombre: "Suramericana" },
    { codigo: 58, nombre: "Floresta" }, { codigo: 59, nombre: "San Javier" }
];

const indice = new ArbolBusqueda();
estacionesPiloto.forEach(e => indice.insertar(e.codigo, e.nombre));

const grafo = construirRed();

// Argumentos de terminal: node src/planificador.js <origen> <destino> [--cerradas cod1,cod2]
const args = process.argv.slice(2);
if (args.length < 2) {
    console.log('❌ Uso: node src/planificador.js <origen> <destino> [--cerradas 56]');
    process.exit(1);
}

const origen = parseInt(args[0]);
const destino = parseInt(args[1]);

let cerradas = new Set();
const idxCerradas = args.indexOf('--cerradas');
if (idxCerradas !== -1 && args[idxCerradas + 1]) {
    args[idxCerradas + 1].split(',').forEach(c => cerradas.add(parseInt(c)));
}

// Validaciones con el índice BST
const valOrigen = indice.buscar(origen);
const valDestino = indice.buscar(destino);

if (!valOrigen.estacion) {
    console.log(`❌ Error: La estación de origen con código ${origen} no existe.`);
    process.exit(1);
}
if (!valDestino.estacion) {
    console.log(`❌ Error: La estación de destino con código ${destino} no existe.`);
    process.exit(1);
}

// Cálculo de la ruta con BFS
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