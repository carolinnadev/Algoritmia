const { Grafo } = require('./Grafo');

function construirRed() {
    const grafo = new Grafo();

    const lineas = [
        { nombre: 'A', estaciones: [10, 20, 30, 35, 40, 45, 50, 60, 65, 70, 80, 90] },
        { nombre: 'B', estaciones: [50, 52, 54, 56, 58, 59] },
        { nombre: 'K', estaciones: [30, 25, 27, 29] },
        { nombre: 'T', estaciones: [40, 56, 65] } // Tranvía
    ];

    lineas.forEach(l => {
        for (let i = 0; i < l.estaciones.length - 1; i++) {
            grafo.conectar(l.estaciones[i], l.estaciones[i + 1], l.nombre);
        }
    });

    return grafo;
}

module.exports = { construirRed };