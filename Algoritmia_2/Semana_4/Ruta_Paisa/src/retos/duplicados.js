function validacionesDuplicadas(validaciones) {
    const vistas = new Set();
    const duplicados = [];

    for (const v of validaciones) {
        const clave = `${v.tarjeta}|${v.estacion}|${v.hora}`;
        if (vistas.has(clave)) {
            duplicados.push(v);
        } else {
            vistas.add(clave);
        }
    }
    return duplicados;
}

function montoACorregir(validaciones) {
    const duplicados = validacionesDuplicadas(validaciones);
    return duplicados.reduce((total, v) => total + v.valor, 0);
}

module.exports = { validacionesDuplicadas, montoACorregir };