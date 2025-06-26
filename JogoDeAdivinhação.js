const prompt = require('prompt-sync')()

let numeroAletorio = Math.floor(Math.random() * 100) + 1

let tentativasTotais = 0

while (true) {
    
    let numeroTentativa = prompt(`Digite um número entre 1 e 100: `)
    tentativasTotais++

    if (numeroTentativa > numeroAletorio) {
        console.log('Escolha um número menor!')
    } else if (numeroTentativa < numeroAletorio){
        console.log('Escolha um número maior!')
    } else {
        console.log('Parabéns! Você acertou o número!')
        console.log(tentativasTotais)
        break
    }
}





