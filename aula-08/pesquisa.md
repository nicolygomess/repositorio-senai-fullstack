## Perguntas de Fixação

# 1. O que é uma função em programação?
É um bloco de código que executa uma tarefa específica.

# 2. Principal vantagem de usar funções em vez de repetir código?
Você escreve a lógica uma só vez. Se precisar corrigir um erro ou mudar o comportamento, altera em um único lugar, e todas as chamadas já refletem a mudança automaticamente.

# 3. O que são parâmetros de uma função?
São as "entradas" que a função precisa para trabalhar. Você os declara na definição da função, como espaços reservados para os valores que virão de fora.

# 4. Diferença entre parâmetro e argumento?
Parâmetro é o nome usado na definição da função (function somar (a, b)). Argumento é o valor real passado na chamada (somar(3, 5)) — o 3 e o 5 são os argumentos.

# 5. Para que serve o return?
É uma execução da função e devolve um valor para quem a chamou. Sem ele, a função faz algo mas não entrega nenhum resultado utilizável.

# 6. O que acontece quando uma função não possui return?
Ela executa normalmente, mas retorna undefined automaticamente. Útil para funções que apenas exibem algo no console, mas não serve quando você precisa usar o resultado em outro lugar.

# 7. O que significa modularizar um código?
Dividir o programa em partes menores e independentes (módulos/funções), cada uma responsável por uma única coisa. É o princípio de "dividir para conquistar".

# 8. Por que funções pequenas e bem nomeadas facilitam a manutenção?
Porque você lê calcularDesconto() e já sabe o que aquilo faz, sem precisar ler o código interno. E quando algo quebra, você sabe exatamente onde procurar.

# 9. Por que em TypeScript é útil informar o tipo dos parâmetros e do retorno?
O TypeScript avisa em tempo de desenvolvimento (antes de rodar) se você passou um texto onde era esperado um número, por exemplo. Evita bugs silenciosos e serve como documentação automática da função.

# 10. Qual será o resultado exibido no console?
14. Porque dobro(7) calcula 7 * 2 = 14 e o console.log exibe esse retorno.