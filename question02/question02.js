function verificaFibonacci(num) {
  let a = 0;
  let b = 1;
  let temp;

  while (b < num) {
    temp = b;
    b = a + b;
    a = temp;
  }

  if (b === num) {
    return num + ' pertence à sequência de Fibonacci.';
  } else {
    return num + ' não pertence à sequência de Fibonacci.';
  }
}

console.log(verificaFibonacci(8)); // Saída: 8 pertence à sequência de Fibonacci.
console.log(verificaFibonacci(10)); // Saída: 10 não pertence à sequência de Fibonacci.
