let idade = 16;
let temIngresso = true;
let ehAlunoSENAI = true;
let horaChegada = 19;
let vagasDisponiveis = 5;
let codigoIngresso = "PADRAO";

if (idade < 14) {
    console.log("Entrada negada.");
} else if (!temIngresso) {
    console.log("Precisa comprar ingresso.");
} else if (vagasDisponiveis === 0) {
    console.log("Evento lotado.");
} else if (horaChegada > 20) {
    console.log("Entrada encerrada.");
} else {
    console.log("Entrada liberada.");
}

switch (codigoIngresso) {
    case "VIP":
        console.log("Ingresso VIP");
        break;
    case "PADRAO":
        console.log("Ingresso padrão");
        break;
    case "CONVIDADO":
        console.log("Ingresso convidado");
        break;
    default:
        console.log("Ingresso inválido");
}

if (ehAlunoSENAI && codigoIngresso === "PADRAO") {
    console.log("Benefício SENAI aplicado.");
}