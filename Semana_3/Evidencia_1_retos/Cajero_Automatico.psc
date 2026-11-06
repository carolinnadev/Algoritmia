Algoritmo CajeroAutomatico
    Definir monto, totalRetirado, cantidadRetiros Como Real
    totalRetirado <- 0
    cantidadRetiros <- 0
    
    Escribir "Ingrese el monto a retirar (0 para salir):"
    Leer monto
    
    Mientras monto <> 0 Hacer
        totalRetirado <- totalRetirado + monto
        cantidadRetiros <- cantidadRetiros + 1
        Escribir "Ingrese el monto a retirar (0 para salir):"
        Leer monto
    FinMientras
    
    Escribir "Total retirado: $", totalRetirado
    Escribir "Cantidad de retiros: ", cantidadRetiros
FinAlgoritmo

