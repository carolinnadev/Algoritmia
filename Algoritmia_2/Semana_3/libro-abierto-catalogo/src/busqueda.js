function normalizar(texto) {
    return texto.toLowerCase().trim();
}

function buscarPorTitulo(libros, tituloBuscado) {
    const objetivo = normalizar(tituloBuscado);
    let comparaciones = 0;

    for (let i = 0; i < libros.length; i++) {
        comparaciones++;
        if (normalizar(libros[i].titulo) === objetivo) {
            return { libro: libros[i], comparaciones };
        }
    }
    return { libro: null, comparaciones };
}

function buscarPorAutor(libros, autorBuscado) {
    const objetivo = normalizar(autorBuscado);
    const resultados = [];
    let comparaciones = 0;

    for (let i = 0; i < libros.length; i++) {
        comparaciones++;
        if (normalizar(libros[i].autor) === objetivo) {
            resultados.push(libros[i]);
        }
    }
    return { resultados, comparaciones };
}

function buscarPorPalabra(libros, palabraBuscada) {
    const objetivo = normalizar(palabraBuscada);
    const resultados = [];
    let comparaciones = 0;

    for (let i = 0; i < libros.length; i++) {
        comparaciones++;
        const tituloNorm = normalizar(libros[i].titulo);
        if (tituloNorm.indexOf(objetivo) !== -1) {
            resultados.push(libros[i]);
        }
    }
    return { resultados, comparaciones };
}

module.exports = { buscarPorTitulo, buscarPorAutor, buscarPorPalabra };

function buscarPorIsbn(librosOrdenados, isbnBuscado) {
    let inicio = 0;
    let fin = librosOrdenados.length - 1;
    let comparaciones = 0;

    while (inicio <= fin) {
        comparaciones++;
        const medio = Math.floor((inicio + fin) / 2);
        const cmp = librosOrdenados[medio].isbn.localeCompare(isbnBuscado);

        if (cmp === 0) {
            return { libro: librosOrdenados[medio], posicion: medio, comparaciones };
        } else if (cmp < 0) {
            inicio = medio + 1;
        } else {
            fin = medio - 1;
        }
    }
    return { libro: null, posicion: -1, comparaciones };
}

function buscarPorIsbnRecursivo(librosOrdenados, isbnBuscado, inicio = 0, fin = librosOrdenados.length - 1, comps = { count: 0 }) {
    if (inicio > fin) {
        return { libro: null, posicion: -1, comparaciones: comps.count };
    }

    comps.count++;
    const medio = Math.floor((inicio + fin) / 2);
    const cmp = librosOrdenados[medio].isbn.localeCompare(isbnBuscado);

    if (cmp === 0) {
        return { libro: librosOrdenados[medio], posicion: medio, comparaciones: comps.count };
    } else if (cmp < 0) {
        return buscarPorIsbnRecursivo(librosOrdenados, isbnBuscado, medio + 1, fin, comps);
    } else {
        return buscarPorIsbnRecursivo(librosOrdenados, isbnBuscado, inicio, medio - 1, comps);
    }
}