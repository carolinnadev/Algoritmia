const { generarCatalogo } = require('./generador');
const { buscarPorTitulo, buscarPorAutor, buscarPorPalabra } = require('./busqueda');

const libros = generarCatalogo(10000);
const librosOrdenados = [...libros].sort((a, b) => a.isbn.localeCompare(b.isbn));

function buscarBinariaDemo(arr, isbn) {
    let inicio = 0;
    let fin = arr.length - 1;
    let comps = 0;
    while (inicio <= fin) {
        comps++;
        let medio = Math.floor((inicio + fin) / 2);
        let cmp = arr[medio].isbn.localeCompare(isbn);
        if (cmp === 0) return { libro: arr[medio], comps };
        if (cmp < 0) inicio = medio + 1;
        else fin = medio - 1;
    }
    return { libro: null, comps };
}

console.log('========================================');
console.log('   REPORTE CATÁLOGO LIBRO ABIERTO v0.1  ');
console.log('========================================\n');

const tituloPrueba = libros[12].titulo;
const resLin = buscarPorTitulo(libros, tituloPrueba);
console.log(`🔍 Búsqueda Lineal (Título: "${tituloPrueba}"):`);
console.log(`   - Encontrado: ${resLin.libro ? 'Sí' : 'No'} | Comparaciones: ${resLin.comparaciones}\n`);

const isbnPrueba = librosOrdenados[100].isbn;
const resBin = buscarBinariaDemo(librosOrdenados, isbnPrueba);
console.log(`🔍 Búsqueda Binaria (ISBN: ${isbnPrueba}):`);
console.log(`   - Encontrado: ${resBin.libro ? 'Sí' : 'No'} | Comparaciones: ${resBin.comps}\n`);

const resPalabra = buscarPorPalabra(libros, "soledad");
console.log(`🔍 Búsqueda Lineal por Palabra ("soledad"):`);
console.log(`   - Coincidentes: ${resPalabra.resultados.length} | Comparaciones: ${resPalabra.comparaciones}`);