function somar(){
    let inNum = document.querySelector("#inNum");
    let outResultado = document.querySelector("#outResultado");

    let num = Number(inNum.value);
    if(num <= 0 || isNaN(num)){
        alert("Insira um número válido");
        inNum.focus();
        return;
    }

    let calculo = 0;

    for(let i = 1;i <= num; i++){
        calculo += i ;
    }

    outResultado.innerHTML = `Somas dos Números de 1 a ${num} é ${calculo}`;
}

let botao = document.querySelector("#btn");
botao.addEventListener("click", somar);