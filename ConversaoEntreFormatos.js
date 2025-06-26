function paresParaObjeto(pares) {
  const obj = {};

  for (const [chave, valor] of pares) {
    obj[chave] = valor;
  }

  return obj;
}

function objetoParaPares(obj) {
  const pares = [];

  for (const chave in obj) {
    if (obj.hasOwnProperty(chave)) {
      pares.push([chave, obj[chave]]);
    }
  }

  return pares;
}


const pares = [["nome", "Ana"], ["idade", 30]];
console.log(paresParaObjeto(pares));

const obj = { nome: "Ana", idade: 30 };
console.log(objetoParaPares(obj));