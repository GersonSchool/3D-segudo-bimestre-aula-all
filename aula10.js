var cont;

function soma(a, b, callback) {
	let result = a + b;
	callback(result);
}

function multiplica(a, b, callback) {
	let result = a * b;
	callback(result);
}

function imprimir2(result) {
	console.log(`O resultado desta operação de multiplicação é: ${result}`);
}

soma(2, 5, function (result) {
	console.log(`O resultado desta operação de soma é: ${result}`);
});

multiplica(3, 5, imprimir2);

cont = 0;
var butao = document.getElementById('bt');
butao.addEventListener('click', function () {
	console.log(`Clicou aqui, ${cont++} vezes`);
});
butao.addEventListener('mouseover', function () {
  butao.style.backgroundColor = 'red';
});
butao.addEventListener('mouseout', function () {
  butao.style.backgroundColor = 'white';
});

setInterval(() => {
	console.log(`chamou o interval ${cont++}`);
}, 3000);

setTimeout(() => {
	console.log(`executou uma unica vez ${cont}`);
}, 5000);

$(document).ready(function (e) {
	setTimeout(() => {
		$.ajax({
			url: 'https://pokeapi.co/api/v2/pokemon-species',
			type: 'GET',
			data: '',
			success: (result) => {
				setTimeout(() => {
					console.log(result);
				}, 2000);
			},
		});
	}, 7000);
});
