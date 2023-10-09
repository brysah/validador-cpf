let cpf = "705.484.450-52";
let cpfLimpo = cpf.replace(/\D+/g, '');
let cpfArrayCompleto = Array.from(cpfLimpo);
let cpfIncompleto = [...cpfArrayCompleto];
cpfIncompleto.splice(9,2);
// console.log(cpfIncompleto);