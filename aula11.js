//1 – Crie uma função que retorna a string “Olá, ” concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação “!” no final.
function questao1(text) {
	return 'Óla ' + text + '!';
}
//2 – Crie uma função que dado dois valores e uma Callback (passados como parâmetros), mostre no console a soma, subtração, multiplicação ou divisão desses valores, dependendo da função Callabck.

function questao2(valor1, valor2, callback) {
  console.log(callback(valor1, valor2));
}

questao2(4, 2, function(val1, val2){
  return val1 > val2 ? true : false;
})
questao2(4, 2, function(val1, val2){
  return val1 + val2;
})
questao2(4, 2, funcaoDeJoseMario(4, 2));

function verificaMaior(val1, val2){
  return val1 > val2 ? true : false;
}
function verificaMenor(val1, val2){
  return val1 < val2 ? true : false;
}

console.log(verificaMaior(4, 2));
console.log(verificaMenor(4, 2));

// 3 – Crie uma função que recebe um valor e uma callback como parâmetro, que retorna uma outra função que recebe um parâmetro e chama essa callback que verifica se um número inteiro passado na primeira função como parâmetro é divisível por um outro numero passado pela função interna e retorne true ou false.

function questao3(valo1, callback){
  return function(valor2) {
    callback(valor1, valor2);
  }
}

var funcInterna = questao3(15, function(val1, val2){
});

funcInterna(3);