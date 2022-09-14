const rato = document.getElementById('rato');
const body = document.body;
const errou = document.getElementsByClassName('errou')[0];
const pegou = document.getElementsByClassName('pegou')[0];

let isMoving = true;
let cont = 0;
let erro = 0;

rato.addEventListener('click', foiPego);
window.addEventListener('load', correr);
body.addEventListener('click', naoPegou);

function correr() {
	if (isMoving) {
		rato.style.top = randomNumber();
		rato.style.right = randomNumber();
		setTimeout(correr, 600);
	}
}

function randomNumber() {
	return Math.floor(Math.random() * 88) + '%';
}

function foiPego() {
	isMoving = false;
	cont++;
	pegou.innerHTML = cont;
	setTimeout(function () {
		isMoving = true;
		correr();
	}, 1500);
}

function naoPegou() {
	erro++;
	errou.innerHTML = erro;
}
