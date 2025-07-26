let notas =  [];
document.querySelector("#btnArmazenar").addEventListener("click", function(){
    let inNum = document.querySelector("#inNum");
    let nota = Number(inNum.value);

    if(isNaN(nota) || nota < 0 || nota > 10) {
        alert("Digite uma nota válida entre 0 e 10");
        inNum.focus();
        return;
    }
    if (notas.length === 5) {
        alert("Você já digitou 5 notas.");
        return;
    }

    
    notas.push(nota);
    inNum.value = "";
    inNum.focus();

});



document.querySelector("#btnMostrar").addEventListener("click", function(){
    let outMedia = document.querySelector("#outMedia");
    if(notas.length !==5){
        alert("Digite 5 notas antes de calcular a media.");
        return;
    }
    let soma = 0;
    for(let i = 0;i < notas.length; i++){
        soma += notas[i];
    }

    let media = soma / notas.length;
    outMedia.innerHTML = `<strong>Média das notas:</strong> ${media.toFixed(2)}`;

});

