let form = document.querySelector("#form");
form.addEventListener("submit", function(evento){
    evento.preventDefault();
    let pesoKG = document.querySelector("#pesotxt");
    let alturaM = document.querySelector("#alturatxt");
    let p = Number(pesoKG.value);
    let a = Number(alturaM.value/100).toFixed(2);
    let res = document.querySelector(".res");
    let IMC = (p / a ** 2).toFixed(2);
    res.innerHTML = ``; 
    if(p == 0 || a == 0){
        window.alert('[ERRO] Valores inválidos, tente novamente.')
    } else if (IMC < 18.5){
        res.innerHTML += `<p>Seu <strong>IMC é ${IMC}</strong>, logo, você está <strong>abaixo do peso.</strong></p>`
    } else if (IMC >= 18.5 && IMC <= 24.9){
        res.innerHTML += `<p>Seu <strong>IMC é ${IMC}</strong>, logo, você está com o <strong>peso normal (recomendado).</strong></p>`
    } else if (IMC >= 25 && IMC <= 29.9){
        res.innerHTML += `<p>Seu <strong>IMC é ${IMC}</strong>, logo, você está com <strong>sobrepeso.</strong></p>`
    } else if (IMC >= 30 && IMC <= 34.9){
        res.innerHTML += `<p>Seu <strong>IMC é ${IMC}</strong>, logo, você está com <strong>Obesidade grau 1.</strong></p>`
    } else if (IMC >= 35 && IMC <= 39.9){
        res.innerHTML += `<p>Seu <strong>IMC é ${IMC}</strong>, logo, você está com <strong>Obesidade grau 2.</strong></p>`
    } else if (IMC > 40){
        res.innerHTML += `<p>Seu <strong>IMC é ${IMC}</strong>, logo, você está com <strong>Obesidade grau 3.</strong></p>`
    }
})