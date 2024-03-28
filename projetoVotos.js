var contador1 = 0,contador2 = 0, contador3 = 0, contador4 = 0, contador5 = 0, contador6 = 0;
let escolha
do {
    escolha = Number(prompt("Entre com seu voto: \n1 - Zé do Bar\n2 - Maria do bairro\n3 - Tonho\n4 - Fernanda de la paz\n5- Nulo\n6-Branco"))

    switch (escolha) {
        case 1:
            alert(`Seu voto foi confirmado para: Zé do Bar`);
            contador1++
        break;
        case 2:
            alert(`Seu voto foi confirmado para: Maria do bairro`);
            contador2++
        break;
        case 3:
            alert(`Seu voto foi confirmado para: Tonho`);
            contador3++
        break;
        case 4:
            alert(`Seu voto foi confirmado para: Fernanda de la paz`);
            contador4++
        break;
        case 5:
            alert(`Seu voto foi confirmado para: Nulo`);
            contador5++
        break;
        case 6:           
            alert(`Seu voto foi confirmado para: Branco`);
            contador6++
        break;
    }

    

    console.log (`Zé do Bar encerrou com ${contador1} votos\nMaria do Bairro encerrou com ${contador2} votos\nTonho encerrou com ${contador3} votos\nA porcentagem de votos nulos é de: ${}%\nA porcentagem de votos brancos é de: ${}%`)
    var resposta = Number(prompt("Deseja continuar votando?\n1 - Sim\n2 - Não"));
} while (resposta !== 2);