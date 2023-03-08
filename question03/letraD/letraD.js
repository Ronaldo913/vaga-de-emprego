function primeirosQuadradosPares() {
    const quadradosPares = [];

    for (let i = 2; i <= 10; i += 2) {
        quadradosPares.push(i * i);
    }

    return quadradosPares;
}

const quadrados = primeirosQuadradosPares();
console.log(quadrados); // [4, 16, 36, 64, 100]