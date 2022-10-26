//PARTE DO INPUT//
const btn = document.querySelector("#enviar");
var aventurasArray=[]

btn.addEventListener("click", function (e) {

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

	console.log(aventurasArray)			//somente para teste (print do array(com todas as aventuras adicionadas))

})

//funçao serve para resgatar os dados do input, criar um objeto com cada um (nome e descricao) e colocar dentro de um array



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