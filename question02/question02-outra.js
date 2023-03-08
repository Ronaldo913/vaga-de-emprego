const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function calcularFibonacci(numero) {
    const numeroInteiro = parseInt(numero);
  
    if (isNaN(numeroInteiro)) {
      console.log('Valor inválido, tente novamente.');
      return;
    }
  
    let numeroAnterior = 0;
    let numeroAtual = 1;
    let resultado = numeroAnterior + numeroAtual;
  
    while (resultado < numeroInteiro) {
      numeroAnterior = numeroAtual;
      numeroAtual = resultado;
      resultado = numeroAnterior + numeroAtual;
    }
  
    if (resultado === numeroInteiro || numeroInteiro === 0 || numeroInteiro === 1) {
      console.log(`${numeroInteiro} pertence à sequência de Fibonacci.`);
    } else {
      console.log(`${numeroInteiro} não pertence à sequência de Fibonacci.`);
    }
  }
  
  function continuar() {
    readline.question('Deseja verificar outro número (S/N)? ', (resposta) => {
      if (resposta.toLowerCase() === 's') {
        obterNumero();
      } else {
        readline.close();
      }
    });
  }
  
  function obterNumero() {
    readline.question('Digite um número para verificar se pertence à sequência de Fibonacci: ', (numero) => {
      calcularFibonacci(numero);
      continuar();
    });
  }
  
  obterNumero();
  