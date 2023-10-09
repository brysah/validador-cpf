let cpf = "705.484.450-52";
let cpfLimpo = cpf.replace(/\D+/g, '');
let cpfArrayCompleto = Array.from(cpfLimpo);
let cpfIncompleto = [...cpfArrayCompleto];
cpfIncompleto.splice(9,2);
// console.log(cpfIncompleto);
let acumulador = 0;
let contador = 10;
for( let numeros of cpfIncompleto){
    acumulador += contador * numeros;
    contador--;
}
console.log(acumulador);
let primeiroDigito = 11 - (acumulador % 11);
if(primeiroDigito > 9) primeiroDigito = 0;
console.log(primeiroDigito);