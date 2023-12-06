function ready() {
    var sorteio = 0, i;

    for (i = 0; i < 1; i++) {
        if (document.getElementById("btn-pedra").checked == false && document.getElementById("btn-papel").checked == false && document.getElementById("btn-tesoura").checked == false) {
            alert("Selecione uma opção!");
        } else {

            sorteio = Math.floor(Math.random() * 3);
            switch (sorteio) {
                case 0:
                    document.getElementById("computador").src = "Imagens/pc-pedra.png";
                    break;
                case 1:
                    document.getElementById("computador").src = "Imagens/pc-papel.png";
                    break;
                case 2:
                    document.getElementById("computador").src = "Imagens/pc-tesoura.png";
                    break;
            }

            if ((document.getElementById("btn-pedra").checked == true && sorteio == 0) || (document.getElementById("btn-papel").checked == true && sorteio == 1) || (document.getElementById("btn-tesoura").checked == true && sorteio == 2)) {
                document.getElementById("winner").innerHTML = "EMPATE!";
                empatou++;
            } else if ((document.getElementById("btn-pedra").checked == true && sorteio == 2) || (document.getElementById("btn-papel").checked == true && sorteio == 0) || (document.getElementById("btn-tesoura").checked == true && sorteio == 1)) {
                document.getElementById("winner").innerHTML = "VOCÊ VENCEU!";
                pontosUsuario++;
            } else {
                document.getElementById("winner").innerHTML = "VOCÊ PERDEU!";
                pontosComputador++;
            }
        }
    }
    document.querySelector("#pontuacaoUsuario").innerText = pontosUsuario;
    document.querySelector("#pontuacaoComputador").innerText = pontosComputador;
    document.querySelector("#empateJKP").innerText = empatou;
}


function resetar() {
    document.getElementById("computador").src = "Imagens/pc-vazio.png";
    document.getElementById("winner").innerHTML = "Esperando escolha!";
    document.getElementById("pontuacaoUsuario").innerHTML = "0";
    document.getElementById("pontuacaoComputador").innerHTML = "0";
    document.getElementById("empateJKP").innerHTML = "0";
}

function nomeJogador() {
    document.getElementById("jogadorName").innerHTML = x;
    document.getElementById("jogadorNameScore").innerHTML = x;
}

