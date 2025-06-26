function memoize(fn) {
  const cache = {};

  return function (...args) {
    const chave = JSON.stringify(args);

    if (cache[chave]) {
      return cache[chave];
    }

    const resultado = fn.apply(this, args);
    cache[chave] = resultado;

    return resultado;
  };
}

function mult(a, b) {
  console.log(`calculando ${a} * ${b}`);
  return a * b;
}

const memoMult = memoize(mult);

console.log(memoMult(2, 3));
console.log(memoMult(2, 3)); 
console.log(memoMult(3, 3)); 