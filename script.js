let cpf = "471.967.630-84";
let cpfLimpo = cpf.replace(/\D+/g, '');
let cpfArray = Array.from(cpfLimpo);
console.log(cpfArray);