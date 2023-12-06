function ready() {
    var sorteio = 0;

    if (document.getElementById("btn-pedra").checked == false && document.getElementById("btn-papel").checked == false && document.getElementById("btn-tesoura").checked == false) {
        alert("Selecione uma opção!");
    } else {
        //logica principal
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
        //verificando se deu empate e vencedor.
        if ((document.getElementById("btn-pedra").checked == true && sorteio == 0) || (document.getElementById("btn-papel").checked == true && sorteio == 1) || (document.getElementById("btn-tesoura").checked == true && sorteio == 2)) {
            document.getElementById("winner").innerHTML = "EMPATE!";
        } else if ((document.getElementById("btn-pedra").checked == true && sorteio == 2) || (document.getElementById("btn-papel").checked == true && sorteio == 0) || (document.getElementById("btn-tesoura").checked == true && sorteio == 1)) {
            document.getElementById("winner").innerHTML = "VOCÊ VENCEU!";
        } else {
            document.getElementById("winner").innerHTML = "VOCÊ PERDEU!";
        }
    }
}

function resetar() {
    document.getElementById("computador").src = "Imagens/pc-vazio.png";
    document.getElementById("winner").innerHTML = "";
}
