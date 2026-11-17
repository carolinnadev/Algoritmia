class NodoBinario {
    constructor(codigo, estacion) {
        this.codigo = codigo;       // Clave numérica (ej. 50)
        this.estacion = estacion;   // Nombre de la estación (ej. "San Antonio")
        this.izquierdo = null;
        this.derecho = null;
    }
}

class ArbolBusqueda {
    constructor() {
        this.raiz = null;
    }

    // MiniReto 2: Inserción en el BST
    insertar(codigo, estacion) {
        const nuevoNodo = new NodoBinario(codigo, estacion);
        if (!this.raiz) {
            this.raiz = nuevoNodo;
            return;
        }

        let actual = this.raiz;
        while (true) {
            if (codigo === actual.codigo) {
                actual.estacion = estacion; // Actualiza si ya existe
                return;
            }
            if (codigo < actual.codigo) {
                if (!actual.izquierdo) {
                    actual.izquierdo = nuevoNodo;
                    return;
                }
                actual = actual.izquierdo;
            } else {
                if (!actual.derecho) {
                    actual.derecho = nuevoNodo;
                    return;
                }
                actual = actual.derecho;
            }
        }
    }

    // MiniReto 2: Búsqueda por código
    buscar(codigo) {
        let actual = this.raiz;
        let comparaciones = 0;

        while (actual !== null) {
            comparaciones++;
            if (codigo === actual.codigo) {
                return { estacion: actual.estacion, comparaciones };
            } else if (codigo < actual.codigo) {
                actual = actual.izquierdo;
            } else {
                actual = actual.derecho;
            }
        }
        return { estacion: null, comparaciones };
    }

    // --- MINIRETO 3: RECORRIDOS ---

    inorden(callback, nodo = this.raiz) {
        if (nodo !== null) {
            this.inorden(callback, nodo.izquierdo);
            callback(nodo.codigo, nodo.estacion);
            this.inorden(callback, nodo.derecho);
        }
    }

    preorden(callback, nodo = this.raiz) {
        if (nodo !== null) {
            callback(nodo.codigo, nodo.estacion);
            this.preorden(callback, nodo.izquierdo);
            this.preorden(callback, nodo.derecho);
        }
    }

    postorden(callback, nodo = this.raiz) {
        if (nodo !== null) {
            this.postorden(callback, nodo.izquierdo);
            this.postorden(callback, nodo.derecho);
            callback(nodo.codigo, nodo.estacion);
        }
    }

    // --- MINIRETO 4: CONSULTAS DE RANGO Y EXTREMOS ---

    minimo() {
        if (!this.raiz) return null;
        let actual = this.raiz;
        while (actual.izquierdo !== null) {
            actual = actual.izquierdo;
        }
        return { codigo: actual.codigo, estacion: actual.estacion };
    }

    maximo() {
        if (!this.raiz) return null;
        let actual = this.raiz;
        while (actual.derecho !== null) {
            actual = actual.derecho;
        }
        return { codigo: actual.codigo, estacion: actual.estacion };
    }

    rango(desde, hasta, nodo = this.raiz, resultado = []) {
        if (nodo === null) return resultado;

        // Poda: solo explora la rama izquierda si puede haber valores mayores que 'desde'
        if (nodo.codigo > desde) {
            this.rango(desde, hasta, nodo.izquierdo, resultado);
        }
        // Si está dentro del rango, se incluye
        if (nodo.codigo >= desde && nodo.codigo <= hasta) {
            resultado.push({ codigo: nodo.codigo, estacion: nodo.estacion });
        }
        // Poda: solo explora la rama derecha si puede haber valores menores que 'hasta'
        if (nodo.codigo < hasta) {
            this.rango(desde, hasta, nodo.derecho, resultado);
        }
        return resultado;
    }
}

module.exports = { NodoBinario, ArbolBusqueda };