// SubProceso 1: Calcula el subtotal acumulando el valor de cada item
SubProceso subtotal <- CalcularSubtotal(cant1, prec1, cant2, prec2)
    Definir subtotal Como Real
    subtotal <- (cant1 * prec1) + (cant2 * prec2)
FinSubProceso

// SubProceso 2: Aplica un cupón de descuento si coincide con el código "RIWI10"
SubProceso valorDescuento <- AplicarCupon(subtotal, cupon)
    Definir valorDescuento Como Real
    Si cupon = "RIWI10" Entonces
        valorDescuento <- subtotal * 0.10 // 10% de descuento
    Sino
        valorDescuento <- 0
    FinSi
FinSubProceso

// SubProceso 3: Calcula la propina sugerida (10%) si el cliente la acepta
SubProceso propina <- CalcularPropina(baseLiquidacion, aplicaPropina)
    Definir propina Como Real
    Si aplicaPropina Entonces
        propina <- baseLiquidacion * 0.10 // 10% propina
    Sino
        propina <- 0
    FinSi
FinSubProceso

// SubProceso 4: Calcula el impuesto IVA (19%) sobre el valor neto acumulado
SubProceso impuesto <- CalcularImpuesto(baseLiquidacion)
    Definir impuesto Como Real
    impuesto <- baseLiquidacion * 0.19 // 19% IVA
FinSubProceso

// SubProceso 5: Calcula costo de envío ($8.000, gratis si subtotal > $150.000)
SubProceso costoEnvio <- CalcularEnvio(subtotal)
    Definir costoEnvio Como Real
    Si subtotal > 150000 Entonces
        costoEnvio <- 0
    Sino
        costoEnvio <- 8000
    FinSi
FinSubProceso

// ===================================================================
// ALGORITMO PRINCIPAL: Orquesta los subprocesos en orden claro
// ===================================================================
Algoritmo FacturaRestaurante
    Definir cant1, prec1, cant2, prec2 Como Entero
    Definir cupon Como Cadena
    Definir deseaPropina Como Logico
    
    Definir subtotal, descuento, baseNeto, propina, impuesto, envio, totalFinal Como Real
    
    // Entradas simuladas
    cant1 <- 2; prec1 <- 25000  // Hamburguesa Especial
    cant2 <- 1; prec2 <- 45000  // Combo Familiar
    cupon <- "RIWI10"
    deseaPropina <- Verdadero
    
    // Ejecución paso a paso mediante SubProcesos
    subtotal  <- CalcularSubtotal(cant1, prec1, cant2, prec2)
    descuento <- AplicarCupon(subtotal, cupon)
    baseNeto  <- subtotal - descuento
    
    propina   <- CalcularPropina(baseNeto, deseaPropina)
    impuesto  <- CalcularImpuesto(baseNeto)
    envio     <- CalcularEnvio(subtotal)
    
    totalFinal <- baseNeto + propina + impuesto + envio
    
    // Salida detallada en consola
    Escribir "======== DETALLE DE FACTURA ========"
    Escribir "Subtotal:        $", subtotal
    Escribir "Descuento:      -$", descuento
    Escribir "Base Neto:       $", baseNeto
    Escribir "Propina (10%):   $", propina
    Escribir "Impuesto (19%):  $", impuesto
    Escribir "Envio:           $", envio
    Escribir "------------------------------------"
    Escribir "TOTAL A PAGAR:   $", totalFinal
    Escribir "===================================="
FinAlgoritmo