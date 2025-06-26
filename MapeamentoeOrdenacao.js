const produtos = [
  { nome: "Teclado", preco: 150 },
  { nome: "Monitor", preco: 1200 },
  { nome: "Mouse", preco: 80 },
  { nome: "Notebook", preco: 3500 }
];

function nomesOrdenadosPorPreco(produtos) {
  const produtosOrdenados = produtos.slice().sort(function (a, b) {
    return a.preco - b.preco;
  });

  const nomes = produtosOrdenados.map(function (produto) {
    return produto.nome;
  });

  return nomes;
}

console.log(nomesOrdenadosPorPreco(produtos));
