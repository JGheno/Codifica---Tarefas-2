const vendas = [
  { cliente: "Ana", total: 100 },
  { cliente: "João", total: 200 },
  { cliente: "Ana", total: 150 },
  { cliente: "Maria", total: 300 }
];

function agruparPorCliente(vendas) {
  const resultado = {};

  for (const venda of vendas) {
    if (!resultado[venda.cliente]) {
      resultado[venda.cliente] = 0;
    }
    resultado[venda.cliente] += venda.total;
  }

  return resultado;
}

console.log(agruparPorCliente(vendas));