function primeirosNumerosQuadrados() {
    const numerosQuadrados = [];

    for (let i = 0; i < 8; i++) {
        numerosQuadrados.push(i * i);
    }

    return numerosQuadrados;
}

const numeros = primeirosNumerosQuadrados();
console.log(numeros); // [0, 1, 4, 9, 16, 25, 36, 49]