const { ArbolBusqueda } = require('../estructuras/ArbolBusqueda');

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

function crearIndiceRed() {
    const indice = new ArbolBusqueda();
    estacionesPiloto.forEach(e => indice.insertar(e.codigo, e.nombre));
    return indice;
}

module.exports = { crearIndiceRed, estacionesPiloto };