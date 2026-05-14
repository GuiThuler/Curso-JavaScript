// EXEMPLO CONTA 1.75 x 1.75 = 3,06 - 70 / 3,06 = imc = 22,87
function calculoGeral() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function somarImc(evento) {
        evento.preventDefault();

        const peso = form.querySelector('.test-1');
        const altura = form.querySelector('.test-2');

        if (peso.value == '' || peso.value < 0 || peso.value > 300) {
            return resultado.innerHTML = ('Peso invalido!');
        } else if (altura.value == '' || altura.value > 3 || altura.value < 1) {
            return resultado.innerHTML = ('Altura invalida!');
        } else {
            const res = altura.value * altura.value;
            const imc = peso.value / res;
            console.log(peso.value, altura.value);
            console.log(imc);

            if (imc < 18.5) {
                return resultado.innerHTML = (`<p>Seu IMC é de ${imc.toFixed(2)}, sendo assim, voce esta Magreza 0</p>`);
            } else if (imc >= 18.5 && imc <= 24.9) {
                return resultado.innerHTML = (`<p>Seu IMC é de ${imc.toFixed(2)}, sendo assim, voce esta Normal 0</p>`);
            } else if (imc >= 25 && imc <= 29.9) {
                return resultado.innerHTML = (`<p>Seu IMC é de ${imc.toFixed(2)}, sendo assim, voce esta Sobrepeso 1</p>`);
            } else if (imc >= 30.0 && imc <= 39.9) {
                return resultado.innerHTML = (`<p>Seu IMC é de ${imc.toFixed(2)}, sendo assim, voce esta Obesidade 2</p>`);
            } else if (imc >= 40.0) {
                return resultado.innerHTML = (`<p>Seu IMC é de ${imc.toFixed(2)}, sendo assim, voce esta Obesidade Grave 3</p>`);
            } else {
                alert('TENTE NOVAMENTE!');
            }
        }
    }
    form.addEventListener('submit', somarImc);
}
calculoGeral();
