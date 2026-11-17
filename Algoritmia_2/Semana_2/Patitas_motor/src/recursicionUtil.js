// 1. Suma de dígitos de forma recursiva
function sumaDigitos(n) {
    if (n < 10) return n; // Caso base
    return (n % 10) + sumaDigitos(Math.floor(n / 10)); // Reducción y combinación
}

// 2. Búsqueda de máximo en arreglo usando "Divide y Vencerás"
function maximoArreglo(arr, ini = 0, fin = arr.length - 1) {
    if (ini === fin) return arr[ini]; // Caso base: un solo elemento
    const medio = Math.floor((ini + fin) / 2);
    const maxIzq = maximoArreglo(arr, ini, medio);
    const maxDer = maximoArreglo(arr, medio + 1, fin);
    return Math.max(maxIzq, maxDer); // Combinación
}

// 3. Máximo Común Divisor (Algoritmo de Euclides)
function mcd(a, b) {
    if (b === 0) return a; // Caso base
    return mcd(b, a % b);  // Caso recursivo
}

console.log('--- Pruebas de Utilidades Recursivas ---');
console.log('Suma de dígitos (1234):', sumaDigitos(1234)); // 10
console.log('Máximo en arreglo ([3, 9, 2, 15, 7]):', maximoArreglo([3, 9, 2, 15, 7])); // 15
console.log('MCD (48, 18):', mcd(48, 18)); // 6