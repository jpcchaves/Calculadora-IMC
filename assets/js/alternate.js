// Capturar evento de submit do formulário
const form = document.querySelector('#form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    const inputPeso = document.querySelector('#pesotxt');
    const inputAltura = document.querySelector('#alturatxt');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value/100);

    if(!peso){ //se o peso não for false
        setResultado('Peso Inválido', false);
        return;
    }

    if(!altura){
        setResultado('Altura Inválida', false);
        return;
    }

    const imc = getIMC(peso, altura);
    console.log(imc);
    const nivelIMC = getNivelIMC(imc);
    
    const msg = `Seu IMC é ${imc} (${nivelIMC})`

    setResultado(msg, true);
});

function getNivelIMC(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidae grau 1', 'Obesidae grau 2', 'Obesidae grau 3'];

    if(imc >= 39.9){
        return nivel[5]
    }
    if (imc >= 34.9){
        return nivel[4]
    }
    if (imc >= 29.9){
        return nivel[3]
    }
    if (imc >= 24.9){
        return nivel[2]
    }
    if (imc >= 18.9){
        return nivel[1]
    }
    if (imc < 18.5){
        return nivel[0]
    }
}

function getIMC(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP(){ // função que cria P dentro da div#res
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#res');
    resultado.innerHTML = '';
    const p = criaP();
    

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
} 