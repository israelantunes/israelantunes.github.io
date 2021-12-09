document.querySelector('#iniciar').addEventListener('click', adivinhacao);
var arrCores = [
    'Red','Blue','Green','Yellow','Magenta','Cyan','Grey','Black','Brown','White','Violet','Indigo'
];
function adivinhacao() {
    var coresAleatorias;
    var vetorCores = [];
    for (var i = 0; i < 6; i++) {
        coresAleatorias = Math.floor((Math.random() * arrCores.length) + 1);
        vetorCores.push(arrCores[coresAleatorias]);
    }
    vetorCores.sort();
    coresAleatorias = Math.floor((Math.random() * (vetorCores.length)) + 1);
    var sorteada = vetorCores[coresAleatorias];
    var chances = 5;
    var inputUser;

    while (chances > 0) {
        inputUser = prompt("Eu escolhi apenas uma dessas cores: ".concat(vetorCores.join(", "), " \n\nVoc\u00EA tem ").concat(chances, " chances de adivinhar a cor! \nDigite uma:"));
        if (inputUser == sorteada) {
            alert("Você acertou, parabéns!");
            document.body.style.background = sorteada;
            chances = 0;
        }
        else if (inputUser == "") {
            alert("O campo está em branco.\nPreencha o campo e tente novamente!");
        }
        else {
            if (inputUser > sorteada) {
                alert("Você errou!\n\nSua cor é alfabeticamente maior que a minha.");
            }
            else if (inputUser < sorteada) {
                alert("Você errou!\n\nSua cor é alfabeticamente menor que a minha.");
            }
            chances--;
        }
    }
}
