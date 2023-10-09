const form = document.querySelector('form');
const inputTxt = document.getElementById('campo-cpf');
const result = document.querySelector('.message');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let cpf = inputTxt.value;
    let cpfLimpo = cpf.replace(/\D+/g, '');
    let cpfArrayCompleto = Array.from(cpfLimpo);
    let cpfIncompleto = [...cpfArrayCompleto];
    cpfIncompleto.splice(9, 2);
    let acumulador = 0;
    let contador = 10;
    for (let numeros of cpfIncompleto) {
        acumulador += contador * numeros;
        contador--;
    }
    let primeiroDigito = 11 - (acumulador % 11);
    if (primeiroDigito > 9) primeiroDigito = 0;
    cpfIncompleto.push(primeiroDigito);
    acumulador = 0;
    contador = 11;
    for (let numeros of cpfIncompleto) {
        acumulador += contador * numeros;
        contador--;
    }

    let segundoDigito = 11 - (acumulador % 11);
    if (segundoDigito > 9) segundoDigito = 0;
    cpfIncompleto.push(segundoDigito);

    let cpfResultado = cpfIncompleto.map(Number);
    cpfResultado = Number(cpfResultado.join(''));
    console.log(cpfResultado);
    cpfLimpo = parseInt(cpfLimpo);
    console.log(cpfLimpo);
    if (cpfResultado === cpfLimpo) {
        result.style.setProperty('opacity',1);
        result.style.setProperty('color','lightgreen');
        result.textContent = "CPF VÁLIDO";
    } else{
        result.style.setProperty('opacity',1);
        result.style.setProperty('color','red');
        result.textContent = "CPF INVÁLIDO";
    }
});

