class Grafo {
    constructor() {
        this.adyacencia = new Map(); // Mapa de código -> Set de vecinos
        this.aristasConLinea = new Map(); // Clave "a-b" -> línea
    }

    agregarEstacion(codigo) {
        if (!this.adyacencia.has(codigo)) {
            this.adyacencia.set(codigo, new Set());
        }
    }

    conectar(a, b, linea = 'General') {
        this.agregarEstacion(a);
        this.agregarEstacion(b);
        this.adyacencia.get(a).add(b);
        this.adyacencia.get(b).add(a);
        
        this.aristasConLinea.set(`${a}-${b}`, linea);
        this.aristasConLinea.set(`${b}-${a}`, linea);
    }

    vecinos(codigo) {
        return this.adyacencia.has(codigo) ? Array.from(this.adyacencia.get(codigo)) : [];
    }

    grado(codigo) {
        return this.adyacencia.has(codigo) ? this.adyacencia.get(codigo).size : 0;
    }

    obtenerLinea(a, b) {
        return this.aristasConLinea.get(`${a}-${b}`) || 'General';
    }

    // --- DFS RECURSIVO ---
    dfs(inicio, cerradas = new Set(), visitados = new Set()) {
        visitados.add(inicio);
        const alcanzables = [inicio];

        for (const vecino of this.vecinos(inicio)) {
            if (!visitados.has(vecino) && !cerradas.has(vecino)) {
                alcanzables.push(...this.dfs(vecino, cerradas, visitados));
            }
        }
        return alcanzables;
    }

    // --- COMPONENTES CONECTADOS ---
    componentes(cerradas = new Set()) {
        const visitados = new Set();
        const grupos = [];

        for (const estacion of this.adyacencia.keys()) {
            if (!visitados.has(estacion) && !cerradas.has(estacion)) {
                const alcanzables = this.dfs(estacion, cerradas, new Set());
                alcanzables.forEach(e => visitados.add(e));
                grupos.push(alcanzables);
            }
        }
        return grupos;
    }

    // --- BFS (Ruta más corta con paradas) ---
    rutaMasCorta(origen, destino, cerradas = new Set()) {
        if (!this.adyacencia.has(origen) || !this.adyacencia.has(destino)) return null;
        if (cerradas.has(origen) || cerradas.has(destino)) return null;
        if (origen === destino) return [origen];

        const cola = [origen];
        const visitados = new Set([origen]);
        const padres = new Map(); // Estación -> Estación previa

        let encontrado = false;

        while (cola.length > 0) {
            const actual = cola.shift();

            if (actual === destino) {
                encontrado = true;
                break;
            }

            for (const vecino of this.vecinos(actual)) {
                if (!visitados.has(vecino) && !cerradas.has(vecino)) {
                    visitados.add(vecino);
                    padres.set(vecino, actual);
                    cola.push(vecino);
                }
            }
        }

        if (!encontrado) return null;

        // Reconstrucción del camino desde el destino al origen
        const camino = [];
        let actual = destino;
        while (actual !== undefined) {
            camino.unshift(actual);
            actual = padres.get(actual);
        }

        return camino;
    }
}

module.exports = { Grafo };