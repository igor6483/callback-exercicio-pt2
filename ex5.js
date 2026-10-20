function processarTexto(texto, callbackModificadora){
    const final = callbackModificadora(texto)
    return final
}

console.log(processarTexto("senai valinhos",(t) => {return(t.toUpperCase())}))