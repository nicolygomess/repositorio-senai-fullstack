let prioridade = 2;
let sistemaForaDoAr = false;
let tempoEsperaMin = 35;
let categoria = "internet";

if (sistemaForaDoAr || prioridade === 3) {
    console.log("CRÍTICO");
} else if (tempoEsperaMin > 30 && prioridade === 2) {
    console.log("ALTO");
} else if (prioridade === 1) {
    console.log("NORMAL");
} else {
    console.log("EM ANÁLISE");
}

switch (categoria) {
    case "login":
        console.log("Redefinir senha e validar usuário");
        break;
    case "internet":
        console.log("Verificar cabo, Wi-Fi e roteador");
        break;
    case "computador":
        console.log("Reiniciar máquina e verificar atualizações");
        break;
    case "outro":
        console.log("Coletar mais informações");
        break;
    default:
        console.log("Categoria inválida");
}