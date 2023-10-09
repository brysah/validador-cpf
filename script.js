let cpf = "705.484.450-52";
let cpfLimpo = cpf.replace(/\D+/g, '');
let cpfArrayCompleto = Array.from(cpfLimpo);
let cpfIncompleto = [...cpfArrayCompleto];
cpfIncompleto.splice(9,2);
//  console.log(cpfIncompleto);
//  console.log(cpfArrayCompleto);
let acumulador = 0;
let contador = 10;
for( let numeros of cpfIncompleto){
    acumulador += contador * numeros;
    contador--;
}
console.log(acumulador);
let primeiroDigito = 11 - (acumulador % 11);
if(primeiroDigito > 9) primeiroDigito = 0;
cpfIncompleto.push(primeiroDigito);
// console.log(cpfIncompleto);
  acumulador = 0;
  contador = 11;
for( let numeros of cpfIncompleto){
    acumulador += contador * numeros;
    contador--;
}

console.log(acumulador);

let segundoDigito = 11 - (acumulador % 11);
if(segundoDigito > 9) segundoDigito = 0;
console.log(segundoDigito);
cpfIncompleto.push(segundoDigito);