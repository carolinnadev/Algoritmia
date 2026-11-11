Algoritmo BuscarMayor
    Dimension datos[5]
    datos[1] <- 4
    datos[2] <- 9
    datos[3] <- 2
    datos[4] <- 9
    datos[5] <- 7
    
    Definir mayor, i Como Entero
    mayor <- datos[1]
    
    Para i <- 1 Hasta 5 Con Paso 1 Hacer
        Si datos[i] > mayor Entonces
            mayor <- datos[i]
        FinSi
    FinPara
    
    Escribir "El numero mayor es: ", mayor
FinAlgoritmo