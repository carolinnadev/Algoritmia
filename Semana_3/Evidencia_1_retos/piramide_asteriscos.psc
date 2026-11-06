Algoritmo PiramideAsteriscos
    Definir n, i, j Como Entero
    n <- 3
    
    Para i <- 1 Hasta n Con Paso 1 Hacer
        // Imprimir espacios
        Para j <- 1 Hasta (n - i) Con Paso 1 Hacer
            Escribir Sin Saltar " "
        FinPara
        
        // Imprimir asteriscos
        Para j <- 1 Hasta (2 * i - 1) Con Paso 1 Hacer
            Escribir Sin Saltar "*"
        FinPara
        
        Escribir "" // Salto de linea
    FinPara
FinAlgoritmo