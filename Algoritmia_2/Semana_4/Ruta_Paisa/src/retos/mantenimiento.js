class PlanMantenimiento {
    constructor() {
        this.adj = new Map();
    }

    agregarTarea(id) {
        if (!this.adj.has(id)) this.adj.set(id, []);
    }

    agregarDependencia(tareaRequerida, tareaDestino) {
        this.agregarTarea(tareaRequerida);
        this.agregarTarea(tareaDestino);
        this.adj.get(tareaRequerida).push(tareaDestino);
    }

    detectarCiclo() {
        const estado = new Map(); // id -> 'UNVISITED' | 'VISITING' | 'VISITED'
        const tareas = Array.from(this.adj.keys());
        tareas.forEach(t => estado.set(t, 'UNVISITED'));

        const ciclo = [];

        const dfs = (nodo, camino) => {
            estado.set(nodo, 'VISITING');
            camino.push(nodo);

            for (const vecino of this.adj.get(nodo) || []) {
                if (estado.get(vecino) === 'VISITING') {
                    const idx = camino.indexOf(vecino);
                    ciclo.push(...camino.slice(idx), vecino);
                    return true;
                }
                if (estado.get(vecino) === 'UNVISITED') {
                    if (dfs(vecino, camino)) return true;
                }
            }

            estado.set(nodo, 'VISITED');
            camino.pop();
            return false;
        };

        for (const t of tareas) {
            if (estado.get(t) === 'UNVISITED') {
                if (dfs(t, [])) return { tieneCiclo: true, ciclo };
            }
        }
        return { tieneCiclo: false, ciclo: [] };
    }

    obtenerOrdenEjecucion() {
        const validacion = this.detectarCiclo();
        if (validacion.tieneCiclo) return null; // Imposible ordenar si hay ciclo

        const visitados = new Set();
        const pila = [];

        const dfsTopologico = (nodo) => {
            visitados.add(nodo);
            for (const vecino of this.adj.get(nodo) || []) {
                if (!visitados.has(vecino)) {
                    dfsTopologico(vecino);
                }
            }
            pila.push(nodo);
        };

        for (const nodo of this.adj.keys()) {
            if (!visitados.has(nodo)) {
                dfsTopologico(nodo);
            }
        }

        return pila.reverse(); // El orden topológico es el reverso de la salida de finalización
    }
}

module.exports = { PlanMantenimiento };