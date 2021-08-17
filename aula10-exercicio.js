// Função recebe como parâmetro um valor numérico x
// e retorna o seu quadrado.
function retornaQuadrado(base){
  return base ** 2;
}

// Função recebe como parâmetro dois valores numéricos X e Y, respectivamente
// e retorna o resto da divisão realizada.
function retornaResto(dividendo, divisor){
  return dividendo % divisor;
}

let valor1 = 5, valor2 = 4;
function retornaValor(a, b) {
  console.log(a(valor1) - b(valor1, valor2));
}


retornaValor(retornaQuadrado, retornaResto);