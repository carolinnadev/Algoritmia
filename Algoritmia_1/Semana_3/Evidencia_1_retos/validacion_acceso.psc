Algoritmo ValidacionAcceso
    Definir clave, claveCorrecta Como Cadena
    Definir intentos Como Entero
    Definir ingresadoConExito Como Logico
    
    claveCorrecta <- "1234"
    intentos <- 0
    ingresadoConExito <- Falso
    
    Mientras intentos < 3 Y NO ingresadoConExito Hacer
        intentos <- intentos + 1
        Escribir "Intento ", intentos, " - Ingrese la clave:"
        Leer clave
        
        Si clave = claveCorrecta Entonces
            ingresadoConExito <- Verdadero
        Sino
            Escribir "Clave incorrecta."
        FinSi
    FinMientras
    
    Si ingresadoConExito Entonces
        Escribir "Acceso concedido."
    Sino
        Escribir "Acceso bloqueado: supero el limite de intentos."
    FinSi
FinAlgoritmo