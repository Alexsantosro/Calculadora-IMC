const calcular = document.getElementById('calcular');


function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;

    if (nome == '' || altura == '' || peso == '') {
        alert('Preencha todos os dados');
    } else {
        const resultado = document.getElementById('resultado');
        const calcimc = (peso / (altura * altura));
        resultado.textContent = calcimc;
    }
}

calcular.addEventListener('click', imc);