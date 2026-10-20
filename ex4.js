function operar(a, b, operacaoCallback){
    return operacaoCallback(a,b);
}

function somar(a,b){
    const soma = (a+b)
    return soma
}

function multiplicar(a,b){
    const produto = (a*b)
    return produto
}

console.log(operar(10, 4, somar))
console.log(operar(10, 4, multiplicar))
