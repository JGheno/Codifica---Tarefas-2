const prompt = require('prompt-sync')()

let frase = prompt('Digite uma frase: ')
const palavras = frase.split(" "); // separa a string em palavras
const palavrasUnicas = []

for (let i = 0; i < palavras.length; i++) {
  const palavra = palavras[i]
  
  // verifica se a palavra já está no array de palavras únicas
  if (palavrasUnicas.indexOf(palavra) === -1) {
    palavrasUnicas.push(palavra)
  }
}

console.log(palavrasUnicas)

