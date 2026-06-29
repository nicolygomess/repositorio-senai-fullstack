function calcularDesconto(preco: number, percentual: number): number {
  const desconto = preco * (percentual / 100);
  return preco - desconto;
}

console.log(calcularDesconto(100, 10)); // 90
console.log(calcularDesconto(250, 20)); // 200
console.log(calcularDesconto(80, 25));  // 60

