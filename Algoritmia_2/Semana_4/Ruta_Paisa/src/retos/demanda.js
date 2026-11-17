function horaPico(porMinuto, k = 5) {
    let sumaActual = 0;
    for (let i = 0; i < k; i++) sumaActual += porMinuto[i];

    let maxSuma = sumaActual;
    let minutoInicioMax = 0;

    for (let i = k; i < porMinuto.length; i++) {
        sumaActual += porMinuto[i] - porMinuto[i - k];
        if (sumaActual > maxSuma) {
            maxSuma = sumaActual;
            minutoInicioMax = i - k + 1;
        }
    }

    const formatoHora = (m) => `06:${(m < 10 ? '0' : '') + m}`;
    return {
        inicio: formatoHora(minutoInicioMax),
        fin: formatoHora(minutoInicioMax + k - 1),
        totalValidaciones: maxSuma
    };
}

function estacionesMasUsadas(validaciones, top = 3) {
    const conteos = new Map();
    for (const v of validaciones) {
        conteos.set(v.estacion, (conteos.get(v.estacion) || 0) + 1);
    }

    return Array.from(conteos.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, top)
        .map(([estacion, conteo]) => ({ estacion, conteo }));
}

module.exports = { horaPico, estacionesMasUsadas };