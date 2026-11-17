const titulosBase = ["Cien años de", "La sombra del", "Crónica de una", "El rastro de", "La noche de", "El secreto de", "Cuentos de"];
const sustantivosBase = ["soledad", "viento", "muerte", "amor", "ciudad", "tiempo", "bosque", "olvido"];
const autoresNombres = ["Gabriel", "Laura", "Héctor", "Jorge", "Manuel", "Mario", "Evelio", "José", "Álvaro", "Piedad"];
const autoresApellidos = ["García", "Restrepo", "Abad", "Franco", "Mejía", "Mendoza", "Rosero", "Rivera", "Mutis", "Bonnett"];

function generarIsbnUnico(isbnsExistentes) {
    let isbn;
    do {
        const aleatorio = Math.floor(Math.random() * 9000000000 + 1000000000);
        isbn = `978958${String(aleatorio).padStart(7, '0')}`;
    } while (isbnsExistentes.has(isbn));
    
    isbnsExistentes.add(isbn);
    return isbn;
}

function generarCatalogo(n) {
    const catalogo = [];
    const isbnsExistentes = new Set();

    for (let i = 0; i < n; i++) {
        const t = titulosBase[Math.floor(Math.random() * titulosBase.length)];
        const s = sustantivosBase[Math.floor(Math.random() * sustantivosBase.length)];
        const titulo = `${t} ${s}`;

        const nombre = autoresNombres[Math.floor(Math.random() * autoresNombres.length)];
        const apellido = autoresApellidos[Math.floor(Math.random() * autoresApellidos.length)];
        const autor = `${nombre} ${apellido}`;

        const anio = Math.floor(Math.random() * (2026 - 1900 + 1)) + 1900;
        const prestamos = Math.floor(Math.random() * 501);
        const isbn = generarIsbnUnico(isbnsExistentes);

        catalogo.push({ isbn, titulo, autor, anio, prestamos });
    }

    return catalogo;
}

module.exports = { generarCatalogo };


function generarCatalogoCasiOrdenado(n) {
    const { generarCatalogo } = require('./generador'); // o usar la función interna
    let libros = generarCatalogo(n);
    // Ordenamos inicialmente por año
    libros.sort((a, b) => a.anio - b.anio);
    // Descolocamos un 5% de los elementos al final para simular llegadas recientes desordenadas
    for (let i = 0; i < Math.floor(n * 0.05); i++) {
        const idx1 = libros.length - 1 - i;
        const idx2 = Math.floor(Math.random() * 10);
        [libros[idx1], libros[idx2]] = [libros[idx2], libros[idx1]];
    }
    return libros;
}