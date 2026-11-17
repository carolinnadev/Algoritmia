const catalogoPatitas = {
    categoria: "Clínica Veterinaria Patitas",
    serviciosDirectos: [],
    subcategorias: [
        {
            categoria: "Medicina Preventiva",
            serviciosDirectos: ["Vacunación anual", "Desparasitación", "Control de peso"],
            subcategorias: []
        },
        {
            categoria: "Cirugía y Especialidades",
            serviciosDirectos: ["Esterilización", "Control posquirúrgico"],
            subcategorias: [
                {
                    categoria: "Diagnóstico e Imaging",
                    serviciosDirectos: ["Radiografía de pata", "Ecografía abdominal"],
                    subcategorias: []
                },
                {
                    categoria: "Odontología",
                    serviciosDirectos: ["Limpieza dental", "Extracción"],
                    subcategorias: []
                }
            ]
        }
    ]
};

// Función recursiva para contar todos los servicios en cualquier nivel de profundidad
function contarServicios(nodo) {
    // Caso base / acumulación inicial: servicios de este nivel
    let total = nodo.serviciosDirectos ? nodo.serviciosDirectos.length : 0;

    // Caso recursivo: recorrer subcategorías sumando sus resultados
    if (nodo.subcategorias && nodo.subcategorias.length > 0) {
        for (const sub of nodo.subcategorias) {
            total += contarServicios(sub);
        }
    }

    return total;
}

// Función recursiva para buscar un servicio por nombre en todo el árbol
function buscarServicio(nodo, nombreBuscado) {
    if (nodo.serviciosDirectos && nodo.serviciosDirectos.includes(nombreBuscado)) {
        return { encontrado: true, categoria: nodo.categoria };
    }

    if (nodo.subcategorias && nodo.subcategorias.length > 0) {
        for (const sub of nodo.subcategorias) {
            const resultado = buscarServicio(sub, nombreBuscado);
            if (resultado.encontrado) {
                return resultado;
            }
        }
    }

    return { encontrado: false };
}

// Pruebas directas
console.log('=== CATÁLOGO RECURSIVO PATITAS v1.0 ===');
console.log(`Total de servicios en el catálogo: ${contarServicios(catalogoPatitas)}`);

const busqueda = buscarServicio(catalogoPatitas, "Radiografía de pata");
console.log(`Búsqueda de "Radiografía de pata":`, busqueda);

module.exports = { catalogoPatitas, contarServicios, buscarServicio };