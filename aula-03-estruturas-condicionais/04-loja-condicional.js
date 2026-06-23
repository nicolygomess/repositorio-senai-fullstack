let valorCompra = 180;
let temCupom = true;
let ehAlunoSENAI = false;
let formaPagamento = "pix";

let valorFinal = valorCompra;
let frete = 20;

if (temCupom || ehAlunoSENAI) {
    valorFinal = valorFinal * 0.90;
}

if (valorFinal >= 200) {
    frete = 0;
}

switch (formaPagamento) {
    case "pix":
        valorFinal = valorFinal * 0.95;
        break;
    case "boleto":
        valorFinal = valorFinal * 0.98;
        break;
    case "credito":
        break;
    default:
        console.log("Forma de pagamento inválida.");
}

let total = valorFinal + frete;

console.log("Valor original:", valorCompra);
console.log("Frete:", frete);
console.log("Total:", total);