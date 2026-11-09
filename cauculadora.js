
let valorConsumo = parseFloat(prompt("Digite o valor total da conta (ex: 120.00):"));
let porcentagemGorjeta = parseFloat(prompt("Digite a porcentagem da gorjeta (ex: 10, 15 ou 20):"));
let numPessoas = parseInt(prompt("Em quantas pessoas a conta será dividida?"));

let valorGorjeta = valorConsumo * (porcentagemGorjeta / 100);
let valorTotal = valorConsumo + valorGorjeta;
let valorPorPessoa = valorTotal / numPessoas;


alert(
    `--- Resumo da Conta ---\n` +
    `Consumo: R$ ${valorConsumo.toFixed(2)}\n` +
    `Gorjeta: R$ ${valorGorjeta.toFixed(2)}\n` +
    `Total com Gorjeta: R$ ${valorTotal.toFixed(2)}\n` +
    `Divisão por pessoa (${numPessoas} pessoas): R$ ${valorPorPessoa.toFixed(2)}`
);