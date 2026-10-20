function dividir (y,a){
    return y/(2*a)
}

function bhaskara (a,b,c,callbackDividir){
    const x = b * (-1) + Math.sqrt(b**2 - 4*a*c)
    return callbackDividir(x,a)
}

function bhaskara2 (a,b,c,callbackDividir){
    const x = b * (-1) - Math.sqrt(b**2 - 4*a*c)
    return callbackDividir(x,a)
} 

console.log(`${bhaskara(1,5,6, dividir)} ${bhaskara2(1,5,6, dividir)}`)