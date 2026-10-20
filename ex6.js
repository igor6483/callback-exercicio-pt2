function simularDownload(nomeArquivo, callbackConclusao){
    console.log(`Iniciando download de ${nomeArquivo}...`)
    setTimeout(() => {
        return callbackConclusao();
    }, 1500);
}

function downloadTexto (){
    console.log(`✅ Download do finalizado com sucesso no disco!`)
}

simularDownload("dados_clientes.csv" ,downloadTexto)