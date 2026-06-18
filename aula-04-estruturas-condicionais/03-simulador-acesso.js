let idade = 17;
let temCadastro = true;
let temResponsavel = true;
let bloqueado = false;

if (bloqueado) {
    console.log("Acesso negado: usuário bloqueado.");
} else if (idade >= 18 && temCadastro) {
    console.log("Acesso liberado.");
} else if (idade < 18 && temCadastro && temResponsavel) {
    console.log("Acesso liberado com responsável.");
} else if (!temCadastro) {
    console.log("Acesso negado: cadastro necessário.");
} else { 
    console.log("Acesso negado."); 
}
