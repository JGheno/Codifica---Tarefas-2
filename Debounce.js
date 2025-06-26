function debounce(func, delay) {
  let timeoutId;

  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timeoutId); // Limpa o timer anterior
    timeoutId = setTimeout(function () {
      func.apply(context, args); // Executa a função com o contexto e os argumentos originais
    }, delay);
  };
}


// Função que queremos controlar
function dizerOla(nome) {
  console.log("Olá, " + nome);
}

const debounceOla = debounce(dizerOla, 2000);

debounceOla("jonathan")
debounceOla("jonathan")
debounceOla("jonathan")
