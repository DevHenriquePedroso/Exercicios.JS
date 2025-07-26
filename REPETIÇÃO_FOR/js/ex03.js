function Montar(){
    let inNum = document.querySelector("#inNum");
    let outTabuada = document.querySelector("#outTabuada");
    let num = Number(inNum.value);

    if(num <= 0 || isNaN(num)){
        alert("Insira um número positivo!!");
        inNum.focus();
        return;
    }

    outTabuada.innerHTML = "";

    for(let i = 1;i <= 10; i++){
        outTabuada.innerHTML += `${num} x ${i} = ${num * i}<br>`
    }

}

let botao = document.querySelector("#btn");
botao.addEventListener("click", Montar);