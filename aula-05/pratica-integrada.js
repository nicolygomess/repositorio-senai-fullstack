// lista de alunos (array)

let nomes = ["gabriel", "Andrieli", "Nicoly", "Alexa","João"]
let notas = [6, 9, 6, 2, 8]
let frequencia = [65, 80, 40, 30, 75]


for (let i = 0; i < nomes.length; i++){
    console.log("Nomes: " + nomes[i])
    console.log("Notas: " + notas[i])
    console.log("Frequencia: " + frequencia[i])

    console.log("================================")
}

//Media geral da turma
let somaNotas = 0

for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
}

let media = somaNotas / notas.length
console.log("Média da Turma:", media.toFixed(2));
console.log("================================")

//Media geral de aprovacao da turma
console.log("\n--- Resultado por aluno ---");
for (let i = 0; i < nomes.length; i++) {
    if (notas[i] >= 7 && frequencia[i] >= 75) {
        console.log(nomes[i] + ": APROVADO ");
    } else {
        console.log(nomes[i] + ": REPROVADO ");
    }
}
// opcao para cada caso
let opcao = 3;

switch (opcao) {
    case 1:
        console.log("===== LISTA DE ALUNOS =====");
        for (let i = 0; i < nomes.length; i++) {
            console.log(`${i + 1}. ${nomes[i]}`);
        }
        break;
    case 2:
        console.log("===== MÉDIA GERAL DA TURMA =====");
        console.log("Média: " + media.toFixed(2));
        break;
       
    case 3:
        console.log("===== SITUAÇÃO DOS ALUNOS =====");
        for (let i = 0; i < nomes.length; i++) {
            if (notas[i] >= 7 && frequencia[i] >= 75) {
                console.log(nomes[i] + ": APROVADO");
            } else {
                console.log(nomes[i] + ": REPROVADO");
                
            }
        }
        break;
    case 4:
        console.log("===== RESUMO DA TURMA =====");
        console.log("Total de alunos: " + nomes.length);
        console.log("Média geral: " + media.toFixed(2));
        let aprovados = 0;
        let reprovados = 0;
        
        for (let i = 0; i < nomes.length; i++) {
            if (notas[i] >= 7 && frequencia[i] >= 75) {
                aprovados++;
            } else {
                reprovados++;
            }
        }
        console.log("Aprovados: " + aprovados);
        console.log("Reprovados: " + reprovados);
        break;
    default:
        console.log("Opção inválida!");
}




