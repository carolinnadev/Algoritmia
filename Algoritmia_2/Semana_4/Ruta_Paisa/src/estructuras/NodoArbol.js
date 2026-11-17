class NodoArbol {
    constructor(valor) {
        this.valor = valor;
        this.hijos = [];
    }

    agregarHijo(nodo) {
        this.hijos.push(nodo);
    }
}

// Funciones recursivas para el árbol general
function imprimirArbol(nodo, nivel = 0) {
    const sangria = "  ".repeat(nivel);
    console.log(`${sangria}- ${nodo.valor}`);
    for (const hijo of nodo.hijos) {
        imprimirArbol(hijo, nivel + 1);
    }
}

function contarNodos(nodo) {
    let total = 1; // El nodo actual
    for (const hijo of nodo.hijos) {
        total += contarNodos(hijo);
    }
    return total;
}

function contarHojas(nodo) {
    if (nodo.hijos.length === 0) return 1;
    let total = 0;
    for (const hijo of nodo.hijos) {
        total += contarHojas(hijo);
    }
    return total;
}

function altura(nodo) {
    if (nodo.hijos.length === 0) return 0;
    let maxAlturaHijo = 0;
    for (const hijo of nodo.hijos) {
        maxAlturaHijo = Math.max(maxAlturaHijo, altura(hijo));
    }
    return 1 + maxAlturaHijo;
}

// Construcción de la red piloto
const raizRed = new NodoArbol("Red Ruta Paisa");

const lineaA = new NodoArbol("Línea A");
const estacionesA = [
    "Niquía (10)", "Bello (20)", "Caribe (30)", "Universidad (35)", 
    "Hospital (40)", "Parque Berrío (45)", "San Antonio (50)", 
    "Exposiciones (60)", "Industriales (65)", "Poblado (70)", 
    "Itagüí (80)", "La Estrella (90)"
];
estacionesA.forEach(est => {
    const nodoEst = new NodoArbol(est);
    if (est.startsWith("San Antonio")) {
        nodoEst.agregarHijo(new NodoArbol("Bicicletas públicas"));
        nodoEst.agregarHijo(new NodoArbol("Ascensor"));
    }
    if (est.startsWith("Poblado")) {
        nodoEst.agregarHijo(new NodoArbol("Parqueadero"));
    }
    lineaA.agregarHijo(nodoEst);
});

const lineaB = new NodoArbol("Línea B");
["San Antonio (50)", "Cisneros (52)", "Suramericana (54)", "Estadio (56)", "Floresta (58)", "San Javier (59)"]
    .forEach(est => lineaB.agregarHijo(new NodoArbol(est)));

const lineaK = new NodoArbol("Línea K");
["Caribe (30)", "Acevedo (25)", "Andalucía (27)", "Santo Domingo (29)"]
    .forEach(est => lineaK.agregarHijo(new NodoArbol(est)));

raizRed.agregarHijo(lineaA);
raizRed.agregarHijo(lineaB);
raizRed.agregarHijo(lineaK);

module.exports = { NodoArbol, imprimirArbol, contarNodos, contarHojas, altura, raizRed };