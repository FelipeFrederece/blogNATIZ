//PARTE DO INPUT//
const btn1 = document.querySelector("#enviar1");
var aventurasArray=[]

btn1.addEventListener("click", function (e) {

	e.preventDefault();

	var nome = document.querySelector("#nome").value;
	var descricao = document.querySelector("#descricao").value;  

	class Aventura {
		constructor(nome, descricao) {
			this.nome = nome;
			this.descricao = descricao;
		}
	}
	

	const aventura = new Aventura(nome, descricao); //criacao do objeto

	aventurasArray.push(aventura); //adicionando o objeto dentro do array

	console.log(aventura.nome);			//somente para teste (print do nome)
	console.log(aventura.descricao);	//somente para teste (print do texto)

	console.log(aventurasArray[0])			//somente para teste (print do array(com todas as aventuras adicionadas))
	document.getElementById('enviar1').value ='Aventura cadastrada, obrigado!';
	setTimeout(function(){
		document.getElementById('enviar1').value = 'enviar';
   },3000);
   document.getElementById('nome').value='';
   document.getElementById('descricao').value='';
})
//funçao que serve para resgatar os dados do input, criar um objeto com cada um (nome e descricao) e colocar dentro de um array


const btn2 = document.querySelector("#enviar2");
btn2.addEventListener("click", function (e) {
	e.preventDefault();

	document.getElementById('resultado').classList.remove("esconder");

	document.getElementById('exibirNome').innerHTML = aventurasArray[0].nome;
	document.getElementById('exibirDescricao').innerHTML = aventurasArray[0].descricao;
})
//para exibir o primeiro nome

const btn3 = document.querySelector("#enviar3");
btn3.addEventListener("click", function (e) {
	e.preventDefault();
	document.getElementById('resultado').classList.remove("esconder");

	document.getElementById('exibirNome').innerHTML = aventurasArray[aventurasArray.length - 1].nome;
	document.getElementById('exibirDescricao').innerHTML = aventurasArray[aventurasArray.length - 1].descricao;
})
//para exibir o ultimo nome


//PARTE DA ANIMACAO//
const debounce = function (func, wait, immediate) {
	let timeout;
	return function (...args) {
		const context = this;
		const later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
//funcao para ficar verificando onde está o scroll da pagina

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
	const windowTop = window.pageYOffset + ((window.innerHeight * 1.01) - (window.innerHeight));
	target.forEach(function (element) {
		if ((windowTop) > element.offsetTop) {
			element.classList.add(animationClass);
		} else {
			element.classList.remove(animationClass);
		}
	})
}
//funcao para calcular a parte certa do scroll onde a animação sera ativada

animeScroll();

if (target.length) {
	window.addEventListener('scroll', debounce(function () {
		animeScroll();
	}, 20));
}
//if para ativar a animação




