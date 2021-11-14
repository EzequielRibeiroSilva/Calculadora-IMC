function verRes() {
    let p = document.querySelector('.caixaUm');
    let a = document.querySelector('.caixaDois');
    let peso = Number(p.value);
    let altura = Number(a.value);
    let res = document.querySelector('.res');
    let res2 = document.querySelector('.res2');
    let res3 = document.querySelector('.res3');

    if (!peso) {  // Verifica se o valor de peso é um Number
        res.innerHTML = 'Medida irregular'
        res2.innerHTML = 'Peso ou altura inválida';
        return;
    }
    if (!altura) { // Verifica se o valor de altura é um Number
        res.innerHTML = 'Medida irregular'
        res2.innerHTML = 'Peso ou altura inválida';
        return;
    }

    let imc = peso / altura ** 2; // Faz o cálculo do imc
    imc.toFixed(2);

    console.log(imc.toFixed(2));
    
    if (imc <= 16.9) {
        res.innerHTML = 'Muito abaixo do peso';
        res2.innerHTML = '16 a 16,9 kg/m2';
        res3.innerHTML = 'Você pode ter problemas como: Queda de cabelo, infertilidade, ausência menstrual';
    } else if (imc <= 18.4) {
        res.innerHTML = 'Abaixo do peso';
        res2.innerHTML = '17 a 18,4 kg/m2';
        res3.innerHTML = 'Você pode ter problemas como: Fadiga, stress, ansiedade';
    } else if (imc <= 24.9) {
        res.innerHTML = 'Peso normal';
        res2.innerHTML = '18,5 a 24,9 kg/m2';
        res3.innerHTML = 'Menor risco de doenças cardíacas e vasculares';
    } else if (imc <= 29.9) {
        res.innerHTML = 'Acima do peso';
        res2.innerHTML = '25 a 29,9 kg/m2';
        res3.innerHTML = 'Você pode ter problemas como: Fadiga, má circulação, varizes';
    } else if (imc <= 34.9) {
        res.innerHTML = 'Obesidade Grau I';
        res2.innerHTML = '30 a 34,9 kg/m2';
        res3.innerHTML = 'Você pode ter problemas como: Diabetes, angina, infarto, aterosclerose';
    } else if (imc <= 40) {
        res.innerHTML = 'Obesidade Grau II';
        res2.innerHTML = '35 a 40 kg/m2';
        res3.innerHTML = 'Você pode ter problemas como: Apneia do sono, falta de ar';
    } else if (imc > 40) {
         res.innerHTML = 'Obesidade Grau III';
         res2.innerHTML = 'Maior que 40kg/m2';
         res3.innerHTML = 'Você pode ter problemas como: Refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC';
    } 

}

let btn = document.querySelector('#refresh');
btn.addEventListener('click', function() {
    location.reload();
})


