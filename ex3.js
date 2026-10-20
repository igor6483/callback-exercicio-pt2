function calcularDobro(numero, callback){
    const dobro = numero * 2
    callback(dobro)
}

function imprimirFormatado(valor){
    console.log("[RESULTADO]: O valor calculado é " + valor)
}

calcularDobro(25,imprimirFormatado);