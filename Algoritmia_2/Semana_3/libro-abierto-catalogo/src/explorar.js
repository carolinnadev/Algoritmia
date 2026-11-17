const { generarCatalogo } = require('./generador');

const libros = generarCatalogo(10000);

console.log('=== EXPLORACIÓN DEL CATÁLOGO (10.000 LIBROS) ===\n');
console.log('Primeros 5 libros:');
console.log(libros.slice(0, 5));

let anioAntiguo = libros[0].anio;
let anioReciente = libros[0].anio;
let totalPrestamos = 0;

for (let i = 0; i < libros.length; i++) {
    const l = libros[i];
    if (l.anio < anioAntiguo) anioAntiguo = l.anio;
    if (l.anio > anioReciente) anioReciente = l.anio;
    totalPrestamos += l.prestamos;
}

console.log(`\nAño más antiguo: ${anioAntiguo}`);
console.log(`Año más reciente: ${anioReciente}`);
console.log(`Total acumulado de préstamos: ${totalPrestamos.toLocaleString()}`);