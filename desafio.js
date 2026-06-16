let nome = "ROLHAYHNHE";
let peso = 60;
let altura = 1.65;

let imc = peso / (altura * altura);

let classificacao;

if (imc < 18.5) {
    classificacao = "Abaixo do peso";
} else if (imc < 25) {
    classificacao = "Peso normal";
} else if (imc < 30) {
    classificacao = "Sobrepeso";
} else {
    classificacao = "Obesidade";
}

console.log("Nome: " + nome);
console.log("IMC: " + imc.toFixed(2));
console.log("Classificação: " + classificacao);