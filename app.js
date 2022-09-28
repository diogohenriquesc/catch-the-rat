const rat = document.getElementById('rat');
const btnControl = document.getElementsByClassName('btn-control')[0];
const catchScore = document.getElementsByClassName('catch')[0];
const missScore = document.getElementsByClassName('miss')[0];
let btnOnStart = true;
let id;
let catchCount = 0;
let missCount = -1;

btnControl.addEventListener('click', click);
rat.addEventListener('click', gotCatch);
document.body.addEventListener('click', bodyClick);

function click() {
	if (btnOnStart) {
		start();
		btnControl.innerHTML = 'PAUSE';
		btnOnStart = false;
	} else {
		pause();
		btnControl.innerHTML = 'START';
		btnOnStart = true;
	}
}

function start() {
	id = setInterval(run, 600);
}

function pause() {
	clearInterval(id);
}

function run() {
	rat.style.top = randomPos();
	rat.style.right = randomPos();
}

function gotCatch() {
	if (!btnOnStart) {
		catchCount++;
		catchScore.innerHTML = `${catchCount}`;
		document.body.classList.add('catched');
		pause();

		setTimeout(function () {
			document.body.classList.remove('catched');
			start();
		}, 800);
	}
}

function bodyClick() {
	if (!btnOnStart) {
		missCount++;
		missScore.innerHTML = `${missCount}`;
	}
}

const randomPos = () => Math.floor(Math.random() * 90) + '%';
