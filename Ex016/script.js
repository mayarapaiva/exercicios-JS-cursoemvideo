function contar(){
    let inicio = document.getElementById('txti') 
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res') // algo nesse comando está ERRADOOOOOO RRRRR

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        window.alert(" [ERRO] Faltam dados!! ")
        
    } else{
        res.innerHTML = "Contando... <br>"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            window.alert("Passo Inválido! Considerando PASSO = 1")
            p = 1
        }

            // contagem crecente
        if(i < f){
            for(let c = i; c <= f; c+=p){
                res.innerHTML += ` ${c} \u{1F9E1} ` 
        }
    } else{

        // contagem regressiva
        for(let c = i; c >= f; c-=p)
            res.innerHTML += ` ${c} \u{1F9E1} `
        }   
        
    }
    res.innerHTML += ` \u{1F3C1}  `
        

} 