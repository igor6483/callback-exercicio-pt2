function saudacao() {
    return ("Olá! Bem-vindo ao Back-End com Node.js!")
}

function executar(callback){
    console.log("Iniciando processo...")
    return callback()
}

console.log(executar(saudacao))