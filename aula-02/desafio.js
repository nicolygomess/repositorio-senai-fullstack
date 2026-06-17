let nome = "Andrieli";

let nota1 = 8;
let nota2 = 7;

let frequencia = 80;
let atividadesEntregues = true;
let estaBloqueado = false;

let media = (nota1 + nota2) / 2;

let situacao;

if (estaBloqueado) {
    situacao = "Reprovado";
}
else if (media >= 9 && frequencia >= 60) {
    situacao = "Aprovado por destaque";
}
else if (media >= 6 && frequencia >= 75 && atividadesEntregues) {
    situacao = "Aprovado";
}
else {
    situacao = "Reprovado";
}

console.log("Aluno:", nome);
console.log("Média:", media);
console.log("Situação:", situacao);