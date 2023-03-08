function fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

//para obter o oitavo número da sequência, você deve passar 7 como argumento, já que os índices começam em zero:
const oitavoNumero = fibonacci(7);
console.log(oitavoNumero); // 13