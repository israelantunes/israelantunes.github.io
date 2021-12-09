document.querySelector('#iniciar').addEventListener('click', adivinhacao);

let arrCores: Array <string> = [
    'Red','Blue','Green','Yellow','Magenta','Cyan','Grey','Black','Brown','White','Violet','Indigo'
];


function adivinhacao(): void {
	let coresAleatorias: number;
	let vetorCores: Array <string> = [];

	for (let i = 0; i < 6; i++) {
		coresAleatorias = Math.floor((Math.random() * arrCores.length) + 1);
		vetorCores.push(arrCores[coresAleatorias]);
	}

	vetorCores.sort();

	coresAleatorias = Math.floor((Math.random() * (vetorCores.length)) + 1);
	let Sorteada: string = vetorCores[coresAleatorias]

	let chances: number = 5;
	let inputUser: string;
	// console.log(corSorteada);

	while (chances > 0) {
		inputUser = prompt(`Eu escolhi apenas uma dessas cores: ${vetorCores.join(", ")} \n\nVocê tem ${chances} chances de adivinhar a cor! \nDigite uma:`);

		if (inputUser == Sorteada) {
			alert("Você acertou, parabéns!")
			document.body.style.background = Sorteada;
			chances = 0;
		} else if (inputUser == "") {
			alert("O campo está em branco.\nPreencha o campo e tente novamente!");
		} else {
			if (inputUser > Sorteada) {
				alert("Você errou!\n\nSua cor é alfabeticamente maior que a minha.");
			} else if (inputUser < Sorteada) {
				alert("Você errou!\n\nSua cor é alfabeticamente menor que a minha.");
			}
			chances--;
		}
	}
	
}
