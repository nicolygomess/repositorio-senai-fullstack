# 07 - Fixação Final

## Perguntas rápidas

### 1. Qual é a diferença entre condição e decisão?
condição é a verificação feita no código para saber se algo é verdadeiro ou falso.
decisão é a ação que o programa toma com base nessa condição.

### 2. Por que a ordem dos else if pode mudar o resultado?
porque o programa executa a primeira condição verdadeira que encontrar.

### 3. Quando é melhor usar switch em vez de else if?
quando existem várias opções fixas para comparar.

### 4. O que acontece se esquecer o break dentro do switch?
o programa continua executando os próximos cases.

### 5. Qual foi o erro mais comum que a dupla encontrou durante a prática? Como corrigiu?
os erros mais comuns foram esquecer chaves, break ou usar operadores errados. corrigimos revisando e testando novamente.

---

## Caça-bugs

### Bug 1

código com erro:

```js
let nota = 9;
if (nota >= 6) {
 console.log("Aprovado");
} else if (nota >= 9) {
 console.log("Excelente");
}
```

erro:
a condição estava na ordem errada, por isso o programa mostrava "Aprovado" antes de verificar se era "Excelente".

código corrigido:

```js
let nota = 9;

if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 6) {
    console.log("Aprovado");
}
```

explicação:
a condição mais específica deve vir primeiro.

---

### Bug 2

código com erro:

```js
let dia = 2;
switch (dia) {
 case 1:
 console.log("Domingo");
 case 2:
 console.log("Segunda");
 default:
 console.log("Inválido");
}
```

erro:
faltava usar o break, então o programa continuava executando os próximos cases.

código corrigido:

```js
let dia = 2;

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    default:
        console.log("Inválido");
}
```

explicação:
o break faz o switch parar no case correto.

---

### Bug 3

código com erro:

```js
let idade = 18;
if (idade = 18) {
 console.log("Tem 18 anos");
}
```

erro:
foi usado o operador errado. Em vez de comparar, o código estava atribuindo valor.

Código corrigido:

```js
let idade = 18;

if (idade === 18) {
    console.log("Tem 18 anos");
}
```

explicação:
= atribui valor.
=== compara valor e tipo.